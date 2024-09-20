import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingadminComponent } from './bankingadmin.component';

describe('BankingadminComponent', () => {
  let component: BankingadminComponent;
  let fixture: ComponentFixture<BankingadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
