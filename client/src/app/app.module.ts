import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//angular materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterTypeMaintenenceComponent } from './master-type-maintenence/master-type-maintenence.component';
import { MasterMaintenenceComponent } from './master-maintenence/master-maintenence.component';
import { LoginComponent } from './login/login.component';
import { UserMaintenenceComponent } from './user-maintenence/user-maintenence.component';

import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { StatusChartComponent } from './status-chart/status-chart.component';
import { ChatChartComponent } from './chat-chart/chat-chart.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ServicesService } from './Services/services.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { UsernnameComponent } from './components/usernname/usernname.component';
import { MasterTypeEditComponent } from './master-type-edit/master-type-edit.component';
import { MasterMaintenenceEditComponent } from './master-maintenence-edit/master-maintenence-edit.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserupdateComponent } from './userupdate/userupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterTypeMaintenenceComponent,
    MasterMaintenenceComponent,
    LoginComponent,
    UserMaintenenceComponent,
    
  
    NavBarAdminComponent,
    NavbarUserComponent,
    StatusChartComponent,
    ChatChartComponent,
    ResetPasswordComponent,
    ChatWindowComponent,
    UserEditComponent,
    UsernnameComponent,
    MasterTypeEditComponent,
    MasterMaintenenceEditComponent,
    CreateUserComponent,
    UserupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,MatIconModule,MatFormFieldModule,FormsModule,
    MatDialogModule,MatMenuModule,MatTableModule,HttpClientModule,MatSelectModule,MatInputModule,
    
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
