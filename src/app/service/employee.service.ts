import { Injectable } from '@angular/core';
import { Applicant } from '../model/applicant'

@Injectable()
export class EmployeeService {

  applicantList:Applicant[] =[]
  constructor() { }

  addApplicant(applicant:Applicant):boolean{
    console.log(applicant)
    this.applicantList.push(applicant)
    console.log(this.applicantList)
    return true

  }

}
