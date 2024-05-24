import {Component, OnInit} from "@angular/core";
import {ConsultationDto} from "../../../../../../shared/model/consultatio/Consultation.model";
import {
    ConsultationMedecinService
} from "../../../../../../shared/service/medecin/consultatio/ConsultationMedecin.service";
import {FichePatientMedecinService} from "../../../../../../shared/service/medecin/dossie/FichePatientMedecin.service";
import {RadiologieMedecinService} from "../../../../../../shared/service/medecin/dossie/RadiologieMedecin.service";
import {InfermierMedecinService} from "../../../../../../shared/service/medecin/commun/InfermierMedecin.service";
import {MedecinMedecinService} from "../../../../../../shared/service/medecin/commun/MedecinMedecin.service";
import {EpreuveMedecinService} from "../../../../../../shared/service/medecin/dossie/EpreuveMedecin.service";
import {
    SyntheseMedicaleMedecinService
} from "../../../../../../shared/service/medecin/rappor/SyntheseMedicaleMedecin.service";
import {PatientMedecinService} from "../../../../../../shared/service/medecin/patient/PatientMedecin.service";
import {DiagnosticMedecinService} from "../../../../../../shared/service/medecin/rappor/DiagnosticMedecin.service";
import {
    AnalyseMedicaleMedecinService
} from "../../../../../../shared/service/medecin/dossie/AnalyseMedicaleMedecin.service";
import {TypeImageMedecinService} from "../../../../../../shared/service/medecin/dossie/TypeImageMedecin.service";
import {AntecedentMedecinService} from "../../../../../../shared/service/medecin/dossie/AntecedentMedecin.service";
import {ConsultationCriteria} from "../../../../../../shared/criteria/consultatio/ConsultationCriteria.model";
import {
    ConsultationInfermierService
} from "../../../../../../shared/service/infermier/consultatio/ConsultationInfermier.service";

@Component({
    selector: 'app-patient-consultation-infermier',
    templateUrl: './patient-consultation-infermier.html'
})
export class PatientConsultationInfermier implements OnInit {

    cols: any[] | undefined;
    ngOnInit(){
      this.findPaginatedByCriteria();
      this.initCol();
    }

    constructor( private service: ConsultationInfermierService  , private fichePatientService: FichePatientMedecinService, private radiologieService: RadiologieMedecinService, private infermierService: InfermierMedecinService, private medecinService: MedecinMedecinService, private epreuveService: EpreuveMedecinService, private syntheseMedicaleService: SyntheseMedicaleMedecinService, private patientService: PatientMedecinService, private diagnosticService: DiagnosticMedecinService, private analyseMedicaleService: AnalyseMedicaleMedecinService, private typeImageService: TypeImageMedecinService, private antecedentService: AntecedentMedecinService) {
    }

    public findPaginatedByCriteria() {
        this.service.findPaginatedByCriteria(this.criteria).subscribe(paginatedItems => {
            this.items = paginatedItems.list;

            this.selections = new Array<ConsultationDto>();
        }, error => console.log(error));
    }
    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'dateConsultation', header: 'Date consultation'},
            {field: 'heureConsultation', header: 'Heure consultation'},
            {field: 'typeConsultation', header: 'Type consultation'},
            {field: 'medecin?.email', header: 'Medecin'},
            {field: 'infermier?.email', header: 'Infermier'},
            {field: 'patient?.numDossier', header: 'Patient'},
        ];
    }

    get items(): Array<ConsultationDto> {
        return this.service.items;
    }

    set items(value: Array<ConsultationDto>) {
        this.service.items = value;
    }

    get selections(): any {
        return this.service.selections;
    }

    get criteria(): ConsultationCriteria {
        return this.service.criteria;
    }

    set criteria(value: ConsultationCriteria) {
        this.service.criteria = value;
    }


    public set selections(value: Array<ConsultationDto>) {
        this.service.selections = value;
    }



}
