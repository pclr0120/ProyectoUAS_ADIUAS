import { Injectable } from '@angular/core';

import {CicloEscolar} from '../../Modelos/CicloEscolar';

import {  HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

import { ToastrService } from 'ngx-toastr';
//import { Observable,BehaviorSubject, of } from 'rxjs'; // only need to import from rxjs


/// la interfaz se utiliza en el get para estrucutrar los datos que  manda backend
export interface IcicloEscolar {
  IdCicloEscolar: string;
    Semestre: string;
    FechaInicio: string;
    FechaCierre: string;
}


@Injectable({
  providedIn: 'root'
})
export class CicloEscolarService {




  constructor(public ngProgress: NgProgress,private toastr: ToastrService, private http: HttpClient,private  router: Router) {  }
  CicloEscolar:CicloEscolar;
  DataUser:any;
  ApiURL = 'http://localhost:3000/users/Log/';
///assis


  public selectedData:CicloEscolar=new CicloEscolar();


    
   get(){

                return this.http.get<IcicloEscolar>("http://localhost:3000/CicloEscolar/get");
           
  
    }
  
  public post(CicloEscolar:CicloEscolar){

         
                
            this.http.post("http://localhost:3000/CicloEscolar",CicloEscolar).subscribe( res =>
                  {
                    this.ngProgress.start();    
                    this.toastr.success( 'Datos Guardados.','Operacion exitosa!');
                        
                  },
                  error=>
                  {
                    this.toastr.error("Consulte con su administrador.",'Error:Al guardar');
                      
                      return false;
                  }

                );          
                this.ngProgress.done();    
  
    }

    public put(CicloEscolar:CicloEscolar){


      this.http.put("http://localhost:3000/CicloEscolar/Update/",CicloEscolar).subscribe( res =>
            {
              this.ngProgress.start();    
              this.toastr.success( 'Datos Actualizados.','Operacion exitosa!');
                 
            },
            error=>
            {
              this.toastr.error("Consulte con su administrador.",'Error:Al actualizar');
                
                return false;
            }

          );          
          this.ngProgress.done();    

  }
  public eliminar(id){


    this.http.delete("http://localhost:3000/CicloEscolar/Eliminar/"+id).subscribe( res =>
          {
            this.ngProgress.start();    
            this.toastr.success( 'Ciclo Escolar eliminado.','Operacion exitosa!');
              
          },
          error=>
          {
            this.toastr.error("Consulte con su administrador.",'Error:Al eliminar');
              
              return false;
          }

        );          
        this.ngProgress.done();    

}



}