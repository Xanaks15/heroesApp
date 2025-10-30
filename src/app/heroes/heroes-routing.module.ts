import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'listado',
        component: ListadoComponent
      },
      {
        path:'agregar',
        component: AgregarComponent
      },
      {
        path:'editar/:id',
        component: AgregarComponent
      },
      {
        path:'buscar',
        component: BuscarComponent
      },
      {
        path:'id',
        component: HeroeComponent
      },
      {
        path:'**',
        redirectTo: 'listado'
      },
    ]     
  }
]

@NgModule({

  imports: [
    RouterModule.forChild( routes ),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
