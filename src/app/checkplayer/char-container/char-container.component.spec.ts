import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharContainerComponent } from './char-container.component';

describe('CharContainerComponent', () => {
  let component: CharContainerComponent;
  let fixture: ComponentFixture<CharContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
