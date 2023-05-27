import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosPesquisaComponent } from './membros-pesquisa/membros-pesquisa.component';
import { MembrosRoutingModule } from './membros-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MembrosFiltroPesquisaComponent } from './membros-filtro-pesquisa/membros-filtro-pesquisa.component';
import { MembrosGridPesquisaComponent } from './membros-grid-pesquisa/membros-grid-pesquisa.component';
import { ModalMembrosCadastroComponent } from './modal-membros-cadastro/modal-membros-cadastro.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MembrosPesquisaComponent,
    MembrosFiltroPesquisaComponent,
    MembrosGridPesquisaComponent,
    ModalMembrosCadastroComponent
  ],
  imports: [
    CommonModule,
    MembrosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    NgbTypeaheadModule
  ]
})
export class MembrosModule { }
