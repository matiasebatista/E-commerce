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

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    BannerComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [EcommerceService,{provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
