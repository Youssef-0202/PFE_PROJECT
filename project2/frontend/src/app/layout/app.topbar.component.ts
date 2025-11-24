import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AppLayoutComponent } from "./app.layout.component";
import { AppComponent } from "../app.component";
import { AuthService } from "../zynerator/security/shared/service/Auth.service";
import { TranslateService } from "@ngx-translate/core";
import { UserService } from "../zynerator/security/shared/service/User.service";
import { UserDto } from "../zynerator/security/shared/model/User.model";
import { Router } from "@angular/router";
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})


export class AppTopBarComponent implements OnInit {
    // Role flags
    roleAdmin = false;
    roleMedecin = false;
    roleInfermier = false;

    // Dialog states
    editDialog = false;
    showProfil = false;

    // Language
    languageOptions: any[];
    selectedLanguage: string = 'fr';

    // Profile menu
    profileMenuItems: MenuItem[] = [];

    // Notifications
    notificationCount: string = '3'; // Example

    // Password fields
    currentPassword: string = '';
    confirmPassword: string = '';

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public service: LayoutService,
        public router: Router,
        public layoutService: LayoutService,
        public app: AppComponent,
        public appMain: AppLayoutComponent,
        private authService: AuthService,
        private translateService: TranslateService,
        private userService: UserService
    ) {
        this.languageOptions = [
            { label: 'Français', value: 'fr', icon: 'pi pi-globe' },
            { label: 'English', value: 'en', icon: 'pi pi-globe' },
            { label: 'العربية', value: 'ar', icon: 'pi pi-globe' }
        ];
    }

    ngOnInit(): void {
        this.authService.loadInfos();
        this.determineUserRole();
        this.initializeProfileMenu();
        this.selectedLanguage = this.translateService.currentLang || 'fr';
    }

    // Determine user role
    private determineUserRole(): void {
        const authority = this.authService.authenticatedUser?.roleUsers?.[0]?.role?.authority;
        
        this.roleAdmin = authority === 'ROLE_ADMIN';
        this.roleMedecin = authority === 'ROLE_MEDECIN';
        this.roleInfermier = authority === 'ROLE_INFERMIER';
    }

    // Initialize profile menu items
    private initializeProfileMenu(): void {
        this.profileMenuItems = [
            {
                label: 'Mon Profil',
                icon: 'pi pi-user',
                command: () => this.showProfilRouter()
            },
            {
                label: 'Paramètres',
                icon: 'pi pi-cog',
                command: () => this.edit(this.authenticatedUser)
            },
            {
                separator: true
            },
            {
                label: 'Aide',
                icon: 'pi pi-question-circle',
                command: () => this.openHelp()
            },
            {
                separator: true
            },
            {
                label: 'Déconnexion',
                icon: 'pi pi-sign-out',
                styleClass: 'logout-item',
                command: () => this.logout()
            }
        ];
    }

    // Get topbar CSS class based on role
    getTopbarClass(): string {
        if (this.roleMedecin) return 'role-medecin';
        if (this.roleInfermier) return 'role-infermier';
        if (this.roleAdmin) return 'role-admin';
        return '';
    }

    // Get role badge class
    getRoleBadgeClass(): string {
        if (this.roleMedecin) return 'badge-medecin';
        if (this.roleInfermier) return 'badge-infermier';
        if (this.roleAdmin) return 'badge-admin';
        return '';
    }

    // Get role icon
    getRoleIcon(): string {
        if (this.roleMedecin) return 'pi pi-heart';
        if (this.roleInfermier) return 'pi pi-users';
        if (this.roleAdmin) return 'pi pi-shield';
        return 'pi pi-user';
    }

    // Get dashboard title
    getDashboardTitle(): string {
        if (this.roleMedecin) return 'Tableau de bord Médecin';
        if (this.roleInfermier) return 'Tableau de bord Infirmier';
        if (this.roleAdmin) return 'Tableau de bord Admin';
        return 'Tableau de bord';
    }

    // Get role label
    getRoleLabel(): string {
        if (this.roleMedecin) return 'Médecin';
        if (this.roleInfermier) return 'Infirmier';
        if (this.roleAdmin) return 'Administrateur';
        return 'Utilisateur';
    }

    // Get user initials for avatar
    getUserInitials(): string {
        const username = this.authenticatedUser?.username || 'U';
        return username.substring(0, 2).toUpperCase();
    }

    // Get user avatar (placeholder for now)
    getUserAvatar(): string | null {
        // Return null for now, will use placeholder
        return null;
    }

    // Change language
    changeLanguage(lang: string): void {
        this.translateService.use(lang);
        this.selectedLanguage = lang;
    }

    // Navigate to dashboard
    navigateToDashboard(): void {
        if (this.roleAdmin) this.router.navigateByUrl('/app/admin');
        else if (this.roleMedecin) this.router.navigateByUrl('/app/medecin');
        else if (this.roleInfermier) this.router.navigateByUrl('/app/infermier');
    }

    // Show profile router
    showProfilRouter(): void {
        this.showProfil = !this.showProfil;
        
        if (this.showProfil) {
            this.service.onMenuToggle();
            if (this.roleAdmin) this.router.navigateByUrl('/app/admin/profil');
            else if (this.roleInfermier) this.router.navigateByUrl('/app/infermier/profil');
            else if (this.roleMedecin) this.router.navigateByUrl('/app/medecin/profil');
        } else {
            this.showProfil = false;
            this.service.onMenuToggle();
            this.navigateToDashboard();
        }
    }

    // Edit user profile
    public async edit(dto: UserDto): Promise<void> {
        this.userService.findByUsername(dto.username).subscribe(res => {
            this.item = res;
            this.editDialog = true;
        });
    }

    // Save user changes
    public editUser(): void {
        // Validate passwords match
        if (this.item.password && this.item.password !== this.confirmPassword) {
            // Show error message
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        this.userService.edit().subscribe(data => {
            this.authenticatedUser = data;
            this.authService.loadInfos();
            this.editDialog = false;
            this.resetPasswordFields();
        });
    }

    // Hide edit dialog
    public hideEditDialog(): void {
        this.editDialog = false;
        this.resetPasswordFields();
    }

    // Reset password fields
    private resetPasswordFields(): void {
        this.currentPassword = '';
        this.confirmPassword = '';
    }

    // Open help
    openHelp(): void {
        // Implement help functionality
        console.log('Open help');
    }

    // Logout
    logout(): void {
        this.roleAdmin = false;
        this.roleMedecin = false;
        this.roleInfermier = false;
        this.editDialog = false;
        
        if (this.showProfil) {
            this.showProfil = false;
            this.service.onMenuToggle();
        }
        
        this.authService.logout();
    }

    // Getters and setters
    get item(): UserDto {
        return this.userService.item;
    }

    set item(value: UserDto) {
        this.userService.item = value;
    }

    get authenticatedUser(): UserDto {
        return this.authService.authenticatedUser;
    }

    set authenticatedUser(userDto: UserDto) {
        this.authService.authenticatedUser = userDto;
    }
}