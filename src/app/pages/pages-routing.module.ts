import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeapiComponent } from './pokeapi/pokeapi.component';

const routes: Routes = [
  {
    path: '',
    children:[
      { path: 'pokeapi', component: PokeapiComponent },
      { path: '**', redirectTo: 'pokeapi' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
