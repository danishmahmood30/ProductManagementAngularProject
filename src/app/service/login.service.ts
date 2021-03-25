import { Injectable } from '@angular/core';
import {AuthService} from './auth.service'

@Injectable()
export class LoginService {

  constructor(
    private auth:AuthService
  ) { }

  loginData ={
    username: "danish",
    password: 1234
  }

  checkLogin(loginDetails:any):boolean{
    if(loginDetails.username==this.loginData.username && loginDetails.password==this.loginData.password){
      this.auth.setToken('sjjfjjfeere')
      return true
    }else {
      return false
    }
  }

  logOut(){
    this.auth.deleteToken()
  }

}
