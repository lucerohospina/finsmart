import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  investmens = [
    {
      text: 'Monto Disponible',
      ammount: 'S/ 45,452.32',
      secondAmmount: '$ 4,452.87',
    },
    {
      text: 'En validación',
      ammount: 'S/ 5,000.00',
      secondAmmount: '$ 0.00',
    },
    {
      text: 'Invertido',
      ammount: 'S/ 5,000.00',
      secondAmmount: '$ 14,400.00',
    }
  ];

  buttons = [
    'Inversiones Actuales',
    'Historial de Inversión',
    'Historial de Transferencias',
  ];

  oportunities = [
    {
      id: 1,
      name: 'PC TEXTIL EIRL',
      ammount: 'S/ 14,889,95',
      availableAmmount: 'S/ 10,000,00',
      tea: '25.5%',
      roi: '3,19%',
      roiAmmount: '(+S/ 318,75)',
      date: '04/feb/2019',
      days: 45,
    },
    {
      id: 2,
      name: 'RS IMPORT EXPORT SAC',
      ammount: 'S/ 14,889,95',
      availableAmmount: 'S/ 10,000,00',
      tea: '25.5%',
      roi: '3,19%',
      roiAmmount: '(+S/ 318,75)',
      date: '04/feb/2019',
      days: 45,
    },
    {
      id: 3,
      name: 'RS IMPORT EXPORT SC',
      ammount: 'S/ 14,889,95',
      availableAmmount: 'S/ 10,000,00',
      tea: '25.5%',
      roi: '3,19%',
      roiAmmount: '(+S/ 318,75)',
      date: '04/feb/2019',
      days: 45,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
