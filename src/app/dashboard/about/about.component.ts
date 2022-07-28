import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  details: any;

  constructor(private apiservice : ApiserviceService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.apiservice.aboutDetails().subscribe(
      (res: any) => {
        console.log(res)
        this.details = res.data
      }, (err: any) => {
        console.log(err)
      }
    );
  }

}
