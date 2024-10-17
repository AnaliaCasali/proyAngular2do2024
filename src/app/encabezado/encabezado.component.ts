import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  imagenLogo:string="../../assets/img/logotecnicatura63.png"
  altLogo:string="Logo de TSDS IES 63"
}
