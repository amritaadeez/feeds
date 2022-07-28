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
  constructor(private apiService: ApiserviceService, private _snackbar: MatSnackBar, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {

this.allFeeds()
   
  }
  allFeeds() {
    this.apiService.feedList().subscribe(
      (res:any) => {
      console.log(res)
      this.allFeedDatas = res.data
      this.allCarousels = res.meta.carousel_items
      console.log(this.allCarousels)
      }, (err:any) => {
        
      }
    );
  }

}
