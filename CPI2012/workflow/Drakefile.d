;Abstract workflow file
%include configDrakeFile.d

%wfSetup, $[wfDescMainProcess] <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
 @prefix prov: <http://www.w3.org/ns/prov#> . 
 @prefix opmv: <http://purl.org/net/opmv/ns#> . 
 @prefix opmw: <http://www.opmw.org/ontology/> ." > $workflowExecutionDescription
 printf "\n" >> $abstractWorkflowDescription;
 echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
 @prefix prov: <http://www.w3.org/ns/prov#> . 
 @prefix opmv: <http://purl.org/net/opmv/ns#> . 
 @prefix opmw: <http://www.opmw.org/ontology/> ." > $abstractWorkflowDescription
 echo "<$workflowTemplate/> a opmw:WorkflowTemplate ;
 rdfs:label \"Workflow $[agencyLabel]\"@en ;
 dc:creator <$[agent]> ;
 dc:contributor <$[agent]> ;
 dc:createdInWorkflowSystem <https://github.com/Factual/drake#clone-the-project> ;
 ." >> $abstractWorkflowDescription;

;Extract data from the source
%wfExtraction <- %wfSetup
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start extracting data from $[agency]"
%call wfExtraction.d

;Preprecess retrieved data
%wfPreprocessing  <- %wfExtraction
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start preprocessing"
%call wfPreprocessing.d

;Mapp preprocessed data
%wfMapping <- %wfPreprocessing
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Start mapping"
%call wfMapping.d