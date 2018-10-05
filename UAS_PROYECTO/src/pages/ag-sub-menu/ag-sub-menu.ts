import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';

import { AgCicloEscolarTablaPage } from '../ag-ciclo-escolar-tabla/ag-ciclo-escolar-tabla';

/**
 * Generated class for the AgSubMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ag-sub-menu',
  templateUrl: 'ag-sub-menu.html',
})
export class AgSubMenuPage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Ciclo Escolar', component: AgCicloEscolarTablaPage },
      { title: 'Unidad Académicas', component: AgSubMenuPage },
      { title: 'Programas Educativos', component: AgSubMenuPage },
      { title: 'Usuarios del Sistema', component: AgSubMenuPage },
      { title: 'Discapacidad o Condición NEE', component: AgSubMenuPage },
      { title: 'Estilos de aprendizaje', component: AgSubMenuPage },
      { title: 'Estudiantes con NEE', component: AgSubMenuPage }
    
    ];
  }





  openPage(page) {

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgSubMenuPage');
  }
  

}
