import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public page_title:string;
public user:User;


  constructor() {
    this.page_title='Registrate';
    this.user = new User(1,'','','ROLE_USER','','','','');
   }

  ngOnInit() {
    console.log('componente de regoistro lanzado ');
  }


  onSubmit(form){

    console.log(this.user);
    form.reset();
  }

}
