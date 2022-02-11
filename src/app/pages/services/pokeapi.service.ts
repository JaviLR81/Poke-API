import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { AllPokemon, PokemonLink } from '../interfaces/all-pokemon.interface';
import { Pokemon } from '../interfaces/pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private _POKEMON_BASE_URL: string= 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<AllPokemon>{
    return this.http.get<AllPokemon>(`${this._POKEMON_BASE_URL}/pokemon/?limit=150`);
  }

  getPokemon(url: string): Observable<Pokemon>{
    return this.http.get<Pokemon>(url);
  }

  
  getPokemonMixedRequest(data: PokemonLink[]){

      const peticiones: Observable<Pokemon>[] = [];

      data.forEach( codigo => {
        const peticion = this.getPokemon(codigo.url);
        peticiones.push( peticion );
      });

      return combineLatest( peticiones );
  }


}
