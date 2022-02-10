export interface AllPokemon {
  count:    number;
  next:     string;
  previous: null;
  results:  PokemonLink[];
}

export interface PokemonLink {
  name: string;
  url:  string;
}
