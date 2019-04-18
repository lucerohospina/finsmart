import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  name = 'Alexander';

  constructor() {
  }

  public show;

  @Input() tabMobileChild;
  @Input() function: any;
  @Output() tabMobileChildChange = new EventEmitter<boolean>();


  ngOnInit() {
  }

  toggle() {
    this.tabMobileChildChange.emit(!this.tabMobileChild);
  }

}
