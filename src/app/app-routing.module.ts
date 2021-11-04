import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { SecretMonkeGalleryComponent } from './secret-monke-gallery/secret-monke-gallery.component';

const routes: Routes = [
  { path: 'animals', component: AnimalComponent },
  { path: 'secretmonkegallery', component: SecretMonkeGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
