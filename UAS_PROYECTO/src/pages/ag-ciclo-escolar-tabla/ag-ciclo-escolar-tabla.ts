import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, Events, AlertController } from 'ionic-angular';
import { CicloEscolar } from '../../Modelos/AG-Modelos';

import { AgCicloEscolarProvider } from '../../providers/ag-ciclo-escolar/ag-ciclo-escolar';
import { HomePage } from '../home/home';

/**
 * Generated class for the AgCicloEscolarTablaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ag-ciclo-escolar-tabla',
  templateUrl: 'ag-ciclo-escolar-tabla.html',
})
export class AgCicloEscolarTablaPage {
  private ciclotablaFiltro: CicloEscolar[] = []; //para el filtrado
  private mostrar: number = -5; //rango

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private PCiclo: AgCicloEscolarProvider,
    public events: Events,
    private alertCtrl: AlertController
  ) {
    events.subscribe('ActualizarTablaCicloEscolar', (data) => {
      this.initializeItems();

    });
  try {
    this.ciclotablaFiltro = this.PCiclo.TablaCiclo;
  } catch (error) {
    this.navCtrl.setRoot(HomePage);
  }


  }
  initializeItems() {
    this.ciclotablaFiltro = [];
    this.ciclotablaFiltro = this.PCiclo.TablaCiclo;


  }

  getItems(ev: any) {
    // Reset items back to all of the items

    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ciclotablaFiltro = this.ciclotablaFiltro.filter((item) => {
        return (item.Semestre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgCicloEscolarTablaPage');
  }

  ShowRegistro() {
    this.PCiclo.TipoOperacion = "Registrar";
    // this.navCtrl.push(AgCicloEscolarRegistroPage);
    let addModal = this.modalCtrl.create('AgCicloEscolarRegistroPage');
    addModal.onDidDismiss(item => {
      if (item) {
        //this.items.add(item);
      }
    })
    addModal.present();
  }


  ShowUpdate(id: string) {


    const val: string = id.toString();

    let d: CicloEscolar[] = []; //Es temporal para obtener el objeto que apunta el id
    d = this.ciclotablaFiltro.filter((item) => {
      return (item.IdCicloEscolar.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
    })

    this.PCiclo.CicloEscolar = d[0]; /// lo manda 
    this.PCiclo.TipoOperacion = "Actualizar"

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

            let d: CicloEscolar[] = []; //Es temporal para obtener el objeto que apunta el id
            d = this.ciclotablaFiltro.filter((item) => {
              return (item.IdCicloEscolar.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
            })

            this.PCiclo.CicloEscolar = d[0]; /// lo manda 
            this.PCiclo.del(id);
          }
        }
      ]
    });
    alert.present();


  }

}
