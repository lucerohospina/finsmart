import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  bankAccounts = [
    {
      bank: 'BBVA Continental',
      ammount: 'S/ 14,889,95',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    },
    {
      bank: 'BBVA Continental',
      ammount: 'S/ 14,889,95',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    },
    {
      bank: 'BBVA Continental',
      ammount: 'S/ 14,889,95',
      cci: '01135900020018600474',
      currency: 'PEN',
      date: '04/feb/2019',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
