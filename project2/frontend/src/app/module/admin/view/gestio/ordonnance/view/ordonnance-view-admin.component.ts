import {Component, OnInit} from '@angular/core';


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
import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';


import {OrdonnanceAdminService} from 'src/app/shared/service/admin/gestio/OrdonnanceAdmin.service';
import {OrdonnanceDto} from 'src/app/shared/model/gestio/Ordonnance.model';
import {OrdonnanceCriteria} from 'src/app/shared/criteria/gestio/OrdonnanceCriteria.model';

import {TraitementDto} from 'src/app/shared/model/gestio/Traitement.model';
import {TraitementAdminService} from 'src/app/shared/service/admin/gestio/TraitementAdmin.service';
import {ConsultationDto} from 'src/app/shared/model/consultatio/Consultation.model';
import {ConsultationAdminService} from 'src/app/shared/service/admin/consultatio/ConsultationAdmin.service';
@Component({
  selector: 'app-ordonnance-view-admin',
  templateUrl: './ordonnance-view-admin.component.html'
})
export class OrdonnanceViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: OrdonnanceAdminService, private traitementService: TraitementAdminService, private consultationService: ConsultationAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): OrdonnanceCriteria {
        return this.service.criteria;
    }

    set criteria(value: OrdonnanceCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
