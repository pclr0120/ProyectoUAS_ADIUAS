import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRAComponent } from './usuario-ra.component';

describe('UsuarioRAComponent', () => {
  let component: UsuarioRAComponent;
  let fixture: ComponentFixture<UsuarioRAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
