import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  imagenLogo:string="https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp"
  altLogo:string="Logo de TSDS IES 63"

  mostrar1erCard:boolean=true;
  mostrar2daCard:boolean=true;


  personas=[{
    nombre:"Ana",
    apellido:"Lopez",
    edad:25,
    ciudad:"Madrid"
  },{
    nombre:"Maria",
    apellido:"Perez",
    edad:25,
    ciudad:"Bs As"
  },
  {
    nombre:"Jose",
    apellido:"osuna",
    edad:25,
    ciudad:"Santa Fe"
  },
  ]
}
