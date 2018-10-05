import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgUnidadAcademicaProvider } from '../../providers/ag-unidad-academica/ag-unidad-academica';
import { UnidadAcademica } from '../../Modelos/AG-Modelos';

/**
 * Generated class for the AgUnidadAcademicaRegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ag-unidad-academica-registro',
  templateUrl: 'ag-unidad-academica-registro.html',
})
export class AgUnidadAcademicaRegistroPage {
  private Unidad: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private PUnidad: AgUnidadAcademicaProvider,
    public viewCtrl: ViewController
  ) {
    this.Unidad = this.formBuilder.group({
      IDUnidad_Acad: ['',Validators.compose([Validators.pattern('[0-9]+'),Validators.maxLength(5),Validators.minLength(5),Validators.required])],
      Nombre_UA: [''],
      Nivel_Educ: [''],
      Unidad_Reg: [''],
      Tel_UA: [''],
      Nom_Direct: [''],
      Nom_SA: [''],
      Direcc_UA: [''],
      Red_Soc: [''],
      Nom_RT: [''],
      Tel_RT: [''],
      Correo_RT: ['']
    });
  }

  private cancelar() {
    this.viewCtrl.dismiss();
    this.PUnidad.Clear();
  }

  private guardar() {
    alert("Comando:" + this.PUnidad.TipoOperacion);

      this.PUnidad.Operacion();
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
    console.log('ionViewDidLoad AgUnidadAcademicaRegistroPage');
  }

}
