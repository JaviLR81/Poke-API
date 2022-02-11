import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { BadgeColorPipe } from './pipes/badge-color.pipe';
import { TitleCardDirective } from './directives/title-card.directive';


@NgModule({
  declarations: [
    PokeapiComponent,
    PokemonCardComponent,
    BadgeColorPipe,
    TitleCardDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
