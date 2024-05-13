import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionCanchaPage } from './seleccion-cancha.page';

describe('SeleccionCanchaPage', () => {
  let component: SeleccionCanchaPage;
  let fixture: ComponentFixture<SeleccionCanchaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionCanchaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
