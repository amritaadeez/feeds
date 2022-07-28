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
allFeedDatas: any
allCarousels: any 
loader:Boolean = true
  commentInput: any;
  constructor(private apiService: ApiserviceService, private _snackbar: MatSnackBar, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
   
this.allFeeds()
// this.createLike()
   
  }
  allFeeds() {
    this.loader = true
    this.apiService.feedList().subscribe(
      (res:any) => {
        this.loader = false
      console.log(res)
      this.allFeedDatas = res.data
      this.allCarousels = res.meta.carousel_items
      console.log(this.allCarousels)
      }, (err:any) => {
        this.loader = false
      }
    );
  }

  createLike(id: any, userLike: boolean) {
    console.log("ssss", id)

    if (!userLike) {
      this.apiService.createLike(id).subscribe(
        (res:any) => {
          this.loader = false
          this.apiService.feedList().subscribe(
            (res:any) => {
              this.loader = false
            console.log(res)
            this.allFeedDatas = res.data
            this.allCarousels = res.meta.carousel_items
            console.log(this.allCarousels)
            }, (err:any) => {
              this.loader = false
            }
          );
   
        }, (err:any) => {
          this.loader = true
        }
      );
    } else {
      this.apiService.removeLike(id).subscribe(
        (res:any) => {
          this.loader = false
          this.apiService.feedList().subscribe(
            (res:any) => {
              this.loader = false
            console.log(res)
            this.allFeedDatas = res.data
            this.allCarousels = res.meta.carousel_items
            console.log(this.allCarousels)
            }, (err:any) => {
              this.loader = false
            }
          );
   
        }, (err:any) => {
          this.loader = true
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
