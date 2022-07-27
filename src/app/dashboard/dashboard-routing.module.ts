import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { DirectoryGridComponent } from './directory-grid/directory-grid.component';
import { DirectoryProfileComponent } from './directory-profile/directory-profile.component';
import { GroupComponent } from './group/group.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
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
    
      component: ChatScreenComponent,
    },
    {
      path: "contribution",
    
      component: YourContributionComponent,
    },
    {
      path: "directory",
    
      component: DirectoryGridComponent,
    },
    {
      path: "group",
    
      component: GroupComponent,
    },
    {
      path: "notification",
    
      component: NotificationSettingComponent,
    },
    {
      path: "direct-prof",
    
      component: DirectoryProfileComponent,
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
