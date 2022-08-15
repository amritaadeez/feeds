import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  details: any;

  constructor(private apiservice : ApiserviceService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.apiservice.termsService().subscribe(
      (res: any) => {
        console.log(res)
        this.details = res.data
      }, (err: any) => {
        console.log(err)
      }
    );
  }

}
