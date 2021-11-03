import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './animal-list.component';



@NgModule({
  declarations: [AnimalListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AnimalListComponent
  ]
})
export class AnimalListModule { }
