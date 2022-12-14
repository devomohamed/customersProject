import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements OnInit {

  opened:Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
