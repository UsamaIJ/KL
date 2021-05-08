import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeesService} from '../services/employees/employees.service';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit, OnDestroy {
  employeeDetails: any;
  users: any;
  usersSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeesService,
    private userService: UsersService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe( async(params: any) => {
      console.log("Parameter",params['id']);
      if (params['id']){
        (await this.empService.getEmployeeById(params['id'])).subscribe((employee) =>{
          this.employeeDetails = employee;
        });
        console.log(this.employeeDetails);
        this.usersSubscription = this.empService.getUsersByEmployeeId(params['id']).subscribe(data => {
          this.users = data;
          console.log("All USers",this.users)
        });
      }
    });
  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe();
  }
  

}
