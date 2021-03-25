import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-viewallproducts',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.css']
})
export class ViewallproductsComponent implements OnInit {
  product:Product[]
  flag:string
  mes:string
  constructor(private service:ProductService) { 
    

  }

  ngOnInit() {
    this.product=this.service.getAllProducts()
  }
  ngOnCheck(){
    this.mes=this.service.getMessage()
  }
  
  delete(event){
    if(event.target.tagName=="BUTTON"){
      console.log(true)
      // event.target.closest('TR').style.display="none"
      var id = event.target.closest('TR').firstElementChild.innerHTML
      console.log(id);
      this.service.deleteProduct(id)
    }
  }

}
