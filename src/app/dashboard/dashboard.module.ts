import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  DashboardRoutingModule
} from './dashboard-routing.module';
import {
  ProfileComponent
} from './profile/profile.component';
import {
  ResetPasswordComponent
} from './reset-password/reset-password.component';

import {
  NavbarComponent
} from '../navbar/navbar.component';
// import {
//   FooterComponent
// } from '../footer/footer.component';
import {
  SidebarComponent
} from '../sidebar/sidebar.component';
import {
  LayoutComponent
} from '../layout/layout.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatTooltipModule
} from '@angular/material/tooltip';
import {
  PageNotFoundComponent
} from './page-not-found/page-not-found.component';
import {
  MatTabsModule
} from '@angular/material/tabs';

import {
  Ng2SearchPipeModule
} from 'ng2-search-filter';
import {
  ChatScreenComponent
} from './chat-screen/chat-screen.component';
import {
  YourContributionComponent
} from './your-contribution/your-contribution.component';
import {
  DirectoryGridComponent
} from './directory-grid/directory-grid.component';
import {
  GroupComponent
} from './group/group.component';
import {
  NotificationSettingComponent
} from './notification-setting/notification-setting.component';
import {
  AboutComponent
} from './about/about.component';
import {
  TermsConditionComponent
} from './terms-condition/terms-condition.component';
import { DirectoryProfileComponent } from './directory-profile/directory-profile.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { ContributionConfirmedComponent } from './contribution-confirmed/contribution-confirmed.component';
import { ContributionSubmitComponent } from './contribution-submit/contribution-submit.component';
import { RecordContributionComponent } from './record-contribution/record-contribution.component';
import { RecordContributionTwoComponent } from './record-contribution-two/record-contribution-two.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    ResetPasswordComponent,
    LayoutComponent,
    PageNotFoundComponent,
    ChatScreenComponent,
    YourContributionComponent,
    DirectoryGridComponent,
    GroupComponent,
    NotificationSettingComponent,
    AboutComponent,
    TermsConditionComponent,
    DirectoryProfileComponent,
    ContactSearchComponent,
    PostSearchComponent,
    ContributionConfirmedComponent,
    ContributionSubmitComponent,
    RecordContributionComponent,
    RecordContributionTwoComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    MatTabsModule
  ]
})
export class DashboardModule {}
