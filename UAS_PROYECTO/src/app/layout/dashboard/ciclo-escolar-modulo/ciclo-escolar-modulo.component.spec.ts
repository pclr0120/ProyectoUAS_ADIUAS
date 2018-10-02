import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloEscolarModuloComponent } from './ciclo-escolar-modulo.component';

describe('CicloEscolarModuloComponent', () => {
  let component: CicloEscolarModuloComponent;
  let fixture: ComponentFixture<CicloEscolarModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloEscolarModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloEscolarModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
