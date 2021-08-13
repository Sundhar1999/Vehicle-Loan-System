import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleDetails } from './VehicleDetails';
import { UserDetails } from './UserDetails';
import { Eligibility } from './Eligibility';
import { LoanDetails } from './LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9779//loanRest/api";


  //RETRIEVING PRODUCTS
  getAllVehicleDetails()
  {
    return this.httpClient.get(this.baseUrl+"/VehicleDetails"); 
  }

  getAllLoanDetails()
  {
    return this.httpClient.get(this.baseUrl+"/VehicleDetails"); 
  }

  //ADDING PRODUCT
  addVehicleDetails(vehicledetails:VehicleDetails)
  {
    return this.httpClient.post(this.baseUrl+"/VehicleDetails",vehicledetails);
  }

  addUserDetails(userdetails:UserDetails)
  {
    return this.httpClient.post(this.baseUrl+"/UserDetails",userdetails);
  }

  addEligibility(elig:Eligibility)
  {
    return this.httpClient.post(this.baseUrl+"/Eligibility",elig);
  }
  getloandata(loanamount:number)
  {
    console.log(loanamount);
    return this.httpClient.get(this.baseUrl+"/LoanDetailsbyname/"+loanamount);
  }


//SEARCHING THROUGH VALUES
// getLoanDetailsByLoanamount(loanamount:number)
//   {
//     return this.httpClient.get(this.baseUrl+"/LoanDetailsbyname/"+loanamount);
//   } 


// searchLoanDetailsByLoanamount(loanamount: number) {
//   return this.httpClient.get(this.baseUrl+"/LoanDetailsbyname/"+loanamount);
//   //throw new Error('Function not implemented.');
// }

// function searchLoanDetailsByLoanamount(loanamount: any, number: any) {
//   throw new Error('Function not implemented.');
// }
}
