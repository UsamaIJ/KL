import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { constants } from 'buffer';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeesService } from '../services/employees/employees.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit, OnDestroy {

  employees: any;
  employeeSubscription: Subscription;
  constructor(
    private empService: EmployeesService,
    private db: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.retrieveAllEmployees();
    
  }

  retrieveAllEmployees(): void {
    this.employeeSubscription = this.empService.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log("All Users",this.employees)
    });
  }

  goToEmployeeDetails(employeeId){
    console.log("Employee ID",employeeId)
    console.log(`/employee-details/${employeeId}`)
    this.router.navigate([`/employee-details/${employeeId}`])
  }

  ngOnDestroy(){
    this.employeeSubscription.unsubscribe();
  }

}
