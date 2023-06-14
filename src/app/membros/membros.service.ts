import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Membro } from './modelo/modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  membrosUrl = 'http://localhost:8080/membros';

  constructor(private http: HttpClient) { }

  salvar(membro: Membro): Observable<Membro>{
    return this.http.post<Membro>(this.membrosUrl, membro);
  }
}
