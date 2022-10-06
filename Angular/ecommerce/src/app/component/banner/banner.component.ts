import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationServiceService } from 'src/app/service/autentication-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
opened=false;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  imgCollection: Array<object> = [
    {
      image: 'https://res.cloudinary.com/duooheafl/image/upload/v1659312280/fotos%20portfolio/WhatsApp_Image_2021-07-16_at_23.11.07_eo11dr.jpg',
      thumbImage: 'https://res.cloudinary.com/duooheafl/image/upload/v1659312280/fotos%20portfolio/WhatsApp_Image_2021-07-16_at_23.11.07_eo11dr.jpg',
    
    
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
     
      
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',     
    }
];

login(){
  this.router.navigate(['/login'])
}

}
