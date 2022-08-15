import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-directory-profile',
  templateUrl: './directory-profile.component.html',
  styleUrls: ['./directory-profile.component.scss']
})
export class DirectoryProfileComponent implements OnInit {

  id: any;
  loader: boolean;
  feed: any;

  constructor(private router: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)

    this.getProfileDetail()
  }

  getProfileDetail() {
    this.loader = true
    this.apiService.getSingleUser(this.id).subscribe(
      (res:any) => {
        this.loader = false
      console.log(res)
      this.feed = res.data
      }, (err:any) => {
        this.loader = false
      }
    );
  }

}
