import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-your-contribution',
  templateUrl: './your-contribution.component.html',
  styleUrls: ['./your-contribution.component.scss']
})
export class YourContributionComponent implements OnInit {
  id: any;
  loader: boolean;
  feed: any;

  constructor(private router: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)

    this.getFeedDetails()
  }
  getFeedDetails() {
    this.loader = true
    this.apiService.getFeedDetails(this.id).subscribe(
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
