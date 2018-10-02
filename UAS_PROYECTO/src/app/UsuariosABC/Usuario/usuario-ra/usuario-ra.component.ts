import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import {Usuario} from '../../../Modelos/Usuario';
import { UsuarioService } from '../../../Servicios/Usuarios/usuario.service';
@Component({
  selector: 'app-usuario-ra',
  templateUrl: './usuario-ra.component.html',
  styleUrls: ['./usuario-ra.component.scss']
})
export class UsuarioRAComponent implements OnInit {
  UsuarioForm:FormGroup;
  public Usuario:Usuario;
  UsuarioList: Usuario[];
  pass:string;
  hide = true;

  constructor(private pf:FormBuilder,
    private toastr: ToastrService,private DataService: UsuarioService) { 
      this.UsuarioForm = pf.group({
        //'IDUsuario':[],
        'Nom_Usu':[],    
          'Ape_Pat':[],  
        'Ape_Mat':[],
        'Contra':[],
        //  'Func_Usu':[],       
        //   'Uni_Reg':[],
        //  'Tel_Usu' :[],  
        // 'UA_Atenc1' :[],
        //  'UA_Atenc2' :[],
        // 'UA_Atenc3':[],
        //  'Perf_Prof':[],
       'Correo':[],
        // 'Red_Soc':[],
        //  'Sexo':[],
        //   'Status':[],
        //    'Foto':[]
      });

    }
    ngOnInit() 
    {

          this.UsuarioForm=this.pf.group
          ({
            Nom_Usu:['',[Validators.required]],
            Ape_Pat:['',[Validators.required]],
            Ape_Mat:['',[Validators.required]],
            Contra:['',[Validators.required]],
            Correo:['',[Validators.required,Validators.email]],
      
      
            
          });
                 
    }
    private saveUsuario(){
         
          const saveUsuario=
          {
            Nom_Usu:this.UsuarioForm.get('User').value,
            Ape_Pat:this.UsuarioForm.get('ApellidoPat').value,
            Ape_Mat:this.UsuarioForm.get('ApellidoMaterno').value,
            Contra:this.UsuarioForm.get('Pass').value,
            Correo:this.UsuarioForm.get('Correo').value,
    
          }
          
          return saveUsuario;
    }


    onSubmit()
    {

 
       
  
     // this.Usuario=this.saveUsuario();
   
      //this.DataUser.getUserEmail(this.UserLogin);
       // this.LoginForm.reset();
    

      

    }

}