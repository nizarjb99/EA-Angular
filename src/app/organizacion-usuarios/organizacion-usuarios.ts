import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organizacion } from '../models/organizacion.model';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-organizacion-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizacion-usuarios.html',
  styleUrl: './organizacion-usuarios.css',
})
export class OrganizacionUsuarios {

  @Input() organizacion!: Organizacion;

  agregarUsuario(nombre: string) {
    if (!this.organizacion.users) {
      this.organizacion.users = [];
    }

    const nuevoUsuario = {
      _id: crypto.randomUUID(),
      name: nombre,
      email: '',
      organizacion: this.organizacion._id
    } as Usuario;

    this.organizacion.users.push(nuevoUsuario);
  }

  eliminarUsuario(id: string) {
    if (!this.organizacion.users) return;

    this.organizacion.users =
      this.organizacion.users.filter(u => u._id !== id);
  }

}