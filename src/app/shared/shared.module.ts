import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MensagensErroComponent } from './mensagens-erro/mensagens-erro.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    MensagensErroComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    CabecalhoComponent, MensagensErroComponent
  ]
})
export class SharedModule { }
