import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroeTarjetaComponent } from "../../components/heroe-tarjeta/heroe-tarjeta.component";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px;
    }
    `
  ],
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private HeroesServices: HeroesService) { }

  ngOnInit(): void {

    this.HeroesServices.getHeroes()
    .subscribe( heroes => this.heroes = heroes)
  }

}
