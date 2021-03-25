import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { RouterModule, Routes} from '@angular/router'
import { ProductService } from './service/product.service';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { ViewproductbyidComponent } from './viewproductbyid/viewproductbyid.component';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component'
import { EmployeeService } from './service/employee.service';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AuthService } from './service/auth.service';

export const routes:Routes=[
  {path:'',component:HeaderComponent, 
    canActivate:[AuthGaurdService],
    children: [
      {path:'home',component:HomeComponent},
      {path:'viewallproducts',component:ViewallproductsComponent},
      {path:'registerproduct',component:RegisterproductComponent},
      {path:'viewproductbyid',component:ViewproductbyidComponent},
      {path:'updatecomponent',component:UpdatecomponentComponent},
      {path:'jobapplication',component:JobapplicationComponent },
      {path:'applicantdetails',component:ApplicantdetailsComponent}, 
    ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ViewallproductsComponent,
    RegisterproductComponent,
    ViewproductbyidComponent,
    UpdatecomponentComponent,
    JobapplicationComponent,
    ApplicantdetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService,EmployeeService , LoginService, AuthGaurdService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
