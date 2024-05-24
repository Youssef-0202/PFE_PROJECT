import {Component, OnInit} from "@angular/core";
import {DossierService} from "../../shared/service/medecin/commun/Dossier.service";
import {DialogModule} from "primeng/dialog";
import {DatePipe, NgClass, NgStyle} from "@angular/common";
import {TabViewModule} from "primeng/tabview";
import {TranslateModule} from "@ngx-translate/core";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {PatientDto} from "../../shared/model/patient/Patient.model";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {ConsultationDto} from "../../shared/model/consultatio/Consultation.model";
import {PatientContactDto} from "../../shared/model/patient/PatientContact.model";
import {AntecedentDto} from "../../shared/model/dossie/Antecedent.model";
import {OrdonnanceDto} from "../../shared/model/gestio/Ordonnance.model";
import {CertificatDto} from "../../shared/model/gestio/Certificat.model";
import {AnalyseMedicaleDto} from "../../shared/model/dossie/AnalyseMedicale.model";
import {RadiologieDto} from "../../shared/model/dossie/Radiologie.model";
import {FichePatientDto} from "../../shared/model/dossie/FichePatient.model";
import {SyntheseMedicaleDto} from "../../shared/model/rappor/SyntheseMedicale.model";
import {DiagnosticDto} from "../../shared/model/rappor/Diagnostic.model";

@Component({
    selector: 'app-dossier',
    standalone: true,
    imports: [
        DialogModule,
        NgClass,
        TabViewModule,
        TranslateModule,
        InputSwitchModule,
        ButtonModule,
        DropdownModule,
        CalendarModule,
        TableModule,
        RippleModule,
        ToolbarModule,
        DatePipe,
        NgStyle
    ],
    templateUrl: './dossier.component.html',
    styleUrls:['/dossier.component.css']
})
export class DossierComponent implements OnInit {
    array = new Array<PatientDto>(this.actualPationt)
    private _activeTab = 0;
    showConsultationDetails: boolean = false;

    constructor(private service:DossierService) {
    }

    ngOnInit(): void {

    }
    get showDossierDetails(): boolean {
        return this.service.showDossierDetails;
    }
    set showDossierDetails(value: boolean) {
        this.service.showDossierDetails = value;
    }
    get actualPationt(): PatientDto {
        return this.service.actualPationt;
    }

    set actualPationt(value: PatientDto) {
        this.service.actualPationt = value;
    }

    get consultations(): ConsultationDto[] {
        return this.service.consultations;
    }

    set consultations(value: ConsultationDto[]) {
        this.service.consultations = value;
    }

    selectProduct(product: any) {
    }

    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }

    get contacts(): PatientContactDto[] {
        return this.service.contacts;
    }

    set contacts(value: PatientContactDto[]) {
        this.service.contacts = value;
    }

    get antecedents(): AntecedentDto[] {
        return this.service.antecedents;
    }

    set antecedents(value: AntecedentDto[]) {
        this.service.antecedents = value;
    }

    get ordonances(): OrdonnanceDto[] {
        return this.service.ordonances;
    }

    set ordonances(value: OrdonnanceDto[]) {
        this.service.ordonances = value;
    }

    get certificats(): CertificatDto[] {
        return this.service.certificats;
    }

    set certificats(value: CertificatDto[]) {
        this.service.certificats = value;

    }

    showConsultation(consultation:ConsultationDto) {
        this.showConsultationDetails = !this.showConsultationDetails;
        this.actualConsultation = consultation;
        this.service.findAllFichePatient();
        this.service.findAllAnalyses();
        this.service.findAllRadiologie();
    }

    get actualConsultation(): ConsultationDto {
        return this.service.actualConsultation;
    }

    set actualConsultation(value: ConsultationDto) {
        this.service.actualConsultation = value;
    }

    get analyses(): AnalyseMedicaleDto[] {
        return this.service.analyses;
    }
    set analyses(value: AnalyseMedicaleDto[]) {
        this.service.analyses = value;
    }

    get radiologies(): RadiologieDto[] {
        return this.service.radiologies;
    }

    set radiologies(value: RadiologieDto[]) {
        this.service.radiologies = value;
    }

    get fichePatients(): FichePatientDto[] {
        return this.service.fichePatients;
    }

    set fichePatients(value: FichePatientDto[]) {
        this.service.fichePatients = value;
    }

    get syntheses(): SyntheseMedicaleDto[] {
        return this.service.syntheses;
    }

    set syntheses(value: SyntheseMedicaleDto[]) {
        this.service.syntheses = value;
    }

    get diagnostics(): DiagnosticDto[] {
        return this.service.diagnostics;
    }

    set diagnostics(value: DiagnosticDto[]) {
        this.service.diagnostics = value;
    }

}
