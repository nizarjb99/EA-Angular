import { Routes } from '@angular/router';
import { OrganizacionList } from './posts/organizaciones/organizacion-list';
import { UsuarioList } from './posts/usuarios/usuario-list/usuario-list';
export const routes: Routes = [
  { path: '', component: OrganizacionList },
  { path: 'organizaciones', component: OrganizacionList },
  { path: 'usuarios', component: UsuarioList }
];


