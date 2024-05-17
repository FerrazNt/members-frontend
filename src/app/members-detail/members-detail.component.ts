import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrl: './members-detail.component.css'
})
export class MembersDetailComponent implements OnInit {

  selected_member = {nome:"", id:null, sobrenome:"",phone:"",email:"", photo:""};
  selected_id: any;

  constructor(private route: ActivatedRoute, 
              private api:ApiService,
              private router:Router,
              private app:AppComponent){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') ?? '{}');
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id:number){
    this.api.getMember(id).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("Erro ao obter registro de Membro",error.message);
      }
    );
  };

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("Erro ao obter registro de Membro",error.message);
      }
    );
  }

  newMmeber(){
    this.router.navigate(['new-member']);
  }

  deleteMember(){
    this.api.delete(this.selected_id).subscribe(
      data => {

        let index:any;

        this.app.members.forEach((e, i) => {
          if (e.id == this.selected_id) {
            index = i;
          }
        });

        this.app.members.splice(index, 1);
        this.selected_member = {nome:"", id:null, sobrenome:"",phone:"",email:"", photo:""};

      },
      error => {
        console.log("Erro ao obter registro de Membro",error.message);
      }
    );
  }


}
