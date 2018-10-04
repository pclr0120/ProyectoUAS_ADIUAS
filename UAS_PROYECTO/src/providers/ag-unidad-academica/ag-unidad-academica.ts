import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadAcademica, RutasApi } from '../../Modelos/AG-Modelos';
import { Events, LoadingController } from 'ionic-angular';
import { ConfiguracionSistema } from '../../ConfiguracionSistema';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';

/*
  Generated class for the AgUnidadAcademicaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface UA{
  IDUnidad_Acad: String;
  Nombre_UA: String;
  Nivel_Educ: String;
  Unidad_Reg: String;
  Tel_UA: String;
  Nom_Direct: String;
  Nom_SA: String;
  Direcc_SA: String;
  Red_Soc: String;
  Nom_RT: String;
  Tel_RT: String;
  Correo_RT: String;
}

@Injectable()
export class AgUnidadAcademicaProvider {
  
  public UnidadAcademica: UnidadAcademica;
  public Rutas: RutasApi;
  public TablaUnidad: UnidadAcademica[] = [];
  public TipoOperacion: String = "";
  private config: ConfiguracionSistema;

  //Construimos la ruta para las consultas
  public UrlBase:String = "";

  contador: number = 0;

  constructor(
    public events: Events,
    public http: HttpClient,
    public loadingCtrl: LoadingController
  ) {
    
    this.UnidadAcademica = new UnidadAcademica();
    this.Rutas = new RutasApi();
    this.UrlBase = this.Rutas.root+this.Rutas.UnidadAcademica;
    this.get();

    console.log('Hello AgUnidadAcademicaProvider Provider');
  }

  
  public Insert(){
    let loading = this.loadingCtrl.create({
      content: 'Guardando Datos...'
    });

    loading.present();

    return new Promise((resolve, reject) => {
      this.http.post(this.UrlBase+this.Rutas.insert, this.UnidadAcademica)
        .subscribe(res => {
         
          this.get();
          this.events.publish('ActualizarTablaUnidadAcademica'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
          
          setTimeout(() => {
            this.Clear();
            loading.dismiss();
          }, 1000);
          resolve(res);
        }, (err) => {
          alert("Error:Verfique su conexion a internet" + JSON.stringify(err))

          setTimeout(() => {
            loading.dismiss();
          }, 5000);
          reject(err);
        });
    });
  }

  public get(){
      let loading = this.loadingCtrl.create({
        content:"Obteniendo Registros..."
      });

      loading.present();

      return new Promise((resolve,reject)=>{
        this.http.get(this.UrlBase+this.Rutas.search)
        .subscribe((res:any) => {
          this.TablaUnidad=[];
          
          let data = res.data;
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const element = data[key];
              this.TablaUnidad.push(element);
            }
          }
         
          this.events.publish('ActualizarTablaUnidadAcademica'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
          setTimeout(() => {
            loading.dismiss();
          }, 1000);
          resolve(res);
        }, (err) => {

          alert("Verifique la conexion a internet.. " + JSON.stringify(err))

          setTimeout(() => {
            loading.dismiss();
          }, 5000);
          reject(err);
        });
      });

  }

  public Operacion() {
    
    if (this.TipoOperacion.trim() == 'Registrar')
      this.Insert();
    if (this.TipoOperacion.trim() == 'Actualizar') {
     this.update();
   }
 }

 public update() {

  let loading = this.loadingCtrl.create({
    content: 'Actualizando Datos...'
  });

  loading.present();

  return new Promise((resolve, reject) => {
    //alert(JSON.stringify(this.CicloEscolar))
    this.http.put(this.UrlBase+this.Rutas.update, this.UnidadAcademica)
      .subscribe(res => {
       // alert(JSON.stringify(res))
        this.get();
        this.events.publish('ActualizarTablaUnidadAcademica'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
        setTimeout(() => {
          this.Clear();
          loading.dismiss();
        }, 1000);
        resolve(res);
      }, (err) => {
        alert("Error:Verfique su conexion a internet" + JSON.stringify(err))

        setTimeout(() => {
          loading.dismiss();
        }, 5000);
        reject(err);
      });
  });
}

  public Clear() {

    this.UnidadAcademica = new UnidadAcademica();
  }

  public del(id: string) {
    alert(id)
    let loading = this.loadingCtrl.create({
      content: 'Actualizando Datos...'
    });

    loading.present();

    return new Promise((resolve, reject) => {
      //alert(JSON.stringify(this.CicloEscolar))
      this.http.delete(this.UrlBase+this.Rutas.delete+'/'+this.UnidadAcademica.IDUnidad_Acad)
        .subscribe(res => {
         // alert(JSON.stringify(res))
          this.get();
          this.events.publish('ActualizarTablaUnidadAcademica'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
          setTimeout(() => {
            this.Clear();
            loading.dismiss();
          }, 1000);
          resolve(res);
        }, (err) => {
          alert("Error:Verfique su conexion a internet" + JSON.stringify(err))

          setTimeout(() => {
            loading.dismiss();
          }, 5000);
          reject(err);
        });
    });

  }

}
