import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
    ////Las iniciales Ag  ser refieren al modulo de Archivos generales 
import {AgSubMenuPage}from '../pages/ag-sub-menu/ag-sub-menu';
//import {AgCicloEscolarPage}from '../pages/ag-ciclo-escolar/ag-ciclo-escolar';
import {AgCicloEscolarTablaPage}from '../pages/ag-ciclo-escolar-tabla/ag-ciclo-escolar-tabla';
//fin AG
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {AgCicloEscolarRegistroPage}from'../pages/ag-ciclo-escolar-registro/ag-ciclo-escolar-registro';
//privders de Ag
import { AgCicloEscolarProvider } from '../providers/ag-ciclo-escolar/ag-ciclo-escolar';
import { AgUnidadAcademicaProvider } from '../providers/ag-unidad-academica/ag-unidad-academica';
import { AgUnidadAcademicaTablaPage } from '../pages/ag-unidad-academica-tabla/ag-unidad-academica-tabla';


//fin Ag
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    //Las iniciales Ag  ser refieren al modulo de Archivos generales 
    AgSubMenuPage,
    //AgCicloEscolarPage,
    AgCicloEscolarTablaPage,
    //AgCicloEscolarRegistroPage

    //AgUnidadAcademica
    AgUnidadAcademicaTablaPage


    //fin ag
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      //Las iniciales Ag  ser refieren al modulo de Archivos generales 
      AgSubMenuPage,
    //  AgCicloEscolarPage,
      AgCicloEscolarTablaPage,
      //AgCicloEscolarRegistroPage
    
      //AgUnidadAcademicaTablaPage
      AgUnidadAcademicaTablaPage

      
      //fin ag
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgCicloEscolarProvider,
    AgUnidadAcademicaProvider
  ]
})
export class AppModule {}
