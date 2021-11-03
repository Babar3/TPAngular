import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AnimalModule } from './animal/animal.module';
import { SecretMonkeGalleryModule } from './secret-monke-gallery/secret-monke-gallery.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    AnimalModule,
    SecretMonkeGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
