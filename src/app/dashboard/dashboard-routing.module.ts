import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContributionConfirmedComponent } from './contribution-confirmed/contribution-confirmed.component';
import { ContributionSubmitComponent } from './contribution-submit/contribution-submit.component';
import { DirectoryGridComponent } from './directory-grid/directory-grid.component';
import { DirectoryProfileComponent } from './directory-profile/directory-profile.component';
import { GroupComponent } from './group/group.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { RecordContributionTwoComponent } from './record-contribution-two/record-contribution-two.component';
import { RecordContributionComponent } from './record-contribution/record-contribution.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { YourContributionComponent } from './your-contribution/your-contribution.component';



const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  children: [

  
    {
      path: 'home',
      loadChildren: () => import(`./home/home.module`).then(
        module => module.HomeModule
      )
    },
    {
      path: "chat",
      canActivate: [AuthGuard],
      component: ChatScreenComponent,
    },
    {
      path: "contribution/:id",
      canActivate: [AuthGuard],
      component: YourContributionComponent,
    },
    {
      path: "directory",
      canActivate: [AuthGuard],
      component: DirectoryGridComponent,
    },
    {
      path: "group",
      canActivate: [AuthGuard],
      component: GroupComponent,
    },
    {
      path: "notification",
      canActivate: [AuthGuard],
      component: NotificationSettingComponent,
    },
    {
      path: "contribution-confirmed",
      canActivate: [AuthGuard],
      component: ContributionConfirmedComponent,
    },
    {
      path: "contribution-submit",
      canActivate: [AuthGuard],
      component: ContributionSubmitComponent,
    },
    {
      path: "record",
      canActivate: [AuthGuard],
      component: RecordContributionComponent,
    },
    {
      path: "record-two",
      canActivate: [AuthGuard],
      component: RecordContributionTwoComponent,
    },
    {
      path: "direct-prof",
      canActivate: [AuthGuard],
      component: DirectoryProfileComponent,
    },
    {
      path: "search-contact",
      canActivate: [AuthGuard],
      component: ContactSearchComponent,
    },
    {
      path: "search-post",
      canActivate: [AuthGuard],
      component: PostSearchComponent,
    },
    {
      path: "about",
      canActivate: [AuthGuard],
      component: AboutComponent,
    },
    {
      path: "terms",
      canActivate: [AuthGuard],
      component: TermsConditionComponent,
    },
    {
      path: "**",
      canActivate: [AuthGuard],
      component: PageNotFoundComponent,
    },
  ],
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
