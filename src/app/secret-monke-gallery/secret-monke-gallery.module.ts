import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretMonkeGalleryComponent } from './secret-monke-gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [SecretMonkeGalleryComponent],
  imports: [
    CommonModule,
    NgImageSliderModule
  ],
  exports: [
    SecretMonkeGalleryComponent
  ]
})
export class SecretMonkeGalleryModule { }
