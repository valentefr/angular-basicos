import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes[this.heroes.length - 1];
    this.heroes.splice(this.heroes.length - 1, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
