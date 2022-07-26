import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    Ng2SearchPipeModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
