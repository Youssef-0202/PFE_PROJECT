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


import {RadiologieMedecinService} from 'src/app/shared/service/medecin/dossie/RadiologieMedecin.service';
import {RadiologieDto} from 'src/app/shared/model/dossie/Radiologie.model';
import {RadiologieCriteria} from 'src/app/shared/criteria/dossie/RadiologieCriteria.model';

import {ConsultationDto} from 'src/app/shared/model/consultatio/Consultation.model';
import {ConsultationMedecinService} from 'src/app/shared/service/medecin/consultatio/ConsultationMedecin.service';
import {TypeImageDto} from 'src/app/shared/model/dossie/TypeImage.model';
import {TypeImageMedecinService} from 'src/app/shared/service/medecin/dossie/TypeImageMedecin.service';
@Component({
  selector: 'app-radiologie-view-medecin',
  templateUrl: './radiologie-view-medecin.component.html'
})
export class RadiologieViewMedecinComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: RadiologieMedecinService, private consultationService: ConsultationMedecinService, private typeImageService: TypeImageMedecinService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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
    get typeImage(): TypeImageDto {
        return this.typeImageService.item;
    }
    set typeImage(value: TypeImageDto) {
        this.typeImageService.item = value;
    }
    get typeImages(): Array<TypeImageDto> {
        return this.typeImageService.items;
    }
    set typeImages(value: Array<TypeImageDto>) {
        this.typeImageService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<RadiologieDto> {
        return this.service.items;
    }

    set items(value: Array<RadiologieDto>) {
        this.service.items = value;
    }

    get item(): RadiologieDto {
        return this.service.item;
    }

    set item(value: RadiologieDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): RadiologieCriteria {
        return this.service.criteria;
    }

    set criteria(value: RadiologieCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
