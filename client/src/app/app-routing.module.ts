import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterTypeMaintenenceComponent } from './master-type-maintenence/master-type-maintenence.component';
import { LoginComponent } from './login/login.component';
import { MasterMaintenenceComponent } from './master-maintenence/master-maintenence.component';
import { UserMaintenenceComponent } from './user-maintenence/user-maintenence.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { StatusChartComponent } from './status-chart/status-chart.component';
import { ChatChartComponent } from './chat-chart/chat-chart.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MasterTypeEditComponent } from './master-type-edit/master-type-edit.component';

const routes: Routes = [
  {path:'mastertypeEdit' ,component:MasterTypeEditComponent},
  {path:'userEdit',component:UserEditComponent},
  {path:'chatwindow',component:ChatWindowComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'statuschart',component:StatusChartComponent},
  {path:'chatchart',component:ChatChartComponent},
  {path:'navuser',component:NavbarUserComponent},
  {path:'navAdmin',component:NavBarAdminComponent},
 
  {path:'usermaintain',component:UserMaintenenceComponent},
  {path:'mastertype',component:MasterTypeMaintenenceComponent},
  {path:'login',component:LoginComponent},
  {path:'mastermaintain',component:MasterMaintenenceComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
