import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal.component';
import { AnimalDirective } from './animal.directive';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [AnimalComponent, AnimalDirective],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    AnimalComponent
  ]
})
export class AnimalModule { }
