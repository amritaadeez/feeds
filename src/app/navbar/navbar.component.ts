import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  avatar: any;
  userId: string;
  filter: any;
  filterNew: any;
  newGet: string;
  URL: string;
  
  constructor( private apiService: ApiserviceService, private actiRoute: ActivatedRoute, public router: Router, private _snackbar: MatSnackBar, private autService: AuthService) { 
  }

  ngOnInit(): void { 
    this.autService.profilePic.subscribe(data => {
      this.avatar = data
      console.log(this.avatar)
    })

    

    this.userId = localStorage.getItem("id");
   this.URL = localStorage.getItem('URL')
   console.log(this.URL)

    if(this.URL.includes('search-')){
    this.filter = localStorage.getItem('searchData')
    }else{
    localStorage.removeItem('searchData')
    this.filter = ''
    }
    
    this.autService.searchData.subscribe(data =>{
      this.filter = data
    })
// console.log(this.filter)
  }

 openNav() {
    document.getElementById("mySidenav").style.width = "320px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  logout() {
    this.apiService.userLogout().subscribe(
      (res:any)=>{
        this._snackbar.open(res.message, "Thanks", {
          duration: 3000
        });
        localStorage.clear()
        this.router.navigate(['/'])
      },
      (err:any)=>{
        this._snackbar.open("Something Went Wrong", "Try Again", {
          duration: 3000
        });
      }

    );
    
  
  }

  charCount(data:any) {
    localStorage.setItem("searchData",this.filter)
   this.newGet = localStorage.getItem("searchData")
    this.autService.searchData.next(this.newGet)
    if(this.URL.includes('search-contact')){
      this.router.navigate(['/dashboard/search-contact', this.filter])
    }else{
      this.router.navigate(['/dashboard/search-post', this.filter])
    }
  }

}
