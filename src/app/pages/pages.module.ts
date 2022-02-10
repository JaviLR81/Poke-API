import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [
    PokeapiComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
