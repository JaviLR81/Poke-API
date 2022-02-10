import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokeapiComponent } from './pages/pokeapi/pokeapi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'api',
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
