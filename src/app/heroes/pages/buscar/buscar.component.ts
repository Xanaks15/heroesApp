import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteActivatedEvent } from "@angular/material/autocomplete";
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  // styles: [
  //   `
      

  //     app-heroe-tarjeta {
  //       display: block;
  //       margin-top: 2rem;
  //       max-width: 600px;
  //       width: 100%;
  //     }

  //     app-heroe-tarjeta mat-card {
  //       width: 100%;
  //       background-color: #2c2c2c;
  //       color: #fff;
  //       border-radius: 12px;
  //       box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  //       transition: transform 0.2s ease, box-shadow 0.2s ease;
  //     }

  //     app-heroe-tarjeta mat-card:hover {
  //       transform: translateY(-4px);
  //       box-shadow: 0 8px 18px rgba(0, 0, 0, 0.6);
  //     }

  //     @media (max-width: 600px) {
  //       mat-form-field {
  //         max-width: 100%;
  //       }

  //       app-heroe-tarjeta {
  //         max-width: 100%;
  //       }
  //     }

  //   `
  // ]
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

    if(!event.option?.value){
      this.heroeSeleccionado = undefined;
      return;
    }else{
      const heroe: Heroe = event.option.value
    this.termino = heroe.superhero;

    this.HeroesService.getHeroePorID(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe);
    }
    
  }
}
