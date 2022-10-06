import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainviewComponent } from './component/mainview/mainview.component';
import { BannerComponent } from './component/banner/banner.component';
import { EcommerceService } from './service/ecommerce.service';
import { InterceptorService } from './service/interceptor.service';
import { LoginComponent } from './component/login/login.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    BannerComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,

  

  ],
  providers: [EcommerceService,{provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
