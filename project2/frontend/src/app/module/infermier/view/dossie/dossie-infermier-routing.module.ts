
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { AntecedentListInfermierComponent } from './antecedent/list/antecedent-list-infermier.component';
import { FichePatientListInfermierComponent } from './fiche-patient/list/fiche-patient-list-infermier.component';
import { TypeImageListInfermierComponent } from './type-image/list/type-image-list-infermier.component';
import { EpreuveListInfermierComponent } from './epreuve/list/epreuve-list-infermier.component';
import { AnalyseMedicaleListInfermierComponent } from './analyse-medicale/list/analyse-medicale-list-infermier.component';
import { RadiologieListInfermierComponent } from './radiologie/list/radiologie-list-infermier.component';
import { GroupeSanguinListInfermierComponent } from './groupe-sanguin/list/groupe-sanguin-list-infermier.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {

                            path: 'action-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ActionPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission-user',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionUserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'role',
                            children: [
                                {
                                    path: 'list',
                                    component: RoleListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'user',
                            children: [
                                {
                                    path: 'list',
                                    component: UserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                        {

                            path: 'antecedent',
                            children: [
                                {
                                    path: 'list',
                                    component: AntecedentListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'fiche-patient',
                            children: [
                                {
                                    path: 'list',
                                    component: FichePatientListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-image',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeImageListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'epreuve',
                            children: [
                                {
                                    path: 'list',
                                    component: EpreuveListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'analyse-medicale',
                            children: [
                                {
                                    path: 'list',
                                    component: AnalyseMedicaleListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'radiologie',
                            children: [
                                {
                                    path: 'list',
                                    component: RadiologieListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe-sanguin',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeSanguinListInfermierComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class DossieInfermierRoutingModule { }
