;Abstract workflow file
%include configDrakeFile.d

%wfSetup, $[wfDescMainProcess] <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> ." > $[wfDescMainProcess]
 echo "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> ." >> $[wfDescMainProcess]
 echo "@prefix prov: <http://www.w3.org/ns/prov#> ." >> $[wfDescMainProcess]
 echo "@prefix opmv: <http://purl.org/net/opmv/ns#> ." >> $[wfDescMainProcess]
 echo "@prefix opmw: <http://www.opmw.org/ontology/> ." >> $[wfDescMainProcess]
 printf "\n" >> $[wfDescMainProcess]
 echo "<$[namespace]workflow/$[agency]> a opmw:WorkflowTemplate ;" >> $[wfDescMainProcess]
 echo 'rdfs:label "Workflow $[agencyLabel]" ;' >> $[wfDescMainProcess]
 echo 'dc:contributor <http://renatostauffer.ch> ;' >> $[wfDescMainProcess]
 echo 'dc:creator <http://renatostauffer.ch> ;' >> $[wfDescMainProcess]
 echo 'dc:contributor <http://renatostauffer.ch> ;' >> $[wfDescMainProcess]
 echo 'dc:createdInWorkflowSystem <https://github.com/Factual/drake#clone-the-project> ;' >> $[wfDescMainProcess]
 echo 'opmw:versionNumber "1"^^xsd:int .' >> $[wfDescMainProcess]
 printf "\n" >> $[wfDescMainProcess]

;Inspection of the data to be captured
%wfInspection, $[wfDescInspection] <- %wfSetup
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start inspecting data from $[agency]"
 echo "<$[namespace]workflow/$[agency]/inspection> a opmw:WorkflowTemplateProcess;" > $wfDescInspection
 echo "opmw:isStepOfTemplate <$[namespace]workflow/$[agency]>;" >> $wfDescInspection
 echo "opmv:wasTriggeredBy <$[namespace]workflow/$[agency]>." >> $wfDescInspection
%call wfInspection.d

;Extract data from the source
%wfExtraction, $[wfDescExtraction] <- %wfInspection
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start extracting data from $[agency]"
 echo "<$[namespace]workflow/$[agency]/extraction> a opmw:WorkflowTemplateProcess;" > $wfDescExtraction
 echo "opmw:isStepOfTemplate <$[namespace]workflow/$[agency]>;" >> $wfDescExtraction
 echo "opmv:wasTriggeredBy <$[namespace]workflow/$[agency]/inspection>." >> $wfDescExtraction
%call wfExtraction.d

;Preprecess retrieved data
%wfPreprocessing, $[wfPreprocessingSteps] <- %wfExtraction
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start preprocessing"
 echo "<$[namespace]workflow/$[agency]/preprocessing> a opmw:WorkflowTemplateProcess;" > $wfDescPreprocessing
 echo "opmw:isStepOfTemplate <$[namespace]workflow/$[agency]>;" >> $wfDescPreprocessing
 echo "opmv:wasTriggeredBy <$[namespace]workflow/$[agency]/extraction>." >> $wfDescPreprocessing
%call wfPreprocessing.d

;Mapp preprocessed data
%wfMapping, $[wfDescMapping] <- %wfPreprocessing
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start mapping"
 echo "<$[namespace]workflow/$[agency]/mapping> a opmw:WorkflowTemplateProcess;" > $wfDescMapping
 echo "opmw:isStepOfTemplate <$[namespace]workflow/$[agency]>;" >> $wfDescMapping
 echo "opmv:wasTriggeredBy <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescMapping
%call wfMapping.d

;Clean up
%wfCleanup <- %wfMapping
 cat $wfDescInspection >> $wfDescMainProcess
 printf "\n" >> $[wfDescMainProcess]
 cat $wfDescExtraction >> $wfDescMainProcess
 printf "\n" >> $[wfDescMainProcess]
 cat $wfDescPreprocessing >> $wfDescMainProcess
 printf "\n" >> $[wfDescMainProcess]
 cat $wfDescMapping >> $wfDescMainProcess
%call wfCleanup.d