import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {OrdonnanceMedecinService} from 'src/app/shared/service/medecin/gestio/OrdonnanceMedecin.service';
import {OrdonnanceDto} from 'src/app/shared/model/gestio/Ordonnance.model';
import {OrdonnanceCriteria} from 'src/app/shared/criteria/gestio/OrdonnanceCriteria.model';


import {TraitementDto} from 'src/app/shared/model/gestio/Traitement.model';
import {TraitementMedecinService} from 'src/app/shared/service/medecin/gestio/TraitementMedecin.service';
import {ConsultationDto} from 'src/app/shared/model/consultatio/Consultation.model';
import {ConsultationMedecinService} from 'src/app/shared/service/medecin/consultatio/ConsultationMedecin.service';

@Component({
  selector: 'app-ordonnance-edit-medecin',
  templateUrl: './ordonnance-edit-medecin.component.html'
})
export class OrdonnanceEditMedecinComponent implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;



    private _validOrdonnanceRef = true;

    private _validTraitementRef = true;
    private _validConsultatuinRef = true;



    constructor(private service: OrdonnanceMedecinService , private traitementService: TraitementMedecinService, private consultationService: ConsultationMedecinService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.traitementService.findAll().subscribe((data) => this.traitements = data);
        this.consultationService.findAll().subscribe((data) => this.consultatuins = data);
    }

    public prepareEdit() {
        this.item.dateOrdonnance = this.service.format(this.item.dateOrdonnance);
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new OrdonnanceDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validOrdonnanceRef = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateOrdonnanceRef();
    }

    public validateOrdonnanceRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validOrdonnanceRef = false;
        } else {
            this.validOrdonnanceRef = true;
        }
    }




   public async openCreateTraitement(traitement: string) {
        const isPermistted = await this.roleService.isPermitted('Traitement', 'edit');
        if (isPermistted) {
             this.traitement = new TraitementDto();
             this.createTraitementDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get traitement(): TraitementDto {
        return this.traitementService.item;
    }
    set traitement(value: TraitementDto) {
        this.traitementService.item = value;
    }
    get traitements(): Array<TraitementDto> {
        return this.traitementService.items;
    }
    set traitements(value: Array<TraitementDto>) {
        this.traitementService.items = value;
    }
    get createTraitementDialog(): boolean {
        return this.traitementService.createDialog;
    }
    set createTraitementDialog(value: boolean) {
        this.traitementService.createDialog= value;
    }
    get consultatuin(): ConsultationDto {
        return this.consultationService.item;
    }
    set consultatuin(value: ConsultationDto) {
        this.consultationService.item = value;
    }
    get consultatuins(): Array<ConsultationDto> {
        return this.consultationService.items;
    }
    set consultatuins(value: Array<ConsultationDto>) {
        this.consultationService.items = value;
    }
    get createConsultatuinDialog(): boolean {
        return this.consultationService.createDialog;
    }
    set createConsultatuinDialog(value: boolean) {
        this.consultationService.createDialog= value;
    }


    get validOrdonnanceRef(): boolean {
        return this._validOrdonnanceRef;
    }
    set validOrdonnanceRef(value: boolean) {
        this._validOrdonnanceRef = value;
    }

    get validTraitementRef(): boolean {
        return this._validTraitementRef;
    }
    set validTraitementRef(value: boolean) {
        this._validTraitementRef = value;
    }
    get validConsultatuinRef(): boolean {
        return this._validConsultatuinRef;
    }
    set validConsultatuinRef(value: boolean) {
        this._validConsultatuinRef = value;
    }

	get items(): Array<OrdonnanceDto> {
        return this.service.items;
    }

    set items(value: Array<OrdonnanceDto>) {
        this.service.items = value;
    }

    get item(): OrdonnanceDto {
        return this.service.item;
    }

    set item(value: OrdonnanceDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): OrdonnanceCriteria {
        return this.service.criteria;
    }

    set criteria(value: OrdonnanceCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }


}
