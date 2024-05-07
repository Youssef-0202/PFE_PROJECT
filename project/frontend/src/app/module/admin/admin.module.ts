import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { DossieAdminModule } from './view/dossie/dossie-admin.module';
import { DossieAdminRoutingModule } from './view/dossie/dossie-admin-routing.module';
import { RapporAdminModule } from './view/rappor/rappor-admin.module';
import { RapporAdminRoutingModule } from './view/rappor/rappor-admin-routing.module';
import { PatientAdminModule } from './view/patient/patient-admin.module';
import { PatientAdminRoutingModule } from './view/patient/patient-admin-routing.module';
import { ConsultatioAdminModule } from './view/consultatio/consultatio-admin.module';
import { ConsultatioAdminRoutingModule } from './view/consultatio/consultatio-admin-routing.module';
import { CommunAdminModule } from './view/commun/commun-admin.module';
import { CommunAdminRoutingModule } from './view/commun/commun-admin-routing.module';
import { GestioAdminModule } from './view/gestio/gestio-admin.module';
import { GestioAdminRoutingModule } from './view/gestio/gestio-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  DossieAdminModule,
  DossieAdminRoutingModule,
  RapporAdminModule,
  RapporAdminRoutingModule,
  PatientAdminModule,
  PatientAdminRoutingModule,
  ConsultatioAdminModule,
  ConsultatioAdminRoutingModule,
  CommunAdminModule,
  CommunAdminRoutingModule,
  GestioAdminModule,
  GestioAdminRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    DossieAdminModule,
    RapporAdminModule,
    PatientAdminModule,
    ConsultatioAdminModule,
    CommunAdminModule,
    GestioAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
