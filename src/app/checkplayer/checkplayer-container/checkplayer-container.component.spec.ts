import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckplayerContainerComponent } from './checkplayer-container.component';

describe('CheckplayerContainerComponent', () => {
  let component: CheckplayerContainerComponent;
  let fixture: ComponentFixture<CheckplayerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckplayerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckplayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
