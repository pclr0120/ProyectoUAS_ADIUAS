import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from './../../shared';


//
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule,MatSelectModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
//

@NgModule({
    imports: [CommonModule, BsElementRoutingModule, PageHeaderModule,ReactiveFormsModule, 
        MatToolbarModule,MatFormFieldModule,
         MatInputModule,MatIconModule ,
         MatTableModule,    MatSelectModule,  MatButtonModule,MatTabsModule ],
    exports: [
        CommonModule, MatToolbarModule,MatIconModule ,
        MatInputModule, MatTableModule,MatButtonModule,MatTabsModule],
   
    declarations: [BsElementComponent]
})
export class BsElementModule {}
