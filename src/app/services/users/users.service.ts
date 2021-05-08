import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import User  from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private db: AngularFirestore
  ) { }

  getAllUsers() {
    return this.db.collection('users', ref => ref.where('role', '==', 'User')).valueChanges({ idField: 'userId' });
  }

  updateUserSubscription(userId) {
    return this.db
      .collection("users")
      .doc(userId)
      .set({
        subscription: true,
        employeeId:
          'bYpltxghnJcYoUz8M5U7W50ZO2h2'
      }, { merge: true });
  }


  SearchUsersByPhoneNo(phoneNo: string) {
    return this.db.collection('users', ref => ref.where('role', '==', 'User')
      .where('phoneNumber', '==', phoneNo));
  }

  async getUserById(employeeId: string) {
    let user = await this.db.collection('users').doc(employeeId).get().toPromise();
    return user;
  }

  getUsersByEmployeeId(employeeId: string) {
    return this.db.collection('users', ref => ref.where('employeeId', '==', employeeId));
  }
}
