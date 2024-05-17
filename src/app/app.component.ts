import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'members-frontend';

  members = [
    {nome:"", id:0, sobrenome:"",phone:"", email:"", photo:""}
  ]

  constructor(private api:ApiService, private route:Router){
    this.getMemebers();
  };

  getMemebers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log("Erro ao consultar API de Membros");
      }
    );
  }

  memberClicked = (member:  any) => {
    this.route.navigate(['member-detail',member.id]);
  }

}
