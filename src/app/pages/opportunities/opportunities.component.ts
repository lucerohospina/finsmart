import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ELEMENT_DATA, COLUMNS } from './mock';
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
  `,
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
      <p><b>¡Inversión exitosa!</b><br>
      <span>La inversión se llevará a cabo cuando la factura se financie completamente.
      Recibirás un e-mail de confirmación cuando suceda</span>
      </p>
    </div>
  </div>
  `
})
export class NgbdModal2Content {
  panelOpenState = false;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }
  close() {
    this.modalService.dismissAll();
  }
}
@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css'],
  providers: [NgbCarouselConfig],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class OpportunitiesComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = COLUMNS;
  stringColumns = COLUMNS.map(c => c.slug);
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
