package ma.zs.gestion_service_pediatrie.zynerator.security.ws.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.gestion_service_pediatrie.zynerator.audit.Log;
import ma.zs.gestion_service_pediatrie.zynerator.dto.AuditBaseDto;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class ModelPermissionDto  extends AuditBaseDto {

    private String reference  ;
    private String libelle  ;
    private Boolean globalValue = true;





    public ModelPermissionDto(){
        super();
    }



    public Boolean getGlobalValue() {
        return globalValue;
    }

    public void setGlobalValue(Boolean globalValue) {
        this.globalValue = globalValue;
    }


    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }


    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }








}
