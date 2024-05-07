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
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin =
      [

				{
                    label: 'Menu',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Gestion de medecin',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste medecin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/commun/medecin/list']
								  },
						]
					  },
                        {
                            label: 'Gestion infermier',
                            icon: 'pi pi-wallet',
                            items: [
                                {
                                    label: 'Liste infermier',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/commun/infermier/list']
                                },
                            ]
                        },
					  {
						label: 'Commun',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste sexe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/commun/sexe/list']
								  },
                            {
                                label: 'Liste relation',
                                icon: 'pi pi-fw pi-plus-circle',
                                routerLink: ['/app/admin/patient/relation/list']
                            }
						]
					  },

					  {
						label: 'Patient',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste patient contact',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/patient/patient-contact/list']
								  },

								  {
									label: 'Liste patient',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/patient/patient/list']
								  },
						]
					  },


			]
	    }
    ];

    this.modelMedecin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Gestion de medecin',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste medecin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/commun/medecin/list']
								  },
						]
					  },
					  {
						label: 'Commun',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste sexe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/commun/sexe/list']
								  },
						]
					  },
					  {
						label: 'Gestion infermier',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste infermier',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/commun/infermier/list']
								  },
						]
					  },
					  {
						label: 'Gestion medicale',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste certificat',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/gestio/certificat/list']
								  },
								  {
									label: 'Liste traitement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/gestio/traitement/list']
								  },
								  {
									label: 'Liste medicament',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/gestio/medicament/list']
								  },
								  {
									label: 'Liste ordonnance',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/gestio/ordonnance/list']
								  },
						]
					  },
					  {
						label: 'Gestion des consultations',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste antecedent',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/dossie/antecedent/list']
								  },
								  {
									label: 'Liste fiche patient',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/dossie/fiche-patient/list']
								  },
								  {
									label: 'Liste epreuve',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/dossie/epreuve/list']
								  },
								  {
									label: 'Liste consultation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/consultatio/consultation/list']
								  },
								  {
									label: 'Liste diagnostic',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/rappor/diagnostic/list']
								  },
								  {
									label: 'Liste analyse medicale',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/dossie/analyse-medicale/list']
								  },
								  {
									label: 'Liste radiologie',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/dossie/radiologie/list']
								  },
								  {
									label: 'Liste synthese medicale',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/rappor/synthese-medicale/list']
								  },
						]
					  },
					  {
						label: 'Patient',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste patient contact',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/patient/patient-contact/list']
								  },
								  {
									label: 'Liste relation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/patient/relation/list']
								  },
								  {
									label: 'Liste patient',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/medecin/patient/patient/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelInfermier =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Gestion de medecin',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste medecin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/commun/medecin/list']
								  },
						]
					  },
					  {
						label: 'Commun',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste sexe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/commun/sexe/list']
								  },
						]
					  },
					  {
						label: 'Gestion infermier',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste infermier',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/commun/infermier/list']
								  },
						]
					  },
					  {
						label: 'Gestion medicale',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste certificat',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/gestio/certificat/list']
								  },
								  {
									label: 'Liste traitement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/gestio/traitement/list']
								  },
								  {
									label: 'Liste medicament',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/gestio/medicament/list']
								  },
								  {
									label: 'Liste ordonnance',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/gestio/ordonnance/list']
								  },
						]
					  },
					  {
						label: 'Gestion des consultations',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste antecedent',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/dossie/antecedent/list']
								  },
								  {
									label: 'Liste fiche patient',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/dossie/fiche-patient/list']
								  },
								  {
									label: 'Liste epreuve',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/dossie/epreuve/list']
								  },
								  {
									label: 'Liste consultation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/consultatio/consultation/list']
								  },
								  {
									label: 'Liste diagnostic',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/rappor/diagnostic/list']
								  },
								  {
									label: 'Liste analyse medicale',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/dossie/analyse-medicale/list']
								  },
								  {
									label: 'Liste radiologie',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/dossie/radiologie/list']
								  },
								  {
									label: 'Liste synthese medicale',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/rappor/synthese-medicale/list']
								  },
						]
					  },
					  {
						label: 'Patient',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste patient contact',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/patient/patient-contact/list']
								  },
								  {
									label: 'Liste relation',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/patient/relation/list']
								  },
								  {
									label: 'Liste patient',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/infermier/patient/patient/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
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
