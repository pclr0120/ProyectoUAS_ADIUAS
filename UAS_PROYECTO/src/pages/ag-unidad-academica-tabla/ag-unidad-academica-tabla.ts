import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, Events, AlertController } from 'ionic-angular';
import { UnidadAcademica } from '../../Modelos/AG-Modelos';

import { AgUnidadAcademicaProvider } from '../../providers/ag-unidad-academica/ag-unidad-academica';
import { HomePage } from '../home/home';

/**
 * Generated class for the AgUnidadAcademicaTablaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ag-unidad-academica-tabla',
  templateUrl: 'ag-unidad-academica-tabla.html',
})
export class AgUnidadAcademicaTablaPage {
  private UnidadTablaFiltro: UnidadAcademica[] = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private PUnidad: AgUnidadAcademicaProvider,
    public events: Events,
    private alertCtrl: AlertController
  ) {
    events.subscribe('ActualizarTablaUnidadAcademica', (data) => {
      this.initializeItems();

    });

    try {
      this.UnidadTablaFiltro = this.PUnidad.TablaUnidad;
    } catch (error) {
      this.navCtrl.setRoot(HomePage);
    }

  }
  initializeItems() {
    this.UnidadTablaFiltro = [];
    this.UnidadTablaFiltro = this.PUnidad.TablaUnidad;

  }

  getItems(ev: any) {
    // Reset items back to all of the items

    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.UnidadTablaFiltro = this.UnidadTablaFiltro.filter((item) => {
        return (item.Unidad_Reg.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgUnidadAcademicaTablaPage');
  }

  ShowRegistro() {
    this.PUnidad.TipoOperacion = "Registrar";
    // this.navCtrl.push(AgCicloEscolarRegistroPage);
    let addModal = this.modalCtrl.create('AgUnidadAcademicaRegistroPage');
    addModal.onDidDismiss(item => {
      if (item) {
        //this.items.add(item);
      }
    })
    addModal.present();
  }

  ShowUpdate(id: string) {


    const val: string = id.toString();

    let d: UnidadAcademica[] = []; //Es temporal para obtener el objeto que apunta el id
    d = this.UnidadTablaFiltro.filter((item) => {
      return (item.IDUnidad_Acad.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
    })

    this.PUnidad.UnidadAcademica = d[0]; /// lo manda 
    this.PUnidad.TipoOperacion = "Actualizar"

    let addModal = this.modalCtrl.create('AgCicloEscolarRegistroPage');//esto es el modal que sale de regisrar o actualizar
    addModal.onDidDismiss(item => {
      if (item) {
        //this.items.add(item);
      }
    })
    addModal.present();
  }

  Eliminar(id: string) {

    let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      message: 'Seguro que quiere eliminar el registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Elimar',
          handler: () => {

            const val: string = id.toString();

            let d: UnidadAcademica[] = []; //Es temporal para obtener el objeto que apunta el id
            d = this.UnidadTablaFiltro.filter((item) => {
              return (item.IDUnidad_Acad.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
            })

            this.PUnidad.UnidadAcademica = d[0]; /// lo manda 
            this.PUnidad.del(id);
          }
        }
      ]
    });
    alert.present();


  }
}
