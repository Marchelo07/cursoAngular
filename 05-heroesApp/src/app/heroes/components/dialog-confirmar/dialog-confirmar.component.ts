import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-dialog-confirmar',
  templateUrl: './dialog-confirmar.component.html',
  styleUrls: ['./dialog-confirmar.component.css']
})
export class DialogConfirmarComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<DialogConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe, //PARA RECIBIR DATA AL DIALOGO
  ) { }

    ngOnInit(): void {
      console.log(this.data)
    }


  borrar() {
    this.matDialogRef.close(true);
  }

  salir() {
    this.matDialogRef.close();
  }

}
