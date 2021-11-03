import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretMonkeGalleryComponent } from './secret-monke-gallery.component';

describe('SecretMonkeGalleryComponent', () => {
  let component: SecretMonkeGalleryComponent;
  let fixture: ComponentFixture<SecretMonkeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretMonkeGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretMonkeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
