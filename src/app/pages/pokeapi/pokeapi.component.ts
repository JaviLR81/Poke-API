import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {

  pokemons: Pokemon[] = [];
  private _originalPokemons: Pokemon[] = [];
  @ViewChild('txtPokemonSearch') txtPokemonSearch!: ElementRef<HTMLInputElement>;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.getAllPokemon()
      .pipe(
        switchMap( resp => this.pokeapiService.getPokemonMixedRequest( resp.results ) )
      )
      .subscribe({
        next: (resp) => {
          this.pokemons = resp;
          this._originalPokemons = resp;
        },
        error: (err) => {
          console.log("Ha ocurrido un error al realizar la petición");
        }
      })
  }

  searching(): void{

    const value = this.txtPokemonSearch.nativeElement.value;

    if(value.trim().length === 0){
      this.pokemons = [...this._originalPokemons];
      return;
    }

    this.pokemons = this.pokemons.filter((str)=>{
      return str.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    });

  }

}
