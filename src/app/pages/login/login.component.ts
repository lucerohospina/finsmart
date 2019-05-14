import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string;
  passwordChange = false;

  constructor(private router:Router, private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',  size: 'sm', centered: true, windowClass: 'loginModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  changePassword() {
    this.passwordChange = true;
  }

  ngOnInit() {
  }

  loginUser(e) {
    console.log("login")
    e.preventDefault();
    this.router.navigate(['oportunidades']);
  }

}
