import { Component, AfterViewInit , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CustomersService } from '../../../services/customers.service';
import { customer } from '../../interfaces/CustomerInterface';

@Component({
  selector: 'app-customers-data',
  templateUrl: './customers-data.component.html',
  styleUrls: ['./customers-data.component.scss']
})
export class CustomersDataComponent implements AfterViewInit {

  ELEMENT_DATA!: any[]


  displayedColumns: string[] = ['code', 'name', 'description', 'mobile','edit','delete'];
  dataSource = new MatTableDataSource<customer>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService:CustomersService){}


  ngAfterViewInit() {
    this.getAllUsers()
    this.dataSource.paginator = this.paginator;
  }

  getAllUsers(){
    this.customerService.getCustomers().subscribe((res:any)=>{
      this.ELEMENT_DATA = res.map((ele:any)=>{
        return {
          code:ele.payload.doc.id,
          ...ele.payload.doc.data()
        }
      })
      this.dataSource.data = this.ELEMENT_DATA
    },(error)=>{
      console.log(error);
    })
  }

  deleteCustomer(id:any){
    this.customerService.deleteCustomer(id)
  }

}
