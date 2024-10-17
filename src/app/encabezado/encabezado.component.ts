import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  imagenLogo:string="https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp"
  altLogo:string="Logo de TSDS IES 63"
}
