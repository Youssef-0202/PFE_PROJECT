import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
  modelAdmin: any[];
  modelMedecin: any[];
  modelInfermier: any[];
constructor( public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin = [
  {
    label: '🏠 Accueil',  // Emoji + texte
    icon: 'pi pi-home',  // Icône moderne
    styleClass: 'menu-section-home',  // Pour styling personnalisé
    items: [
      { 
        label: 'Tableau de bord', 
        icon: 'pi pi-chart-line',  // Icône plus moderne que pi-home
        routerLink: ['/app/admin'] 
      }
    ]
  },
  {
    label: '📋 Navigation',  // Emoji + texte
    icon: 'pi pi-th-large',  // Icône grille moderne
    styleClass: 'menu-section-menu',
    items: [
      {
        label: 'Gestion des médecins',
        icon: 'pi pi-user-edit',  // Icône plus spécifique
        items: [
          {
            label: 'Liste des médecins',
            icon: 'pi pi-list',  // Liste au lieu de plus-circle
            routerLink: ['/app/admin/commun/medecin/list']
          },
        ]
      },
      {
        label: 'Gestion des infirmiers',
        icon: 'pi pi-id-card',  // Icône différente pour infirmiers
        items: [
          {
            label: 'Liste des infirmiers',
            icon: 'pi pi-list',
            routerLink: ['/app/admin/commun/infermier/list']
          },
        ]
      },
      {
        label: 'Données communes',
        icon: 'pi pi-database',  // Icône base de données
        items: [
          {
            label: 'Sexes',
            icon: 'pi pi-venus-mars',  // Icône appropriée
            routerLink: ['/app/admin/commun/sexe/list']
          },
          {
            label: 'Relations',
            icon: 'pi pi-sitemap',  // Icône relations
            routerLink: ['/app/admin/patient/relation/list']
          }
        ]
      },
      {
        label: 'Patients',
        icon: 'pi pi-heart',  // Icône santé
        items: [
          {
            label: 'Contacts patients',
            icon: 'pi pi-phone',
            routerLink: ['/app/admin/patient/patient-contact/list']
          },
          {
            label: 'Liste des patients',
            icon: 'pi pi-users',
            routerLink: ['/app/admin/patient/patient/list']
          },
        ]
      },
    ]
  }
];

this.modelMedecin = [
  {
    label: '🏠 Accueil',
    icon: 'pi pi-home',
    styleClass: 'menu-section-home',
    items: [
      { 
        label: 'Tableau de bord', 
        icon: 'pi pi-chart-line', 
        routerLink: ['/app/medecin'] 
      },
      { 
        label: 'Statistiques', 
        icon: 'pi pi-chart-bar', 
        routerLink: ['/app/medecin/statistique'] 
      }
    ]
  },
  {
    label: '📋 Navigation',
    icon: 'pi pi-th-large',
    styleClass: 'menu-section-menu',
    items: [
      {
        label: 'Patients',
        icon: 'pi pi-heart',
        items: [
          {
            label: 'Nouveau patient',
            icon: 'pi pi-user-plus',
            routerLink: ['/app/medecin/patient/patient/list']
          },
          {
            label: 'Contacts patients',
            icon: 'pi pi-phone',
            routerLink: ['/app/medecin/patient/patient-contact/list']
          },
          {
            label: 'Relations',
            icon: 'pi pi-sitemap',
            routerLink: ['/app/medecin/patient/relation/list']
          },
        ]
      },
      {
        label: 'Gestion médicale',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Certificats',
            icon: 'pi pi-file-pdf',
            routerLink: ['/app/medecin/gestio/certificat/list']
          },
          {
            label: 'Traitements',
            icon: 'pi pi-sync',
            routerLink: ['/app/medecin/gestio/traitement/list']
          },
          {
            label: 'Médicaments',
            icon: 'pi pi-box',
            routerLink: ['/app/medecin/gestio/medicament/list']
          },
          {
            label: 'Ordonnances',
            icon: 'pi pi-file-edit',
            routerLink: ['/app/medecin/gestio/ordonnance/list']
          },
        ]
      },
      {
        label: 'Gestion des infirmiers',
        icon: 'pi pi-id-card',
        items: [
          {
            label: 'Liste des infirmiers',
            icon: 'pi pi-list',
            routerLink: ['/app/medecin/commun/infermier/list']
          },
        ]
      },
      {
        label: 'Consultations',
        icon: 'pi pi-calendar-plus',
        items: [
          {
            label: 'Consultations',
            icon: 'pi pi-calendar',
            routerLink: ['/app/medecin/consultatio/consultation/list']
          },
          {
            label: 'Fiches patients',
            icon: 'pi pi-folder',
            routerLink: ['/app/medecin/dossie/fiche-patient/list']
          },
          {
            label: 'Antécédents',
            icon: 'pi pi-history',
            routerLink: ['/app/medecin/dossie/antecedent/list']
          },
          {
            label: 'Épreuves',
            icon: 'pi pi-check-square',
            routerLink: ['/app/medecin/dossie/epreuve/list']
          },
          {
            label: 'Diagnostics',
            icon: 'pi pi-search',
            routerLink: ['/app/medecin/rappor/diagnostic/list']
          },
          {
            label: 'Analyses médicales',
            icon: 'pi pi-flask',
            routerLink: ['/app/medecin/dossie/analyse-medicale/list']
          },
          {
            label: 'Radiologie',
            icon: 'pi pi-image',
            routerLink: ['/app/medecin/dossie/radiologie/list']
          },
          {
            label: 'Synthèses médicales',
            icon: 'pi pi-file',
            routerLink: ['/app/medecin/rappor/synthese-medicale/list']
          },
        ]
      },
    ]
  }
];

this.modelInfermier = [
  {
    label: '📋 Navigation',
    icon: 'pi pi-th-large',
    styleClass: 'menu-section-menu',
    items: [
      {
        label: 'Patients',
        icon: 'pi pi-heart',
        items: [
          {
            label: 'Liste des patients',
            icon: 'pi pi-users',
            routerLink: ['/app/infermier/patient/patient/list']
          },
          {
            label: 'Contacts patients',
            icon: 'pi pi-phone',
            routerLink: ['/app/infermier/patient/patient-contact/list']
          },
        ]
      },
    ]
  }
];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
