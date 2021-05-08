import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import User from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private dbPath = '/users';

  tutorialsRef: AngularFirestoreCollection<any> = null;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAllEmployees(){
    return this.db.collection('users', ref => ref.where('role', '==', 'Employee')).valueChanges({ idField: 'userId' });
  }
  
  SearchEmployeesByPhoneNo(phoneNo: string) {
    return this.db.collection('users', ref => ref.where('role', '==', 'Employee')
    .where('phoneNumber', '==', phoneNo));
  }

  async getEmployeeById(employeeId: string){
    let employee = await this.db.collection('users').doc(employeeId).valueChanges();
    console.log("getEmployeeById",employee);
    return employee;
  }

  getUsersByEmployeeId(employeeId: string){
    return this.db.collection('users', ref => ref.where('employeeId', '==', employeeId)).valueChanges({ idField: 'userId' });
  }

}
