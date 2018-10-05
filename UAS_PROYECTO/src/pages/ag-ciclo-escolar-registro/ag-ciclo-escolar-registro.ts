

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgCicloEscolarProvider } from '../../providers/ag-ciclo-escolar/ag-ciclo-escolar';
import { CicloEscolar } from '../../Modelos/AG-Modelos';
/**
 * Generated class for the AgCicloEscolarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ag-ciclo-escolar-registro',
  templateUrl: 'ag-ciclo-escolar-registro.html',
})
export class AgCicloEscolarRegistroPage {
  private Ciclo: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private Pciclo: AgCicloEscolarProvider,
    public viewCtrl: ViewController

  ) {
    this.Ciclo = this.formBuilder.group({
      CicloEscolarA1: ['', Validators.compose([Validators.maxLength(4), Validators.minLength(4)])],
      CicloEscolarA2: ['', Validators.compose([Validators.maxLength(4), Validators.minLength(4)])],
      Semestre: ['', Validators.compose([

        Validators.pattern('[0-9]+'), Validators.maxLength(2), Validators.minLength(1)
      ])],
      FechaInicio: ['', Validators.required],
      FechaCierre: ['', Validators.required]
    });


  }
  //pruebas

  private cancelar() {
    this.viewCtrl.dismiss();
    this.Pciclo.Clear();
  }
  private guardar() {
    alert("Comando:" + this.Pciclo.TipoOperacion);

      this.Pciclo.Operacion();
      this.viewCtrl.dismiss();

  }

  private ValidarNumero(e) {
    var elementValue = e.srcElement.value;
    if (elementValue) {

      var regex = /^[0-9]+$/;
      var tempValue = elementValue.substring(0, elementValue.length - 1);
      if (!regex.test(elementValue)) {
        e.srcElement.value = tempValue;
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgCicloEscolarPage');

  }

}
