import {Component, OnInit} from "@angular/core";
import {MedecinAdminService} from "../../../../../shared/service/admin/commun/MedecinAdmin.service";
import {UserService} from "../../../../../zynerator/security/shared/service/User.service";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../../../../zynerator/security/shared/service/Auth.service";
import {UserDto} from "../../../../../zynerator/security/shared/model/User.model";
import {MedecinDto} from "../../../../../shared/model/commun/Medecin.model";


@Component({
    selector: 'profil.component.html',
    templateUrl: 'profil.component.html',
    styleUrls:['profil.component.css']
})
export class ProfilComponent implements OnInit{
    constructor(private service:MedecinAdminService,private authService: AuthService, private translateService: TranslateService, private userService: UserService) {

    }

    ngOnInit() {
     console.log(this.authenticatedUser);
     console.log(this.items)
    }

    get items(): Array<MedecinDto> {
        return this.service.items;
    }

    set items(value: Array<MedecinDto>) {
        this.service.items = value;
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
}
