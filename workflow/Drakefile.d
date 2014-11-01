;Abstract workflow file
%include configDrakeFile.d

%wfSetup, $[wfDescMainProcess] <-
 echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> ." > $[wfDescMainProcess]
 echo "@prefix p-plan: <http://purl.org/net/p-plan#> ." >> $[wfDescMainProcess]
 echo "@prefix ao: <http://purl.org/ao/> ." >> $[wfDescMainProcess]
 echo "@prefix ore: <http://www.openarchives.org/ore/terms/> ." >> $[wfDescMainProcess]
 echo "@prefix dct: <http://purl.org/dc/terms/> ." >> $[wfDescMainProcess]
 echo "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> ." >> $[wfDescMainProcess]
 echo "@prefix foaf: <http://xmlns.com/foaf/0.1/> ." >> $[wfDescMainProcess]
 echo "@prefix rdfg: <http://www.w3.org/2004/03/trix/rdfg-1/> ." >> $[wfDescMainProcess]
 echo "@prefix prov: <http://www.w3.org/ns/prov#> ." >> $[wfDescMainProcess]
 printf "\n" >> $[wfDescMainProcess]
 echo "<$[namespace]workflow/$[agency]> a p-plan:Plan;" >> $[wfDescMainProcess]
 echo 'rdfs:label "Workflow $[agencyLabel]".' >> $[wfDescMainProcess]

;Inspection of the data to be captured
%wfInspection, $[wfDescInspection] <-
 echo "Start inspecting data from $[agency]"
 echo "<$[namespace]workflow/$[agency]/inspection> a p-plan:MultiStep;" > $wfDescInspection
 echo "p-plan:isDecomposedAsPlan <$[namespace]workflow/$[agency]>." >> $wfDescInspection
%call inspection/wfInspection.d

;Extract data from the source
%wfExtraction, $[wfDescExtraction] <-
 echo "Start extracting data from $[agency]"
 echo "<$[namespace]workflow/$[agency]/extraction a p-plan:MultiStep;>" > $wfDescExtraction
 echo "p-plan:isDecomposedAsPlan <$[namespace]workflow/$[agency]>." >> $wfDescExtraction
%call extraction/wfExtraction.d

;Preprecess retrieved data
%wfPreprocessing, $[wfPreprocessingSteps] <-
 echo "Start preprocessing"
 echo "<$[namespace]workflow/$[agency]/preprocessing a p-plan:MultiStep;>" > $wfDescPreprocessing
 echo "p-plan:isDecomposedAsPlan <$[namespace]workflow/$[agency]>." >> $wfDescPreprocessing
%call preprocessing/wfPreprocessing.d

;Mapp preprocessed data
%wfMapping, $[wfDescMapping] <-
 echo "Start mapping"
 echo "<$[namespace]workflow/$[agency]/mapping a p-plan:MultiStep;>" > $wfDescMapping
 echo "p-plan:isDecomposedAsPlan <$[namespace]workflow/$[agency]>." >> $wfDescMapping
%call mapping/wfMapping.d

;Clean up
%wfCleanup <-
 cat $wfDescInspection >> $wfDescMainProcess
 printf "\n" >> $[wfDescMainProcess]
 cat $wfDescExtraction >> $wfDescMainProcess
 printf "\n" >> $[wfDescMainProcess]
 cat $wfDescPreprocessing >> $wfDescMainProcess
 printf "\n" >> $[wfDescMainProcess]
 cat $wfDescMapping >> $wfDescMainProcess