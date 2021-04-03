import { NgModule, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

// orden
// Angular
// terceros
// Lo que nosostros creamos


@NgModule({
  declarations: [
    MainPageComponent, 
    PersonajesComponent, AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ], 
  providers:[
    DbzService
  ]
})
export class DbzModule { }
