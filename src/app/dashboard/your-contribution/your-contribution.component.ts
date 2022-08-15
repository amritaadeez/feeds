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
  displayVideo = false;
  displayImage: boolean;
  views: any;

  constructor(private router: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id)

    this.getFeedDetails()
    this.getRegisterView()
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
  getRegisterView() {
    // this.loader = true
    this.apiService.registerView(this.id).subscribe(
      (res:any) => {
        // this.loader = false
      console.log(res)
      this.views = res.data.impressions.text
      }, (err:any) => {
        // this.loader = false
      }
    );
  }
  onPlay(){
    this.displayVideo= true;
    // this.displayImage = false; 
    console.log(this.displayVideo)
  }
}
