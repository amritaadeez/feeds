import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import * as moment from 'moment';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {
  details: any;
  id: any;
  loader: boolean;
  updateTime: string;
  allTimeArray: any[];
  // @Input() item = ''; 
  constructor(private apiservice : ApiserviceService, private router: Router, private activRoute: ActivatedRoute, private autService: AuthService) { }

  ngOnInit(): void {
  this.autService.searchData.subscribe(
    data => {
      console.log(data)
      this.id = data
    }

  )
    this.id = this.activRoute.snapshot.params['id'];
    this.getDetails()

    this.router.routeReuseStrategy.shouldReuseRoute = () => false

  }


  getDetails() {
    this.loader = true
    this.allTimeArray = []
    this.apiservice.getContactSearchData(this.id).subscribe(
      (res: any) => {
    this.loader = false
        console.log(res)
        this.details = res.data
        for(let i=0; i <this.details.length; i++){
          this.updateTime = moment.unix(this.details[i].content_time_updated).format("MM/DD/YYYY, hh:mm:ss")
          this.allTimeArray.push(this.updateTime)
          console.log(this.updateTime)

        }
      }, (err: any) => {
        console.log(err)
      }
    );
  }

  navPost(){
    this.autService.searchData.next('')
    this.router.navigate(['/dashboard/search-post', ''])

  }
}
