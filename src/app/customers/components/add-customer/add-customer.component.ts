import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';
import { customer } from '../../interfaces/CustomerInterface';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  newTaskForm!:FormGroup

  constructor(private fb:FormBuilder ,private customerService:CustomersService,private router:Router) { }

  createForm(){
    this.newTaskForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      mobile:['',Validators.required],
      description:['',Validators.required],
    })
  }

  createTask(){
    this.customerService.addCustomer(this.newTaskForm.value)
    this.router.navigateByUrl('/')
  }

  ngOnInit(): void {
    this.createForm()
  }

}
