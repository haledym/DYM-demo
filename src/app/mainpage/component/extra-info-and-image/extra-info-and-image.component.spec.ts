import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoAndImageComponent } from './extra-info-and-image.component';

describe('ExtraInfoAndImageComponent', () => {
  let component: ExtraInfoAndImageComponent;
  let fixture: ComponentFixture<ExtraInfoAndImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraInfoAndImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraInfoAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
