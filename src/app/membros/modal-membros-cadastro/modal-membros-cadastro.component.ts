import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cargo } from '../modelo/modelo';
import { Status } from '../modelo/modelo';
import { estados } from 'src/app/shared/modelo/modelo';

@Component({
  selector: 'app-modal-membros-cadastro',
  templateUrl: './modal-membros-cadastro.component.html',
  styleUrls: ['./modal-membros-cadastro.component.css']
})
export class ModalMembrosCadastroComponent implements OnInit{

  membrosCadastroForm!: FormGroup;
  cargos!: any[];
  situacoes!: any[];
  congregacoes!: any[];
  listaEstados = estados;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.configurarFormulario();
    this.cargos=Object.keys(Cargo);
    this.situacoes=Object.keys(Status);
  }


  configurarFormulario(){
    this.membrosCadastroForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(10)]],
      email: ['nao_tem_email@.com', [Validators.required, Validators.minLength(10), Validators.email]],
      telefone: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      dataBatismo: [null, Validators.required],
      situacao: ['', Validators.required],
      cargo: ['', Validators.required],
      congregacao: ['', Validators.required],
      endereco: this.formBuilder.group({
        rua: [null, [Validators.required, Validators.minLength(10)]],
        numero: [null, Validators.required],
        complemento: [null],
        cep: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }


  salvar(){
    console.log(this.membrosCadastroForm.value);
  }
}
