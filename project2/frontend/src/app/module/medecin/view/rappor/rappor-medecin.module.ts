import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { DiagnosticCreateMedecinComponent } from './diagnostic/create/diagnostic-create-medecin.component';
import { DiagnosticEditMedecinComponent } from './diagnostic/edit/diagnostic-edit-medecin.component';
import { DiagnosticViewMedecinComponent } from './diagnostic/view/diagnostic-view-medecin.component';
import { DiagnosticListMedecinComponent } from './diagnostic/list/diagnostic-list-medecin.component';
import { SyntheseMedicaleCreateMedecinComponent } from './synthese-medicale/create/synthese-medicale-create-medecin.component';
import { SyntheseMedicaleEditMedecinComponent } from './synthese-medicale/edit/synthese-medicale-edit-medecin.component';
import { SyntheseMedicaleViewMedecinComponent } from './synthese-medicale/view/synthese-medicale-view-medecin.component';
import { SyntheseMedicaleListMedecinComponent } from './synthese-medicale/list/synthese-medicale-list-medecin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    DiagnosticCreateMedecinComponent,
    DiagnosticListMedecinComponent,
    DiagnosticViewMedecinComponent,
    DiagnosticEditMedecinComponent,
    SyntheseMedicaleCreateMedecinComponent,
    SyntheseMedicaleListMedecinComponent,
    SyntheseMedicaleViewMedecinComponent,
    SyntheseMedicaleEditMedecinComponent,
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
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,
    EditorModule,


  ],
  exports: [
  DiagnosticCreateMedecinComponent,
  DiagnosticListMedecinComponent,
  DiagnosticViewMedecinComponent,
  DiagnosticEditMedecinComponent,
  SyntheseMedicaleCreateMedecinComponent,
  SyntheseMedicaleListMedecinComponent,
  SyntheseMedicaleViewMedecinComponent,
  SyntheseMedicaleEditMedecinComponent,
  ],
})
export class RapporMedecinModule { }
