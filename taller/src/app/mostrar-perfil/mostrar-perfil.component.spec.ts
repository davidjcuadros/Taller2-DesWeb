import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPerfilComponent } from './mostrar-perfil.component';

describe('MostrarPerfilComponent', () => {
  let component: MostrarPerfilComponent;
  let fixture: ComponentFixture<MostrarPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPerfilComponent]
    });
    fixture = TestBed.createComponent(MostrarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
