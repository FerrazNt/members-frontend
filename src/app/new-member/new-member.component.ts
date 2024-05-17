import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrl: './new-member.component.css'
})
export class NewMemberComponent implements OnInit{
  
  constructor(private api:ApiService, private app:AppComponent){ }

  member = {nome:"", sobrenome:"",phone:"",email:"", photo:""};

  ngOnInit(): void {
    
  }

  save(){
    //fields = ['id', 'nome', 'sobrenome', 'phone', 'email','photo']
    this.api.saveNewMember(this.member).subscribe(
      data => {
        this.app.members.push(data);
        this.member = {nome:"", sobrenome:"",phone:"",email:"", photo:""};
      },
      error => {
        console.log("Erro ao obter registro de Membro",error.message);
      }
    );
  }

}
