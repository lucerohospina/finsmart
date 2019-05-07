import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  template: `
  <div id='modal-opportunities'>
    <div class="modal-header border-bottom-0">
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
      <p><b>Confirmación</b></p>
      <p>Estás a punto de invertir en la factura <b>E001.55</b> de la empresa <b>DACVAL S.A.C</b> por un importe de <b>PEN XXXX.xx</b>
      con una ganancia proyectada de <b>XX.X</b> para el <b>miércoles, 3 de julio de 2019</b></p>
      <p>Has aceptado los términos y condiciones de cesión de uso de plataforma Web y el contrato de
      condiciones especiales aplicables al inversionista, relacionado al mandato y sin representación.</p>
      <p><button class="d-inline bg-electric-blue main-button-radius" (click)="open()">Invertir</button></p>
    </div>
  </div>
    
  `
})
export class NgbdModal1Content {
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  open() {
    this.modalService.open(NgbdModal2Content, { centered: true, backdropClass: 'light-backdrop2' });
  }
}

@Component({
  template: `
  <div class='modal-opportunities'>
    <div class="modal-header border-bottom-0">
      <button type="button" class="close" aria-label="Close" (click)="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body second-modal text-center">
      <p><b>¡Inversión exitosa!</b></p>
    </div>
  </div>
    
  `
})
export class NgbdModal2Content {
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }
  close() {
    this.modalService.dismissAll();
  }
  panelOpenState = false;
}
@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css'],
  providers: [NgbCarouselConfig]
})

export class OpportunitiesComponent implements OnInit {

  selectedRow: any = undefined;

  singleBenefits = {
    ammount: 'S/ 45,452.32',
    tea: '25%',
    days: 35,
  };

  singleBenefitsArr = [
    {
      ammount: 'S/ 45,452.32',
      tea: '25%',
      days: 35,
    }, {
      ammount: 'S/ 55,452.32',
      tea: '25%',
      days: 35,
    }
  ];

  showNavigationArrows = true;
  showNavigationIndicators = false;


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
  ];


  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.interval = 0;
    config.showNavigationIndicators = false;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  open() {
    this.modalService.open(NgbdModal1Content, { centered: true, backdropClass: 'light-backdrop1'});
  }

  dismissAll() {
    this.modalService.dismissAll();
  }

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
