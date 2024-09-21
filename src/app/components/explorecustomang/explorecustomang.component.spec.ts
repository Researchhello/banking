import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorecustomangComponent } from './explorecustomang.component';

describe('ExplorecustomangComponent', () => {
  let component: ExplorecustomangComponent;
  let fixture: ComponentFixture<ExplorecustomangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorecustomangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorecustomangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
