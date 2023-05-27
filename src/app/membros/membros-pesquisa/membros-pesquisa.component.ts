import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Membro } from '../modelo/modelo';
import { membrosMock } from 'src/app/mocks/mocks';

@Component({
  selector: 'app-membros-pesquisa',
  templateUrl: './membros-pesquisa.component.html',
  styleUrls: ['./membros-pesquisa.component.css']
})
export class MembrosPesquisaComponent {

  membros: Membro[] = membrosMock;

  pesquisar(){

  }

}
