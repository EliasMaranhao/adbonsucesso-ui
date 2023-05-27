import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagens-erro',
  templateUrl: './mensagens-erro.component.html',
  styleUrls: ['./mensagens-erro.component.css']
})
export class MensagensErroComponent {

  @Input() controle?: AbstractControl | FormControl | null;
  @Input() error!: string;
  @Input() mensagem!: string;

  
  temErro(): boolean{
    const erro = this.controle ? this.controle.hasError(this.error) && this.controle.dirty : true;
    return erro;
  }
}
