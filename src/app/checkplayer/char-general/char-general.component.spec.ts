import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharGeneralComponent } from './char-general.component';

describe('CharGeneralComponent', () => {
  let component: CharGeneralComponent;
  let fixture: ComponentFixture<CharGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
