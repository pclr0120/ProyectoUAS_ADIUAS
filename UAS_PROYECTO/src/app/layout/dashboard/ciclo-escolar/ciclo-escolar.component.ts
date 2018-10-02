import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import {CicloEscolar} from '../../../Modelos/CicloEscolar';
import { CicloEscolarService } from '../../../Servicios/cicloEscolar/ciclo-escolar.service';
//import {  Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ciclo-escolar',
  templateUrl: './ciclo-escolar.component.html',
  styleUrls: ['./ciclo-escolar.component.scss']
  
  //,  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CicloEscolarComponent implements OnInit {

  CicloForm:FormGroup;
  public CicloEscolar:CicloEscolar;
  CicloEscolarList: CicloEscolar[];


  constructor(private pf:FormBuilder,
    private toastr: ToastrService,private DataService: CicloEscolarService) { 
     
      this.CicloForm=this.pf.group
      ({
       'IdCicloEscolar':[''],
        'Semestre':[ Validators.pattern('[0-9]+')],
        'FechaInicio':['',[Validators.required]],
        'FechaCierre':['',[Validators.required]]
       
  
        
      });

    }

//     //borrar
// @Input() users;
// @Output() onCreateUser: EventEmitter<any> = new EventEmitter();
// @Output() onApproveAll: EventEmitter<any> = new EventEmitter();
// createUser() {
//   this.onCreateUser.emit({
//     name: 'Prueba',
//     email: 'prueba@gmail.com',
//     registration: 'May 11, 2016',
//     isPremium: false
//   });
// }

// approveAll() {
//   this.onApproveAll.emit();
// }
///
    ngOnInit() 
    {

                 
    }
    private saveCicloEscolar(){
         
          const saveCicloEscolar=
          {
            IdCicloEscolar:this.CicloForm.get('IdCicloEscolar').value,
            Semestre:this.CicloForm.get('Semestre').value,
            FechaInicio:this.CicloForm.get('FechaInicio').value,
            FechaCierre:this.CicloForm.get('FechaCierre').value
    
          }
          
          return saveCicloEscolar;
    }


    onSubmit()
    {

 
       

      this.CicloEscolar=this.saveCicloEscolar();
     
      
      if(this.CicloEscolar.IdCicloEscolar==null)
      //registrar nuevo cicloEScolar 
            this.DataService.post(this.CicloEscolar);
      else
      //actualizar datos
      
            this.DataService.put(this.CicloEscolar);  
       
        this.CicloForm.reset();
    

      

    }

}