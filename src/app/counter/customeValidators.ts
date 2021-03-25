import { AbstractControl } from "@angular/forms";

export class CustomValidators {

    static isSomething(something){
        return (control)=>{

        }
    }

    static isPasswordValid(control: AbstractControl){ 
        let password= control.value
        return password!=null && password.length>=5 ? null : { isPasswordValid: true}
    }

    static isNumber(control:AbstractControl):null|{[key:string]:boolean}{
        let toBeChecked = control.value
        return toBeChecked!=null && toBeChecked.match(/^(?=.*[0-9])/) ? {isNumber :false} : null
        
    }

    static isSymbol(control:AbstractControl):null|{[key:string]:boolean}{
        let toBeChecked = control.value
        return toBeChecked!=null && toBeChecked.match(/^(?=.*[!@#$%^&*()_+{{}<>?/,.;'":])/) ?
         {isSymbol :false} : null
    }

    static isAgeValid(control:AbstractControl):null|{[key:string]:boolean}{
        let toBeChecked = control.value
        return toBeChecked!=null && isNaN(toBeChecked) ?
         { isAgeValid:false} : null
    }

    static isEmailValid(control:AbstractControl):null|{[key:string]:boolean}{
        let toBeChecked = control.value
        return toBeChecked!=null && toBeChecked.match(/^[a-zA-Z]+[a-zA-Z0-9.-_]+@[a-zA-Z-]+\.+[a-zA-Z]+$/) ?
         null :  {isEmailValid :false}  
    }

    static passwordMatched(control:AbstractControl):null|{[key:string]:boolean}{
        let toBeChecked = control.value
        let passwordElement = (<HTMLInputElement>document.querySelector('#password'))
        let password = passwordElement!=null ? passwordElement.value : ""
        return toBeChecked!=null && toBeChecked==password ? null : {passwordMatched:false}
    }

    static isChecked(control:AbstractControl):null|{[key:string]:boolean}{
        let toBeChecked = control.value
        console.log(toBeChecked)
        return toBeChecked==true ? null : {toBeChecked:false}
    }

    static isValid(control:AbstractControl):null|{[key:string]:boolean}{
            let count=0;
            let password = control.value
            if(password!=null){
                password.length>=8 ?
                    (document.querySelector('.min-length').classList.add('valid-password'), count++ )
                    :  document.querySelector('.min-length').classList.remove('valid-password') 
                
                password.match(/^(?=.*[a-z])/) ?
                    (document.querySelector('.lowercase').classList.add('valid-password'), count++)
                    : document.querySelector('.lowercase').classList.remove('valid-password')

                password.match(/^(?=.*[A-Z])/) ?
                    (document.querySelector('.uppercase').classList.add('valid-password'), count++)
                    : document.querySelector('.uppercase').classList.remove('valid-password')
                
                password.match(/^(?=.*[0-9])/) ?
                    (document.querySelector('.number').classList.add('valid-password'), count++)
                    : document.querySelector('.number').classList.remove('valid-password')

                password.match(/^(?=.*[!@#$%^&*()_+{{}<>?/])/) ?
                    (document.querySelector('.symbol').classList.add('valid-password'), count++)
                    : document.querySelector('.symbol').classList.remove('valid-password')
            }
            if(count==5) {
                return null
            }else {
                return {isValid:false}
            }  
        
    }
}