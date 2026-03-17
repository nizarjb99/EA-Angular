import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionUsuarios } from './organizacion-usuarios';

describe('OrganizacionUsuarios', () => {
  let component: OrganizacionUsuarios;
  let fixture: ComponentFixture<OrganizacionUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionUsuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacionUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
