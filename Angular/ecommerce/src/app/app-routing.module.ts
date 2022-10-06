
import { GuardService } from './service/guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainviewComponent } from './component/mainview/mainview.component';
import { LoginComponent } from './component/login/login.component';


const routes : Routes = [
    {path:'mainview',component:MainviewComponent,pathMatch:"full"},
    {path:'',redirectTo:'mainview',pathMatch:'full'} ,
    {path:'login',component: LoginComponent,pathMatch:"full"}
    ];
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  
  })
  export class AppRoutingModule { }
  