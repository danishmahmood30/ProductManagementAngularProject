import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  product:string[]
  constructor(private service:ProductService) {
    this.product=this.service.getProductName()
   }

  ngOnInit() {
  }

  

}
