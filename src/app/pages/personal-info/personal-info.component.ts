import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snackbar.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackBarComponent {}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  closeResult: string;
  durationInSeconds = 5;
  constructor(private modalService: NgbModal, private snackBar: MatSnackBar) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',  size: 'sm', centered: true, windowClass: 'loginModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  openSnackBar( action: string) {
    this.snackBar.open('Los cambios fueron guardados', action, {
      panelClass: 'custom-class',
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
