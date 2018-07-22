import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../../Modelos/UserLogin';
import {Usuario} from '../../Modelos/Usuario';


import { HttpClientModule, HttpClient,HttpClientXsrfModule,HttpClientJsonpModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import {Headers,Http,Response}from '@angular/http';
import 'rxjs/Rx';
import { error } from 'protractor';
import { resetFakeAsyncZone } from '@angular/core/testing';
export interface Iusuario {
  
  IDUsuario:string;
  Nom_Usu    :string;
    Ape_Pat  :string;
  Ape_Mat :string;
  Contra :string;
   Func_Usu   :string;         
    Uni_Reg :string;
   Tel_Usu   :string;   
  UA_Atenc1 :string;
   UA_Atenc2 :string;
  UA_Atenc3:string;
   Perf_Prof :string;
 Correo      :string;           
  Red_Soc :string;
   Sexo    :string;
    Status:string;
     Foto:string;
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  constructor(public ngProgress: NgProgress, private http: HttpClient,private  router: Router) {  }
  UserLogin:UserLogin;
  DataUser:any;
  ApiURL = 'http://localhost:3000/users/Log/';

  
  
  public getUser(){
    this.ngProgress.start();    
            let data:Usuario[]=[];
                
            this.http.get<Iusuario>("http://localhost:3000/users/Log/"+"01001").subscribe( res =>
                  {
                    for (const key in res) {
                      if (res.hasOwnProperty(key)) {
                        const element = res[key];
                        data.push(element)
                        
                      }
                    }
                  },
                  error=>
                  {
                    
                      alert("Error_login:Intente mas tarde, Si persiste este eror consultelo con su administrador.")
                      return false;
                  }
                );            
  
    }
  
 public getUserEmail(User:UserLogin){
    
  this.ngProgress.start();
      try {
       
                  let dataUser:Usuario;
               
        
              
                
                this.http.get<Iusuario>("http://localhost:3000/users/Log/"+"01001").subscribe( res =>
                {
               for (var key in res) {
                 
                 if (res.hasOwnProperty(key)) {
                   var element = res[key];
               
                  dataUser=element;
                   break;
                   
                   
                 }
               }

               if(dataUser!=null){
            
                    try {
                        if( dataUser.IDUsuario==User.User && dataUser.Contra==User.Pass){
                         
                          alert("Bienvenido:"+dataUser.Nom_Usu);
                        
                          localStorage.setItem('isLoggedin', 'true');
                            this.ngProgress.done();
                          this.router.navigate(['/dashboard']);
           
                        
                           return true;
                          
                        }else{
                        
                          alert("Usuario  o contraseña incorrecta, intente de nuevo.");
                          return false;
                        }
                    } catch (error) {
                      alert("Error:Recargue la pagina e intente de nuevo. Si este error persiste consulte con su administrador");
                    }
                    
  
                }else{
                  alert("El usuario no existe.")
                }

                   },
                error=>
                {
                  
                    alert("Error_login:Intente mas tarde, Si persiste este eror consultelo con su administrador.")
                    return false;
                }
              );     
    
         } catch (error) 
         {
                  alert(error);
                  return false;
          }     

  }
}
