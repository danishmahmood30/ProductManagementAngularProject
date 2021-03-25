import { Component, OnInit } from '@angular/core';
import {Applicant} from '../model/applicant'
import { FormGroup,FormBuilder,FormControl, FormArray, Validators} from '@angular/forms';
import {EmployeeService} from '../service/employee.service'
import { Router } from '@angular/router';

import { CustomValidators } from '../counter/customeValidators'


@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css']
})
export class JobapplicationComponent implements OnInit {

  applicant:Applicant;
  flag:boolean;
  file:File
  url:any
  error:boolean=false;
  passReqShow=false;
  applicantForm:FormGroup;
  achievementsListControl:FormArray;

  firstNameControl:FormControl;
  lastNameControl:FormControl;
  ageControl:FormControl;
  genderControl:FormControl;
  dobControl:FormControl;
  qualificationControl:FormControl;
  emailControl:FormControl;
  passwordControl:FormControl;
  confirmPasswordControl:FormControl;
  addressControl:FormControl;
  cityControl:FormControl;
  stateControl:FormControl;
  zipControl:FormControl;
  declarationControl:FormControl;

  constructor(private appService:EmployeeService ,private formBuilder:FormBuilder,private router:Router) { 
    this.buildForm();
  }

  ngOnInit() {
   let firstNameControl = this.applicantForm.get('firstName') as FormControl
   firstNameControl.setValue('danish',{emitEvent:true})
  }

  private buildForm() {
    this.applicantForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required, Validators.minLength(3),
        CustomValidators.isNumber, CustomValidators.isSymbol]),
      lastName:this.formBuilder.control(null, [Validators.required, Validators.minLength(3),
        CustomValidators.isNumber, CustomValidators.isSymbol]),
      age:this.formBuilder.control(null, [Validators.required, CustomValidators.isAgeValid]),
      gender:this.formBuilder.control(null, [Validators.required]),
      dateOfBirth:this.formBuilder.control(null, [Validators.required]),
      qualification:this.formBuilder.control(null, [Validators.required]),
      email:this.formBuilder.control(null, [Validators.required, CustomValidators.isEmailValid]),
      password1:this.formBuilder.control(null, [Validators.required, CustomValidators.isValid]),
      password2:this.formBuilder.control(null, [Validators.required, CustomValidators.passwordMatched]),
      uploadFile:this.formBuilder.control(null),
      addressLine1:this.formBuilder.control(null, [Validators.required]),
      addressLine2:this.formBuilder.control(null),
      city:this.formBuilder.control(null, [Validators.required]),
      state:this.formBuilder.control(null, [Validators.required]),
      district:this.formBuilder.control(null),
      zipCode:this.formBuilder.control(null, [Validators.required]),

      outdoorGames:this.formBuilder.group({
        cricket:this.formBuilder.control(null),
        hockey:this.formBuilder.control(null),
        tennis:this.formBuilder.control(null),
      }),

      artsCulture:this.formBuilder.group({
        painting:this.formBuilder.control(null),
        dancing:this.formBuilder.control(null),
        singing:this.formBuilder.control(null),
      }),

      indoorGames:this.formBuilder.group({
        chess:this.formBuilder.control(null),
        billiards:this.formBuilder.control(null),
        tableTennis:this.formBuilder.control(null),
      }),

      coCurricular:this.formBuilder.group({
        debates:this.formBuilder.control(null),
        extempore:this.formBuilder.control(null),
        mun:this.formBuilder.control(null),
      }), 

      achievements:this.formBuilder.array([
        this.formBuilder.control(null)
      ]),

      bio:this.formBuilder.control(null),
      declaration:this.formBuilder.control(null, [CustomValidators.isChecked]),

    },
    {
      // validator : CustomValidators.isValid('password1')   //for single custom validation
        // Validators : [CustomValidators.isValid('password1'),CustomValidators.isPasswordValid('password2')]
    });

    this.achievementsListControl=this.applicantForm.get('achievements') as FormArray
    
    this.setFormControl();

    this.applicantForm.get('age').valueChanges.subscribe(value=>{
      console.log(Number(value))
      if(!Number(value)) {
        this.error=true
      }else {
        this.error=false
      }
    })
    
  }

  //we can use this.applicantForm.get('formControlName') fore every feild
  setFormControl():void{
    this.firstNameControl = this.applicantForm.get('firstName') as FormControl
    this.lastNameControl = this.applicantForm.get('lastName') as FormControl
    this.ageControl = this.applicantForm.get('age') as FormControl
    this.genderControl = this.applicantForm.get('gender') as FormControl
    this.dobControl = this.applicantForm.get('dateOfBirth') as FormControl
    this.emailControl = this.applicantForm.get('email') as FormControl
    this.qualificationControl = this.applicantForm.get('qualification') as FormControl
    this.passwordControl = this.applicantForm.get('password1') as FormControl
    this.confirmPasswordControl = this.applicantForm.get('password2') as FormControl
    this.addressControl = this.applicantForm.get('addressLine1') as FormControl
    this.cityControl = this.applicantForm.get('city') as FormControl
    this.stateControl = this.applicantForm.get('state') as FormControl
    this.zipControl = this.applicantForm.get('zipCode') as FormControl
    this.declarationControl = this.applicantForm.get('declaration') as FormControl
  }

  onAddAchievements(){
    this.achievementsListControl.push(this.formBuilder.control(null))
  }

  onRemoveAchievements(index){
    this.achievementsListControl.removeAt(index)
  }

  onChange(value){
    console.log(value)
  }

  onPasswordClick(){
    this.passReqShow=true
  }

  onFileUpload(event){
   if(event.target.files && event.target.files[0]){
     this.file = event.target.files[0]        //create files for sending to the server using httprequest
     

     //for previewing the file from the fakepath using file reader
     var reader = new FileReader()
     reader.onload = (event:ProgressEvent) => {
      this.url = (<FileReader>event.target).result
     }
     reader.readAsDataURL(event.target.files[0])
   }
  }

  onSubmit(){
    console.log(this.applicantForm.value)
    let applicant:Applicant = this.applicantForm.value
    console.log(applicant)
    this.appService.addApplicant(applicant)
    this.router.navigate(['/applicantdetails'])    //use activated router
    console.log(this.applicantForm.status)
  }
  onReset() {
    this.applicantForm.reset({
      lastName: 'Mahmood'
    })
  }
  

  

}
