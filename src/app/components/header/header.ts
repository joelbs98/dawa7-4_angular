import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  titulo='TaskFlow';
  descripcion='Sistema web de gestión de tareas';
  curso='Desarrollo de aplicaciones web avanzado';
}
