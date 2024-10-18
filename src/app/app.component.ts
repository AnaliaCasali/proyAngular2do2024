import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";
import { PrincipalComponent } from "./principal/principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, PiePaginaComponent,
     PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyangular01';

  nombre:string="Ana";


/*
PASO 1 INSTALAR BOOSTRAP
PASO 2 CREAR  COMPONENTES
PARA CREAR COMPONENTE : ng generate component encabezado
*/
}
