import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloEscolarTablaComponent } from './ciclo-escolar-tabla.component';

describe('CicloEscolarTablaComponent', () => {
  let component: CicloEscolarTablaComponent;
  let fixture: ComponentFixture<CicloEscolarTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloEscolarTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloEscolarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
