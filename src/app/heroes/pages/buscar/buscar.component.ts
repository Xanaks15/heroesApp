import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteActivatedEvent } from "@angular/material/autocomplete";
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';

  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  constructor( private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.HeroesService.getSugerencias( this.termino.trim( ))
      .subscribe( heroes => this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteActivatedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }else{
      const heroe: Heroe = event.option?.value
    this.termino = heroe.superhero;

    this.HeroesService.getHeroePorID(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe);
    }
    
  }
}
