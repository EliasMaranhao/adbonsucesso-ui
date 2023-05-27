import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMembrosCadastroComponent } from '../modal-membros-cadastro/modal-membros-cadastro.component';

@Component({
  selector: 'app-membros-filtro-pesquisa',
  templateUrl: './membros-filtro-pesquisa.component.html',
  styleUrls: ['./membros-filtro-pesquisa.component.css']
})
export class MembrosFiltroPesquisaComponent implements OnInit{

  formMembroPesquisa!: FormGroup
  closeResult = '';

  constructor(private formBuilder: FormBuilder,
              private modalService: NgbModal){}

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.formMembroPesquisa = this.formBuilder.group({
      nome: [],
      cargo: []
    });
  }

  pesquisar(){
    
  }

  cadastrarNovoMembro(){
    const modalRef = this.modalService.open(ModalMembrosCadastroComponent);
    modalRef.update({size: 'xl', centered: true});
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
