import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  private newAttribute: any = {
    bank: 'BCP',
    currency: 'PEN',
  };

  bankAccounts = [
    {
      id: 1,
      bank: 'BBVA Continental',
      account: '43278972318',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    },
    {
      id: 2,
      bank: 'BCP',
      account: '43278972318',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    },
    {
      id: 3,
      bank: 'Scotiabank',
      account: '43278972318',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    }
  ];

  showNavigationArrows = true;
  showNavigationIndicators = false;
  closeResult: string;
  show = false;
  currentItemEdited: number;
  edited = false;

  constructor(config: NgbCarouselConfig, private modalService: NgbModal) {
    config.showNavigationArrows = true;
    config.interval = 0;
    config.showNavigationIndicators = false;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',  size: 'sm', centered: true, windowClass: 'bankModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  saveAndClose() {
    this.addFieldValue();
    this.modalService.dismissAll();
  }

  showAdd() {
    this.show = true;
  }

  hideAdd() {
    this.show = false;
  }

  delete(id) {
    const arr = this.bankAccounts.filter(c => c.id !== id);

    this.bankAccounts = arr;
  }

  openEdit(content, id) {
    this.edited = true;
    this.currentItemEdited = id;
    this.newAttribute = this.bankAccounts.find(c => c.id === id);
    if (window.innerWidth < 768) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',  size: 'sm', centered: true, windowClass: 'bankModal'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
    }
  }

  editAccount(id) {
    const arr = this.bankAccounts.filter(c => c.id !== id);
    this.bankAccounts = [...arr, this.newAttribute];
    this.edited = false;
    this.currentItemEdited = null;
    if (window.innerWidth < 768) {
      this.modalService.dismissAll();
    }
  }

  hideMobileEdit() {
    this.edited = true;
    this.currentItemEdited = null;
    this.newAttribute = {
      bank: 'BCP',
      currency: 'PEN',
    };
  }

  addFieldValue() {
    this.bankAccounts.push({
      date: '04/feb/2019',
      id: new Date().getTime(),
      ...this.newAttribute});
    this.newAttribute = {};
  }

  ngOnInit() {
  }

}
