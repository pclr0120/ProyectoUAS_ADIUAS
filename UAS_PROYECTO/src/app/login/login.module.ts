import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { UsuarioService } from '../Servicios/Usuarios/usuario.service';


@NgModule({
    imports: [CommonModule,  MatInputModule, MatIconModule,MatFormFieldModule,LoginRoutingModule,FormsModule,ReactiveFormsModule,
        FlashMessagesModule],providers:[UsuarioService],
    declarations: [LoginComponent]
})
export class LoginModule {}
