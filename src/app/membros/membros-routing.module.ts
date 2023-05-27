import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MembrosPesquisaComponent } from './membros-pesquisa/membros-pesquisa.component';

const rotas: Routes = [
    {
        path: '',
        component: MembrosPesquisaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [RouterModule]
})
export class MembrosRoutingModule{}