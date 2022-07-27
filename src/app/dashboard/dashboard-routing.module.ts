import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { DirectoryGridComponent } from './directory-grid/directory-grid.component';
import { DirectoryProfileComponent } from './directory-profile/directory-profile.component';
import { GroupComponent } from './group/group.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { PostSearchComponent } from './post-search/post-search.component';
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
      path: "contribution",
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
