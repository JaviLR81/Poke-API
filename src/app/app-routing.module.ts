import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy Loading Implementation
const routes: Routes = [
  {
    path: 'api',
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'api'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
