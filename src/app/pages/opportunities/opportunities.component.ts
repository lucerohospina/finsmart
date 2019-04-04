import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {

  selectedRow: any = undefined;

  singleBenefits = {
    ammount: 'S/ 45,452.32',
    tea: '25%',
    days: 35,
  };

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
      child: {
        text: 'PC TEXTIL EIRL (RUC 20131379944) es una empresa dedicada a la elaboración de prendas para empleados, colaboradores, técnicos y auxiliares. Tiene una facturación promedio de XX millones de soles.',
        mainText: '5 (100%) de las facturas has sido cobradas exitosamente.',
        ammount: '(cuentas con S/15,456.00 y $0.00 disponibles)',
        roi: '+ S/318.75',
        days: '45',
      }
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
      child: {
        text: 'PC TEXTIL EIRL (RUC 20131379944) es una empresa dedicada a la elaboración de prendas para empleados, colaboradores, técnicos y auxiliares. Tiene una facturación promedio de XX millones de soles.',
        mainText: '5 (100%) de las facturas has sido cobradas exitosamente.',
        ammount: '(cuentas con S/15,456.00 y $0.00 disponibles)',
        roi: '+ S/318.75',
        days: '45',
      }
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
      child: {
        text: 'PC TEXTIL EIRL (RUC 20131379944) es una empresa dedicada a la elaboración de prendas para empleados, colaboradores, técnicos y auxiliares. Tiene una facturación promedio de XX millones de soles.',
        mainText: '5 (100%) de las facturas has sido cobradas exitosamente.',
        ammount: '(cuentas con S/15,456.00 y $0.00 disponibles)',
        roi: '+ S/318.75',
        days: '45',
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  showRow(el): void {
    if (this.selectedRow && this.selectedRow.id === el.id) {
      this.selectedRow = undefined;
    } else {
      this.selectedRow = el;
    }
  }

}
