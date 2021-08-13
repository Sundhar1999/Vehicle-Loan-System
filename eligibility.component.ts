import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eligibility } from '../Eligibility';
import { LoanService } from '../loan.service';
import { UserDetails } from '../UserDetails';
import { VehicleDetails } from '../VehicleDetails';
@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit{

  vehicle:VehicleDetails;
  user:UserDetails;
  elig:Eligibility;
  constructor(private loanservice:LoanService,private router:Router) { 
    this.vehicle=new VehicleDetails();
    this.user=new UserDetails();
    this.elig=new Eligibility();
    
  }
    
  ngOnInit(): void {
  }

  saveData()
  {
    this.loanservice.addUserDetails(this.user).subscribe
    (res=>{
      console.log("Return value from REST"+res);
    });
    
    this.loanservice.addVehicleDetails(this.vehicle).subscribe
    (res=>{
      console.log("Return value from REST"+res);
    });


    this.loanservice.addEligibility(this.elig).subscribe
    (res=>{
      console.log("Return value from REST"+res);
    });

    
  
    
  
  }
  // goto()
  // {
  //   this.router.navigate(['showloanoffer']);
    
  // }

}
