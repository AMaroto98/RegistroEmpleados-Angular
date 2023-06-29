import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  titulo = 'Registro de Empleados';

  empleados: Empleado[] = [
    new Empleado("Antonio", "Maroto", "Presidente", 7500),
    new Empleado("Ana", "Martinez", "Encargada", 2500),
    new Empleado("Maria", "Garcia", "Encargada", 5500),
    new Empleado("Mario", "Salvador", "Portero", 1000)
  ];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  registrarEmpleado() {
    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(empleado);
  }
}
