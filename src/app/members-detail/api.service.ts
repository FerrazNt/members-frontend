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

  getMember(id:number) : Observable<any>{
    
    return this.http.get(this.baseUrl + 'members/'+ id + '/', 
      {headers:this.httpHeaders}
    );

  }

  updateMember(member:any) : Observable<any>{    

    //fields = ['id', 'nome', 'sobrenome', 'phone', 'email','photo']
    let body = { nome: member.nome, sobrenome: member.sobrenome, phone: member.phone, email: member.email }
  
    return this.http.put(this.baseUrl + 'members/'+ member.id + '/', body, {headers:this.httpHeaders});

  }

  delete(id:any): Observable<any>{
    return this.http.delete(this.baseUrl + 'members/'+ id + '/', {headers:this.httpHeaders});
  }

 
}
