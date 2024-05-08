import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SelectItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {AppLayoutComponent} from "./app.layout.component";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "../zynerator/security/shared/service/User.service";
import {UserDto} from "../zynerator/security/shared/model/User.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{
    roleAdmin = false;
    roleMedecin=false;
    roleInfermier=false;
    editDialog = false ;
    languageOptions: SelectItem[];
    selectedLanguage: string;




    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    public async edit(dto: UserDto) {
        this.userService.findByUsername(dto.username).subscribe(res => {
            this.item = res;
            this.editDialog = true;
        });
        this.router.navigate(['admin/profil'])
    }
    public editUser(){
        this.userService.edit().subscribe(data => this.authenticatedUser = data);
        this.authService.loadInfos();
        this.editDialog = false;
    }

    public hideEditDialog() {
        this.editDialog = false;
    }



    constructor(public router:Router, public  layoutService:LayoutService ,public app: AppComponent, public appMain: AppLayoutComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService,) {
        this.languageOptions = [
            { label: 'English', value: 'en' },
            { label: 'Français', value: 'fr' },
            { label: 'العربية', value: 'ar' }
        ];
    }

    useLanguage(language: string): void {
        this.translateService.use(language);
    }
    ngOnInit(): void {
        this.authService.loadInfos();
        if ( this.authService.authenticatedUser.roleUsers[0].role.authority === 'ROLE_ADMIN') {
            this.roleAdmin = true;
        }else if (this.authService.authenticatedUser.roleUsers[0].role.authority === 'ROLE_INFERMIER'){
            this.roleInfermier = true;
        }else if(this.authService.authenticatedUser.roleUsers[0].role.authority === 'ROLE_MEDECIN'){
            this.roleMedecin = true;
        }

    }

    logout(){
        this.roleAdmin = false;
        this.roleMedecin=false;
        this.roleInfermier=false;
        this.authService.logout();
    }
    get item(): UserDto {
        return this.userService.item;
    }

    set item(value: UserDto) {
        this.userService.item = value;
    }
    get authenticatedUser(): UserDto{
        return this.authService.authenticatedUser;
    }
    set authenticatedUser(userDto: UserDto){
        this.authService.authenticatedUser = userDto;
    }


    background() {
        if(this.roleMedecin){
            return {"background-color":"#0b4d85"}
        }
        else if(this.roleInfermier){
            return {"background-color":"#e681b3"}
        }else {
            return {"background-color":"rosybrown"}
        }
    }
}
