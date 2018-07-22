import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { NgForm } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../Servicios/Usuarios/usuario.service';
import {UserLogin} from '../Modelos/UserLogin'
import { NgProgress } from 'ngx-progressbar';
import { Usuario } from '../Modelos/Usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public ngProgress: NgProgress,public router: Router,private pf:FormBuilder ,
        public flashMensaje: FlashMessagesService, private DataUser: UsuarioService) {
          this.LoginForm = pf.group({
            'User': [],
            'Pass': []
            
          });
      
        
    }
      hide = true;


      LoginForm:FormGroup;
       UserLogin:UserLogin;

   
  


    LoginIn()
    {

 
       
  
      this.UserLogin=this.saveLogin();
   
      this.DataUser.getUserEmail(this.UserLogin);
        this.LoginForm.reset();
    

      

    }

    ngOnInit() {

      this.LoginForm=this.pf.group
      ({
        User:['',[Validators.required,Validators.maxLength(30)]],
        Pass:['',[Validators.required,Validators.maxLength(10)]],
   
  
        
      });
           
       
    
            
          
        }
        private saveLogin()
        {
         
          const saveLogin=
          {
            User:this.LoginForm.get('User').value,
            Pass:this.LoginForm.get('Pass').value
    
          }
          
          return saveLogin;
        }
}
