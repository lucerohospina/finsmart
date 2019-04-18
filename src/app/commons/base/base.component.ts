import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }
  tabMobile = false;

  ngOnInit() {
    this.tabMobile = false;
  }

  changeBoolMobile = function () {
    this.tabMobile = !this.tabMobile;
  };
}
