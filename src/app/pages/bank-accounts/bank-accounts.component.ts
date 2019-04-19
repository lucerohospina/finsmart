import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  bankAccounts = [
    {
      bank: 'BBVA Continental',
      account: '43278972318',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    },
    {
      bank: 'BCP',
      account: '43278972318',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    },
    {
      bank: 'Scotiabank',
      account: '43278972318',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    }
  ];

  showNavigationArrows = true;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.interval = 0;
    config.showNavigationIndicators = false;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
