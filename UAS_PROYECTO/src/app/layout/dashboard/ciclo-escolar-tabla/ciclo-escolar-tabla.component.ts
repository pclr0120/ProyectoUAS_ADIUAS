import { Component, OnInit,ViewChild  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import {CicloEscolar} from '../../../Modelos/CicloEscolar';
import { CicloEscolarService } from '../../../Servicios/cicloEscolar/ciclo-escolar.service';

import {  Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-ciclo-escolar-tabla',
  templateUrl: './ciclo-escolar-tabla.component.html',
  styleUrls: ['./ciclo-escolar-tabla.component.scss'] 
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CicloEscolarTablaComponent implements OnInit {

  CicloEscolarList: CicloEscolar[]=[];
  @Input() users:CicloEscolar[];
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['Semestre', 'Fecha inicio', 'Fecha cierre','EDITAR','ELIMINAR'];
  dataSource = new MatTableDataSource(this.users);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //
  constructor(  private CicloEscolarService: CicloEscolarService,
    private toastr: ToastrService) { 

   
    }



  ngOnInit() {
 
  
      var c;
    this.CicloEscolarService.get().subscribe(data=>{
      for(const id in data){
      
          

      
        this.CicloEscolarList.push(data[id]);
       
        
      }

    this.dataSource = new MatTableDataSource(this.CicloEscolarList);
    this.dataSource.paginator = this.paginator;
  });
    
   
      
  }

  refresh(){
   
    this.CicloEscolarService.get().subscribe(data=>{
      this.CicloEscolarList=[];
      for(const id$ in data){
      
          
        const p=data[id$];
        p.id$=id$;
     
        this.CicloEscolarList.push(data[id$]);
      
       
        
    }
    this.dataSource = new MatTableDataSource(this.CicloEscolarList);
    this.dataSource.paginator = this.paginator;
  });
  }

  onEdit(cicloEscolar: CicloEscolar) {

   
    //Object.assign es para mandar los datos al compoenente reigstar  para editar,La variable se debe de llamar igual en el compoenete al 
    //que se desea mandar la informacion. En este caso se manda a la variable del servicio  selectedData que en registrar  se llama igual y en el html se asigana a cada campo.
    localStorage.setItem("updateCiclo",'true'); 

    this.CicloEscolarService.selectedData= Object.assign({}, cicloEscolar);
     this.toastr.info("Datos cargador. Listo para Actualizar","Notificacion");

  }

  onDelete(id: string) {
    if(confirm('Desea eliminar el registro ?')) {

      this.CicloEscolarService.eliminar(id);
    }

//       var ke=this.CicloEscolarList.find(x=> x.$key==$key).$key;
//  //alert(ke+"/"+$key);
//  //alert("hola/"+this.CicloEscolarList.find(x=>x.$key==$key).email);
//  var email=this.CicloEscolarList.find(x=>x.$key==$key).email;
//       if( $key==ke ) {
//         //   this.CicloEscolarService.deleteCicloEscolar($key)
        
//         if(this.CicloEscolarService.DelCicloEscolar($key,"true"))
//           this.toastr.warning('Eliminado exitosamente!', 'usuario eliminado');
//         else 56fd
//         this.toastr.warning('Usuario no eliminado', '#ERROR');
      
//       }else{
//       this.toastr.warning('Error. Recargue la pagina e intente de nuevo.', 'usuario eliminado');
//       }
//    console.log("eliminara:",this.CicloEscolarList.find(x=>x.$key==$key).email)
  
    

//    }
  }

}
