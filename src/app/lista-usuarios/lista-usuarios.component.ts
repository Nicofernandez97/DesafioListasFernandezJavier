import { Component } from '@angular/core';




@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  listaAlumnos = [
    {
      nombre:"jose perez",
      edad: "23",
      ciudad: "Caballito",
      notaPrimerParcial: 7,
      estado: true
    },
    {
      nombre:"martina lopez",
      edad: "27",
      ciudad: "Villa Crespo",
      notaPrimerParcial: 2,
      estado: false
    },
    {
      nombre:"alvaro lopez",
      edad: "26",
      ciudad: "Constitución",
      notaPrimerParcial: 9,
      estado: true
    },
    {
      nombre:"julian diaz",
      edad: "29",
      ciudad: "Parque Chacabuco",
      notaPrimerParcial: 3,
      estado: false
    },
    {
      nombre:"damian estrada",
      edad: "22",
      ciudad: "Caballito",
      notaPrimerParcial: 8,
      estado: true
    },
  ]
diaActual = new Date()

}
