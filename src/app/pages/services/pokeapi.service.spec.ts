import { TestBed } from '@angular/core/testing';

import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  let service: PokeapiService;

  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokeapiService(httpClientSpy as any);
  });

  it('PokeAPI SERVICE should be created', () => {
    expect(service).toBeTruthy();
  });
});
