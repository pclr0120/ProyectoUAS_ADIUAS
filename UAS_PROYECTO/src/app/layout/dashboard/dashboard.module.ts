import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
///
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule,MatSelectModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
////
import { StatModule } from '../../shared';
import { CicloEscolarComponent } from '../../layout/dashboard/ciclo-escolar/ciclo-escolar.component';
import { CicloEscolarService } from '../../Servicios/cicloEscolar/ciclo-escolar.service';
import { CicloEscolarTablaComponent } from '../../layout/dashboard/ciclo-escolar-tabla/ciclo-escolar-tabla.component';
import { MatPaginatorModule } from '@angular/material';
import { CicloEscolarModuloComponent } from '../../layout/dashboard/ciclo-escolar-modulo/ciclo-escolar-modulo.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,ReactiveFormsModule, 
        MatToolbarModule,MatFormFieldModule,
         MatInputModule,MatIconModule ,
         MatTableModule,    MatSelectModule,  MatButtonModule, 
           NgbDropdownModule.forRoot(),MatPaginatorModule
    ], providers:[CicloEscolarService ],
    exports: [
        CommonModule, MatToolbarModule,MatIconModule ,
        MatInputModule, MatTableModule,MatButtonModule],
    
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        CicloEscolarComponent,
        CicloEscolarTablaComponent,
        CicloEscolarModuloComponent
    ]
})
export class DashboardModule {}
