import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllMembers() : Observable<any>{
    return this.http.get(this.baseUrl + 'members/', 
      {headers:this.httpHeaders}
    );
  };

  getMember(id:any) : Observable<any>{
    return this.http.get(this.baseUrl + 'members/'+ id + '/', 
      {headers:this.httpHeaders}
    );
  };

  saveNewMember(member:any) : Observable<any>{
    let body = { nome: member.nome, sobrenome: member.sobrenome, phone: member.phone, email: member.email }
    return this.http.post(this.baseUrl + 'members/', body,{headers:this.httpHeaders});
  };

}
