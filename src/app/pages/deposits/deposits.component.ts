import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',  size: 'sm', centered: true, windowClass: 'loginModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  ngOnInit() {
  }

}
