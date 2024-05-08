package ma.zs.gestion_service_pediatrie.dao.facade.core.rappor;

import org.springframework.data.jpa.repository.Query;
import ma.zs.gestion_service_pediatrie.zynerator.repository.AbstractRepository;
import ma.zs.gestion_service_pediatrie.bean.core.rappor.Diagnostic;
import org.springframework.stereotype.Repository;
import ma.zs.gestion_service_pediatrie.bean.core.rappor.Diagnostic;
import java.util.List;


@Repository
public interface DiagnosticDao extends AbstractRepository<Diagnostic,Long>  {
    Diagnostic findByRef(String ref);
    int deleteByRef(String ref);

    List<Diagnostic> findByConsultationId(Long id);
    int deleteByConsultationId(Long id);
    long countByConsultationRef(String ref);

    @Query("SELECT NEW Diagnostic(item.id,item.ref) FROM Diagnostic item")
    List<Diagnostic> findAllOptimized();

}
