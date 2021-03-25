import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder , FormGroup } from '@angular/forms'
import { LoginService} from '../service/login.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform:FormGroup
  loginError:boolean
  unsuccessful=true

  constructor(private service:LoginService , private formbuilder:FormBuilder ,private router:Router) { }

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      username:this.formbuilder.control(null),
      password:this.formbuilder.control(null)
    })
    this.service.logOut() //after you are logged in login if you visit login page , it will log you out
  }

  onChange() {
    console.log("hii")
    console.log(document.documentElement.clientHeight)
  }

  onSubmit(){
    console.log(this.loginform.value)
    if(this.service.checkLogin(this.loginform.value)){
      console.log("login successful")
      this.unsuccessful=false
      this.router.navigate(['/home'])
    }else {
      console.log("invalid credentials")
      this.loginError=true
    }
  }

}
