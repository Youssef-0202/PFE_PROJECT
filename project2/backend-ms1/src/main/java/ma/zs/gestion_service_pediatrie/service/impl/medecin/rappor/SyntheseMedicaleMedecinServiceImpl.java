package ma.zs.gestion_service_pediatrie.service.impl.medecin.rappor;


import ma.zs.gestion_service_pediatrie.zynerator.exception.EntityNotFoundException;
import ma.zs.gestion_service_pediatrie.bean.core.rappor.SyntheseMedicale;
import ma.zs.gestion_service_pediatrie.dao.criteria.core.rappor.SyntheseMedicaleCriteria;
import ma.zs.gestion_service_pediatrie.dao.facade.core.rappor.SyntheseMedicaleDao;
import ma.zs.gestion_service_pediatrie.dao.specification.core.rappor.SyntheseMedicaleSpecification;
import ma.zs.gestion_service_pediatrie.service.facade.medecin.rappor.SyntheseMedicaleMedecinService;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.multipart.MultipartFile;

import ma.zs.gestion_service_pediatrie.zynerator.util.RefelexivityUtil;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zs.gestion_service_pediatrie.service.facade.medecin.consultatio.ConsultationMedecinService ;

@Service
public class SyntheseMedicaleMedecinServiceImpl implements SyntheseMedicaleMedecinService {


    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public SyntheseMedicale update(SyntheseMedicale t) {
        SyntheseMedicale loadedItem = dao.findById(t.getId()).orElse(null);
        if (loadedItem == null) {
            throw new EntityNotFoundException("errors.notFound", new String[]{SyntheseMedicale.class.getSimpleName(), t.getId().toString()});
        } else {
            dao.save(t);
            return loadedItem;
        }
    }

    public SyntheseMedicale findById(Long id) {
        return dao.findById(id).orElse(null);
    }

    @Override
    @Query("SELECT a.syntheseMedicale FROM Consultation a WHERE a.patient.numDossier = :nom")
    public List<SyntheseMedicale> findByNumDossier(String nom) {
        return dao.findByNumDossier(nom);
    }

    public List<SyntheseMedicale> findByConsultationRef(String ref) {
        return dao.findByConsultationRef(ref);
    }

    public SyntheseMedicale findOrSave(SyntheseMedicale t) {
        if (t != null) {
            findOrSaveAssociatedObject(t);
            SyntheseMedicale result = findByReferenceEntity(t);
            if (result == null) {
                return create(t);
            } else {
                return result;
            }
        }
        return null;
    }


    public List<SyntheseMedicale> importData(List<SyntheseMedicale> items) {
        List<SyntheseMedicale> list = new ArrayList<>();
        for (SyntheseMedicale t : items) {
            SyntheseMedicale founded = findByReferenceEntity(t);
			if (founded == null) {
				findOrSaveAssociatedObject(t);
				dao.save(t);
			} else {
				list.add(founded);
			}
        }
        return list;
    }

    public List<SyntheseMedicale> findAll() {
        return dao.findAll();
    }

    public List<SyntheseMedicale> findByCriteria(SyntheseMedicaleCriteria criteria) {
        List<SyntheseMedicale> content = null;
        if (criteria != null) {
            SyntheseMedicaleSpecification mySpecification = constructSpecification(criteria);
            if (criteria.isPeagable()) {
                Pageable pageable = PageRequest.of(0, criteria.getMaxResults());
                content = dao.findAll(mySpecification, pageable).getContent();
            } else {
                content = dao.findAll(mySpecification);
            }
        } else {
            content = dao.findAll();
        }
        return content;

    }


    private SyntheseMedicaleSpecification constructSpecification(SyntheseMedicaleCriteria criteria) {
        SyntheseMedicaleSpecification mySpecification =  (SyntheseMedicaleSpecification) RefelexivityUtil.constructObjectUsingOneParam(SyntheseMedicaleSpecification.class, criteria);
        return mySpecification;
    }

