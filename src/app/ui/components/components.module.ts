import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListaBirdsComponent } from './lista-birds/lista-birds.component';
import { AddBirdComponent } from './lista-birds/add-bird/add-bird.component';



@NgModule({
  declarations: [
    NabvarComponent,
    ListaBirdsComponent,
    AddBirdComponent
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
