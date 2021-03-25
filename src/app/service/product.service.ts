import { Injectable } from '@angular/core';
import { Product } from '../model/product';


@Injectable()
export class ProductService {
  prodIdGen=5
  delmessage:string
  product:Product[]=[
    {productId:'P1',productName:'Soap',productType:'HouseHold',quantity:1,price:100},
    {productId:'P2',productName:'Mouse',productType:'Electronics',quantity:6,price:200},
    {productId:'P3',productName:'Phone',productType:'Gadgets',quantity:9,price:400},
    {productId:'P4',productName:'Detergent',productType:'HouseHold',quantity:20,price:900},
    {productId:'P5',productName:'Shirt',productType:'Clothes',quantity:5,price:800}
  ]
  constructor() { }

  getAllProducts():Product[]{
    return this.product
  }

  getProductName():string[]{
    return this.product.map((item)=>{
      return item.productName;
    })
  }

  registerProduct(prod:Product):Product{
    this.prodIdGen++
    let productId="P"+this.prodIdGen
    prod.productId=productId
    
    this.product.push(prod)

    return prod
  }

  deleteProduct(productid:string):boolean{
    for (var i=0;i<this.product.length;i++){
      if(this.product[i].productId==productid){
        this.product.splice(i,1)
      }
    }
    return true
  }
  delMessage(delm:string){
    this.delmessage=delm
  }
  getMessage():string{
    return this.delmessage
  }

}
