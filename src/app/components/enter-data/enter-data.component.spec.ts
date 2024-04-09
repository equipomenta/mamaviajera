import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDataComponent } from './enter-data.component';

describe('EnterDataComponent', () => {
  let component: EnterDataComponent;
  let fixture: ComponentFixture<EnterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
