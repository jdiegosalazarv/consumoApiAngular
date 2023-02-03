import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListaBirdsComponent } from './lista-birds/lista-birds.component';



@NgModule({
  declarations: [
    NabvarComponent,
    ListaBirdsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    NabvarComponent,
    ListaBirdsComponent
  ]
})
export class ComponentsModule { }
