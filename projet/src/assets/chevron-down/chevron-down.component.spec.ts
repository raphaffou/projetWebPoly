import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronDownComponent } from './chevron-down.component';

describe('ChevronDownComponent', () => {
  let component: ChevronDownComponent;
  let fixture: ComponentFixture<ChevronDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevronDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
