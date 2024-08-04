import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderContainerComponent } from './ladder-container.component';

describe('LadderContainerComponent', () => {
  let component: LadderContainerComponent;
  let fixture: ComponentFixture<LadderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LadderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
