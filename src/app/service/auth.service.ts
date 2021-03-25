import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import {JwtHelperService} from 'angular-jwt'

@Injectable()
export class AuthService {

  constructor(
    // public jwtHelper:JwtHelperService
  ) { }

  // public isAuthenticated():boolean{
  //   const token = localStorage.getItem('token')
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  setToken(token:string){
    localStorage.setItem('token',token)
  }

  getToken():string{
    return localStorage.getItem('token')
  }

  deleteToken(){
    localStorage.removeItem('token')
  }

  isTokenExpired():boolean{
    console.log(this.getToken())
    return this.getToken()? false :true
  }

  isAuthenticated():boolean{
    return !this.isTokenExpired()
  }

}
