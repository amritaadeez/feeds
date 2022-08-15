import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-directory-grid',
  templateUrl: './directory-grid.component.html',
  styleUrls: ['./directory-grid.component.scss']
})
export class DirectoryGridComponent implements OnInit {

  id: any;
  loader: boolean;
  feed: any;

  constructor(private apiService: ApiserviceService, private _snackbar: MatSnackBar, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    // console.log(this.id)

    this.getAllUsers()
  }

  getAllUsers() {
    this.loader = true
    this.apiService.getAllUser().subscribe(
      (res:any) => {
        this.loader = false
      console.log(res)
      this.feed = res.data
      }, (err:any) => {
        this.loader = false
      }
    );
  }
  changeRoute(id: any) {
    this.router.navigate(['/dashboard/direct-prof', id]); 
  }

}
