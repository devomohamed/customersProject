import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private angularFirestore:AngularFirestore) { }

  addCustomer(data:any){
    return this.angularFirestore.collection('customers').add(data)
  }
  getCustomers(){
    return this.angularFirestore.collection('customers').snapshotChanges()
  }

  getCustomerData(id:any){
    return this.angularFirestore.doc(`customers/${id}`).valueChanges()
  }

  updateCustomer(id:any,data:any){
    return this.angularFirestore.doc(`customers/${id}`).update({
      name:data.name,
      mobile:data.mobile,
      description:data.description
    })
  }

  deleteCustomer(id:any){
    return this.angularFirestore.doc(`customers/${id}`).delete()
  }


}
