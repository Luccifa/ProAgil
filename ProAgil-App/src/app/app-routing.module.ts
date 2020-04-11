import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestranteComponent } from './palestrante/palestrante.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'eventos', component: EventosComponent},
  {path: 'palestrantes', component: PalestranteComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
