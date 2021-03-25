import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-registerproduct',
  templateUrl: './registerproduct.component.html',
  styleUrls: ['./registerproduct.component.css']
})
export class RegisterproductComponent implements OnInit {
  formgroup:FormGroup
  message:string
  errmessage:string
  pId:string
  pName:string
  pType:string
  pQuantity:number
  pPrice:number
  constructor(private service:ProductService,private fb:FormBuilder) { }

  ngOnInit() {
    this.formgroup=this.fb.group({

      productName:['',Validators.required],
      productType:['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],

    })
  }
  onsubmit(){
    let product:Product =this.formgroup.value
    product=this.service.registerProduct(product)

    // upating view table after registration
    this.pName=product.productName
    this.pId=product.productId
    this.pType=product.productType
    this.pQuantity=product.quantity
    this.pPrice=product.price

    if(product.productId!=''){
      this.message="Registration Successfull"
    }else {
      this.errmessage="Error in Registration"
    }

    this.formgroup.reset({
      productName:'',
      productType:'',
      quantity:'',
      price:'',
    })
    

    console.log(product)
  }


}
