import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiserviceService
} from 'src/app/apiservice.service';
import * as moment from 'moment';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from 'src/app/auth.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
allFeedDatas: any;
allCarousels: any 
loader:Boolean = true
  commentInput: any;
  liked: any;
  loaders: boolean;
  index: any;
  listArray : string[] = [];
  sum = 4;
  direction = "";
  updateTime: any;
  allfeedArray: any[];
  updateTimeComment: any;
  allcommentArray: any[];
  mainData: string;
  constructor(private apiService: ApiserviceService, private _snackbar: MatSnackBar, private router: Router, private authService: AuthService) {
    // this.appendItems();
  }

  ngOnInit(): void {
 this.allFeedDatas = JSON.parse(localStorage.getItem('allFeeds'))
this.allFeeds()
// this.createLike()
   
  }
  allFeeds() {
    console.log(this.allFeedDatas)
    if(this.allFeedDatas == null || this.allFeedDatas == undefined || this.allFeedDatas == ''){
    this.loader = true
    }
    else{
      this.loader = false
    }
    this.allfeedArray = [];
    this.allcommentArray = [];
    this.apiService.feedList().subscribe(
      (res:any) => {
        this.loader = false
      console.log(res)
      this.allFeedDatas = res.data
      localStorage.setItem('allFeeds', JSON.stringify(this.allFeedDatas))
      // console.log(this.allFeedDatas.length)
      this.allCarousels = res.meta.carousel_items
      for(let i=0; i <this.allFeedDatas.length; i++){
      

        this.updateTime = moment.unix(this.allFeedDatas[i].content_time_created).format("MM/DD/YYYY, hh:mm:ss")
        this.allfeedArray.push(this.updateTime)
        this.updateTimeComment = moment.unix(this.allFeedDatas[i].last_comment.time).format("MM/DD/YYYY, hh:mm:ss")
        this.allcommentArray.push(this.updateTimeComment)

      }
      console.log(this.allfeedArray)
      }, (err:any) => {
        this.loader = false
      }
    );
  }

 

  createLike(id: any, userLike: boolean, index: any) {
    console.log("ssss", id, index)
this.loaders = true
this.index = index
    if (userLike) {

    this.liked = false
    } else {
      this.liked = true
    }


    if (!userLike) {
      this.apiService.createLike(id).subscribe(
        (res:any) => {
          this.apiService.feedList().subscribe(
            (res:any) => {
              this.loaders = false
            console.log(res)
            this.allFeedDatas = res.data
            this.allCarousels = res.meta.carousel_items
            console.log(this.allCarousels)
            }, (err:any) => {
              this.loaders = false
            }
          );
   
        }, (err:any) => {
          this.loader = true
        }
      );
    } else {
      this.apiService.removeLike(id).subscribe(
        (res:any) => {
          
          this.apiService.feedList().subscribe(
            (res:any) => {
              this.loaders = false
            console.log(res)
            this.allFeedDatas = res.data
            this.allCarousels = res.meta.carousel_items
            console.log(this.allCarousels)
            }, (err:any) => {
              this.loaders = false
            }
          );
   
        }, (err:any) => {
          this.loaders = true
        }
      );
    }
    
    
  }

  commentSet(comm: any) {
    this.commentInput = comm
  }

  sendComment(id: any) {
    const formData = new FormData();
    formData.append('comment_text',this.commentInput);
      this.apiService.createComment(formData, id).subscribe(
      (response: any) => {
        console.log(response)
        this._snackbar.open("Commented successfully", "Thanks", {
          duration: 3000
        });
        // this.commentInput = ''
        this.apiService.feedList().subscribe(
          (res:any) => {
            this.loaders = false
          console.log(res)
          this.allFeedDatas = res.data
          this.allCarousels = res.meta.carousel_items
          console.log(this.allCarousels)
          }, (err:any) => {
            this.loaders = false
          }
        );
      
      
      }, (error: any) => {
        this._snackbar.open(error.error.message, "Thanks", {
          duration: 3000
        });
      }
    );
  }

  changeRoute(id: any) {
    this.router.navigate(['/dashboard/contribution', id]); 
  }
}
