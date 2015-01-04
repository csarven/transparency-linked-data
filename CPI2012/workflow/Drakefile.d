;Abstract workflow file
%include configDrakeFile.d

%wfSetup  <-
 date=`date +%Y%m%dT%H%M%S%Z`;
 dateFormated=`date --utc +%FT%TZ`;
 account="http://transparency.270a.info/account/$date";
 echo '<?xml version="1.0"?>
 <rdf:RDF
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:skos="http://www.w3.org/2004/02/skos/core#/"
    xmlns:opmw="http://www.opmw.org/ontology/"
    xmlns:opmo="http://openprovenance.org/model/opmo#"
    xmlns:sdmx-dimension="http://purl.org/linked-data/sdmx/2009/dimension#">' >../data/config.rdf;
 echo "<rdf:Description rdf:about=\"/config/account\">
        <opmo:account>http://transparency.270a.info/account/$date</opmo:account>
    </rdf:Description>\n" >> ../data/config.rdf;
 echo "</rdf:RDF>" >> ../data/config.rdf;
 echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
 @prefix prov: <http://www.w3.org/ns/prov#> . 
 @prefix opmv: <http://purl.org/net/opmv/ns#> . 
 @prefix opmw: <http://www.opmw.org/ontology/> .
 @prefix opmo: <http://openprovenance.org/model/opmo#> .
 " > $workflowExecutionDescription;
 echo "<http://transparency.270a.info/account/$date> 
 a opmw:WorkflowExecutionAccount ;
 rdfs:label \"Workflow execution from $dateFormated\"@en ;
 opmw:executedInWorkflowSystem <https://github.com/Factual/drake> ;
 opmw:hasStartTime \"$dateFormated\"^^xsd:dateTime ;
 opmw:hasEndTime XXXENDTIMEXXX^^xsd:dateTime ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow/> ;
 .
 " >> $workflowExecutionDescription;
 echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
 @prefix prov: <http://www.w3.org/ns/prov#> . 
 @prefix opmv: <http://purl.org/net/opmv/ns#> . 
 @prefix opmw: <http://www.opmw.org/ontology/> .
 @prefix dc:  <http://purl.org/dc/terms/> .
 " > $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/> a opmw:WorkflowTemplate ;
 rdfs:label \"Workflow $[agencyLabel]\"@en ;
 dc:creator <$[agent]> ;
 dc:contributor <$[agent]> ;
 dc:createdInWorkflowSystem <https://github.com/Factual/drake#clone-the-project> ;
 ." >> $abstractWorkflowDescription;

;Extract data from the source
%wfExtraction <- %wfSetup
 date=`date +%Y%m%dT%H%M%S%Z`;
 echo "Start extracting data from $[agency]"
%call wfExtraction.d

;Preprecess retrieved data
%wfPreprocessing  <- %wfExtraction
 date=`date +%Y%m%dT%H%M%S%Z`;
 echo "Start preprocessing"
%call wfPreprocessing.d

;Mapp preprocessed data
%wfMapping <- %wfPreprocessing
 date=`date +%Y%m%dT%H%M%S%Z`;
 echo "Start mapping"
%call wfMapping.d

;clean up
%wfCleanUp <-
 dateFormated=`date --utc +%FT%TZ`;
 sed -i "s/opmw:hasEndTime XXXENDTIMEXXX^^xsd:dateTime ;/opmw:hasEndTime \"$dateFormated\"^^xsd:dateTime ;/" $workflowExecutionDescription;