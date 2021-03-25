import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-viewproductbyid',
  templateUrl: './viewproductbyid.component.html',
  styleUrls: ['./viewproductbyid.component.css']
})
export class ViewproductbyidComponent implements OnInit {
  product:Product[]
  prd:Product
  delmessage:string
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.product=this.service.getAllProducts()
    this.prd=this.product[2]
  }

  onClick(){
    this.delmessage="Cancel"
    this.service.delMessage(this.delmessage)
  }

}
