import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule,BrowserXhr }    from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ToastrModule } from 'ngx-toastr';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatPaginatorModule } from '@angular/material';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
// AoT requires an exported function for factories
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';



//interfaces


//
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,   HttpClientModule,
        NgProgressModule,
        HttpClientModule, FormsModule,ReactiveFormsModule,   HttpModule ,     MatToolbarModule, MatInputModule, MatTableModule,ToastrModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),MatPaginatorModule,
        AppRoutingModule,FlashMessagesModule
    ],exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
    declarations: [AppComponent],
    providers: [AuthGuard,FlashMessagesService,{provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {}
