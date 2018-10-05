import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CicloEscolar } from '../../Modelos/AG-Modelos';
import { Events, LoadingController } from 'ionic-angular';
import { ConfiguracionSistema } from '../../ConfiguracionSistema';

/*
  Generated class for the AgCicloEscolarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface C {
  IdCicloEscolar: String;
  CicloEscolarA1: String;
  CicloEscolarA2;
  Semestre: String;
  FechaInicio: String;
  FechaCierre: String;

}

@Injectable()
export class AgCicloEscolarProvider {

  public CicloEscolar: CicloEscolar;
  public TablaCiclo: CicloEscolar[] = [];
  public TipoOperacion: string = "";
  private config: ConfiguracionSistema;  //aqui se encuentra la url para el backend

  contardor: number = 0; //es temporar para id
  constructor(public events: Events,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    
  ) {
    this.CicloEscolar = new CicloEscolar();
    this.get();


  }
  public Insert() {
    let loading = this.loadingCtrl.create({
      content: 'Guardando Datos...'
    });

    loading.present();

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/CicloEscolar', this.CicloEscolar)
        .subscribe(res => {
         
          this.get();
          this.events.publish('ActualizarTablaCicloEscolar'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
          
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

  public get() {
 
    let loading = this.loadingCtrl.create({
      content: 'Obteniendo Registros...'
    });

    loading.present();

    return new Promise((resolve, reject) => {
     
        
    
      this.http.get<C>('http://localhost:3000/CicloEscolar/get')
        .subscribe(res => {
          this.TablaCiclo=[];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              const element = res[key];
              this.TablaCiclo.push(element);
            }
          }
         
          this.events.publish('ActualizarTablaCicloEscolar'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
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

  
  public update() {

    let loading = this.loadingCtrl.create({
      content: 'Actualizando Datos...'
    });

    loading.present();

    return new Promise((resolve, reject) => {
      //alert(JSON.stringify(this.CicloEscolar))
      this.http.put('http://localhost:3000/CicloEscolar/Update/', this.CicloEscolar)
        .subscribe(res => {
         // alert(JSON.stringify(res))
          this.get();
          this.events.publish('ActualizarTablaCicloEscolar'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
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

  public Operacion() {
    
     if (this.TipoOperacion.trim() == 'Registrar')
       this.Insert();
     if (this.TipoOperacion.trim() == 'Actualizar') {
      this.update();
    }
  }

  public Clear() {

    this.CicloEscolar = new CicloEscolar();
  }

  public del(id: string) {
    alert(id)
    let loading = this.loadingCtrl.create({
      content: 'Actualizando Datos...'
    });

    loading.present();

    return new Promise((resolve, reject) => {
      //alert(JSON.stringify(this.CicloEscolar))
      this.http.put('http://localhost:3000/CicloEscolar/delUpd/',  this.CicloEscolar)
        .subscribe(res => {
         // alert(JSON.stringify(res))
          this.get();
          this.events.publish('ActualizarTablaCicloEscolar'); //cuando inserta el dato mando actualizar a ejecutar get en la pagina tabla  para que actualize los datos;
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