    public List<SyntheseMedicale> findPaginatedByCriteria(SyntheseMedicaleCriteria criteria, int page, int pageSize, String order, String sortField) {
        SyntheseMedicaleSpecification mySpecification = constructSpecification(criteria);
        order = (order != null && !order.isEmpty()) ? order : "desc";
        sortField = (sortField != null && !sortField.isEmpty()) ? sortField : "id";
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.fromString(order), sortField);
        return dao.findAll(mySpecification, pageable).getContent();
    }

    public int getDataSize(SyntheseMedicaleCriteria criteria) {
        SyntheseMedicaleSpecification mySpecification = constructSpecification(criteria);
        mySpecification.setDistinct(true);
        return ((Long) dao.count(mySpecification)).intValue();
    }

    public List<SyntheseMedicale> findByConsultationId(Long id){
        return dao.findByConsultationId(id);
    }
    @Transactional
    public int deleteByConsultationId(Long id){
        return dao.deleteByConsultationId(id);
    }
    public long countByConsultationRef(String ref){
        return dao.countByConsultationRef(ref);
    }

	public boolean deleteById(Long id) {
        boolean condition = deleteByIdCheckCondition(id);
        if (condition) {
            dao.deleteById(id);
        }
        return condition;
    }

    public boolean deleteByIdCheckCondition(Long id) {
        return true;
    }

    public void deleteByIdIn(List<Long> ids) {
        //dao.deleteByIdIn(ids);
    }
	
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public int delete(SyntheseMedicale t) {
        int result = 0;
        if (t != null) {
            dao.deleteById(t.getId());
            result = 1;
        }
        return result;
    }



    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<SyntheseMedicale> delete(List<SyntheseMedicale> list) {
		List<SyntheseMedicale> result = new ArrayList();
        if (list != null) {
            for (SyntheseMedicale t : list) {
                int count = delete(t);
				if(count == 0){
					result.add(t);
				}
            }
        }
		return result;
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public SyntheseMedicale create(SyntheseMedicale t) {
        SyntheseMedicale loaded = findByReferenceEntity(t);
        SyntheseMedicale saved;
        if (loaded == null) {
            saved = dao.save(t);
        }else {
            saved = null;
        }
        return saved;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<SyntheseMedicale> create(List<SyntheseMedicale> ts) {
        List<SyntheseMedicale> result = new ArrayList<>();
        if (ts != null) {
            for (SyntheseMedicale t : ts) {
				SyntheseMedicale created = create(t);
                if (created == null)
                    result.add(t);
            }
        }
        return result;
    }

    public SyntheseMedicale findWithAssociatedLists(Long id){
        SyntheseMedicale result = dao.findById(id).orElse(null);
        return result;
    }

	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public List<SyntheseMedicale> update(List<SyntheseMedicale> ts, boolean createIfNotExist) {
        List<SyntheseMedicale> result = new ArrayList<>();
        if (ts != null) {
            for (SyntheseMedicale t : ts) {
                if (t.getId() == null) {
                    dao.save(t);
                } else {
                    SyntheseMedicale loadedItem = dao.findById(t.getId()).orElse(null);
                    if (createIfNotExist && (t.getId() == null || loadedItem == null)) {
                        dao.save(t);
                    } else if (t.getId() != null && loadedItem != null) {
                        dao.save(t);
                    } else {
                        result.add(t);
                    }
                }
            }
        }
        return result;
    }





    public SyntheseMedicale findByReferenceEntity(SyntheseMedicale t){
        return t==null? null : dao.findByRef(t.getRef());
    }
    public void findOrSaveAssociatedObject(SyntheseMedicale t){
        if( t != null) {
            t.setConsultation(consultationService.findOrSave(t.getConsultation()));
        }
    }



    public List<SyntheseMedicale> findAllOptimized() {
        return dao.findAllOptimized();
    }

    @Override
    public List<List<SyntheseMedicale>> getToBeSavedAndToBeDeleted(List<SyntheseMedicale> existingContacts, List<SyntheseMedicale> newContacts) {
        List<SyntheseMedicale> toSave = new ArrayList<>();
        List<SyntheseMedicale> toDelete = new ArrayList<>();

        // Find contacts to save
        for (SyntheseMedicale newContact : newContacts) {
            boolean found = false;
            for (SyntheseMedicale existingContact : existingContacts) {
                if (existingContact.getRef().equals(newContact.getRef())) {
                    // Update existing contact
                    existingContact.setRef(newContact.getRef());
                    existingContact.setDescription(newContact.getDescription());
                    existingContact.setDateSyntheseMedicale(newContact.getDateSyntheseMedicale());
                    toSave.add(existingContact);
                    found = true;
                    break;
                }
            }
            if (!found) {
                // Add new contact
                toSave.add(newContact);
            }
        }

        // Find contacts to delete
        for (SyntheseMedicale existingContact : existingContacts) {
            boolean found = false;
            for (SyntheseMedicale newContact : newContacts) {
                if (existingContact.getRef().equals(newContact.getRef())) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                // Delete existing contact
                toDelete.add(existingContact);
            }
        }

        return Arrays.asList(toSave, toDelete);
    }

    @Override
    public String uploadFile(String checksumOld, String tempUpladedFile, String destinationFilePath) throws Exception {
        return null;
    }

    @Override
    public List<SyntheseMedicale> importExcel(MultipartFile file) {
        return null;
    }








    @Autowired
    private ConsultationMedecinService consultationService ;

    private @Autowired SyntheseMedicaleDao dao;


}
