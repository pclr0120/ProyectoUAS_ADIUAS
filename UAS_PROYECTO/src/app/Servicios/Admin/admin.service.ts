import { Injectable } from '@angular/core';

import{Admin}from'../../Modelos/Admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  AdminList: any;
  selectedAdmin: Admin = new Admin();
  constructor() { }

  getAdmins()
  {

  }

  insertAdmin(Admin: Admin)
  {


   var v= this.AdminList.push({
      nombre: Admin.nombre,
      email: Admin.email,
      telefono: Admin.telefono,
      matricula: Admin.matricula,
      direccion: Admin.direccion,
      estatus: Admin.estatus,
      pass:Admin.pass,
      eliminado:""
    });
    //console.log(v);
   // console.log("key:",v.key)
 return v.key;
  
    
  }

  updateAdmin(Admin: Admin)
  {
   var v= this.AdminList.update(Admin.$key, {
      nombre: Admin.nombre,
      email: Admin.email,
      telefono: Admin.telefono,
      matricula: Admin.matricula,
      direccion: Admin.direccion,
      estatus: Admin.estatus,
   
      eliminado:""
    });
    return v;
  }
  DelAdmin(key:string,cambio:string)
  {
   var v= this.AdminList.update(key, {
     
      eliminado: cambio
    
    });
    return v;
  }

  deleteAdmin($key: string)
  {
    
   return this.AdminList.remove($key);
  }
}