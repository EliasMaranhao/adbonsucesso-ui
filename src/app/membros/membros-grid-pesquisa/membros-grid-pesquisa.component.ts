import { Component, Input } from '@angular/core';
import { Membro } from '../modelo/modelo';

@Component({
  selector: 'app-membros-grid-pesquisa',
  templateUrl: './membros-grid-pesquisa.component.html',
  styleUrls: ['./membros-grid-pesquisa.component.css']
})
export class MembrosGridPesquisaComponent {

  @Input() membros!: Membro[];

}
