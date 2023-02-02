import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ListaComponent } from './lista/lista.component';
import { GuardarComponent } from './guardar/guardar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NabvarComponent,
    ListaComponent,
    GuardarComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NabvarComponent,
    ListaComponent,
    GuardarComponent,
    ActualizarComponent,
    EliminarComponent
  ]
})
export class ComponentsModule { }
