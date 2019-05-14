import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { log } from 'util';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  investmens = [
    {
      text: 'En validación',
      ammount: 'S/ 5,000.00',
      secondAmmount: '$ 0.00',
    },
    {
      text: 'Monto Disponible',
      ammount: 'S/ 45,452.32',
      secondAmmount: '$ 4,452.87',
    },
    {
      text: 'Por iniciar',
      ammount: 'S/ 5,000.00',
      secondAmmount: '$ 14,400.00',
    },
    {
      text: 'Invertido',
      ammount: 'S/ 5,000.00',
      secondAmmount: '$ 14,400.00',
    }
  ];

  buttons = [
    {
      text: 'Inversiones Actuales',
      id: 'actual-tab',
      href: '#actual',
      name: 'actual',
      class: 'investment-button active mx-2'
    },
    {
      text: 'Historial de Inversión',
      id: 'inver-tab',
      href: '#inver',
      name: 'inver',
      class: 'investment-button mx-2'
    },
    {
      text: 'Historial de Transferencias',
      id: 'transf-tab',
      href: '#transf',
      name: 'transf',
      class: 'investment-button mx-2'
    }
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

  oportunities2 = [
    {
      id: 1,
      name: 'PC PAPER EIRL',
      ammount: 'S/ 14,889,95',
      availableAmmount: 'S/ 11,000,00',
      tea: '15.5%',
      roi: '3,19%',
      roiAmmount: '(+S/ 318,75)',
      date: '02/feb/2019',
      days: 45,
    },
    {
      id: 2,
      name: 'RS IMPORT SAC',
      ammount: 'S/ 19,889,95',
      availableAmmount: 'S/ 14,000,00',
      tea: '25.5%',
      roi: '3,19%',
      roiAmmount: '(+S/ 318,75)',
      date: '03/feb/2019',
      days: 42,
    },
    {
      id: 3,
      name: 'RS IMPORT ISAAC SC',
      ammount: 'S/ 14,889,95',
      availableAmmount: 'S/ 10,000,00',
      tea: '25.5%',
      roi: '3,19%',
      roiAmmount: '(+S/ 318,75)',
      date: '04/feb/2019',
      days: 35,
    }
  ];

  oportunities3 = [
    {
      id: 1,
      bank: 'BCP',
      accountNumber: 4558988741123669,
      badge: 'USD',
      amount: 20000,
      transferDate: '04/feb/2019',
      state: 'Aprobado',
      tipe: 'Retiro',
    },
    {
      id: 2,
      bank: 'BBVA',
      accountNumber: 98745588963258899,
      badge: 'SOLES',
      amount: 10000,
      transferDate: '05/feb/2019',
      state: 'Aprobado',
      tipe: 'Retiro',
    },
    {
      id: 3,
      bank: 'SCOTIABANK',
      accountNumber: 8558455416613635,
      badge: 'USD',
      amount: 12000,
      transferDate: '04/mar/2019',
      state: 'Aprobado',
      tipe: 'Retiro',
    }
  ];

  showNavigationArrows = true;
  showNavigationIndicators = false;
  show = 1;
  
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

  onChange(n){
    this.show = parseInt(n); 
  }

  

}
