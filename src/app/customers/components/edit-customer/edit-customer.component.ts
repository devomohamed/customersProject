import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  newTaskForm!:FormGroup
  customer:any
  id:any

  constructor(private fb:FormBuilder ,private activateRoute:ActivatedRoute,private customerService:CustomersService,private router:Router) {
    this.id = activateRoute.snapshot.paramMap.get('id')
    // console.log(this.id);

  }

  // createForm(){
  //   this.newTaskForm = this.fb.group({
  //     name:[this.customer.name,[Validators.required,Validators.minLength(5)]],
  //     mobile:[this.customer.mobile,Validators.required],
  //     description:[this.customer.description,Validators.required],
  //   })
  // }

  createForm(data:any){
    console.log(data);

    this.newTaskForm = this.fb.group({
      name:[data.name,[Validators.required,Validators.minLength(5)]],
      mobile:[data.mobile,Validators.required],
      description:[data.description,Validators.required],
    })
  }

  editTask(){
    this.customerService.updateCustomer(this.id,this.newTaskForm.value)
    this.router.navigateByUrl('/')
  }

  getCustomerData(){
    this.customerService.getCustomerData(this.id).subscribe((res:any)=>{
        // this.customer = res
        this.createForm(res)
    },(error)=>{
      console.log(error);

    })
  }

  ngOnInit(): void {
    this.getCustomerData()
  }

}
