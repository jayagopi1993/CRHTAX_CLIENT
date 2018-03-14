import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxwallComponent } from './taxwall.component';

describe('TaxwallComponent', () => {
  let component: TaxwallComponent;
  let fixture: ComponentFixture<TaxwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
