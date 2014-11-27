;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

%1StepMapping, $[turtleTransparency] <- $[CPI2012_refinedCSV], transparency.tarql
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/mapping/1StepMapping> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescMapping
 echo "opmw:correspondsToTemplateProcess <$[namespace]workflow/$[agency]/mapping>." >> $wfDescMapping
 echo "Mapping step was executed by $agent at $date"
 tarql $[agency].tarql > $[turtleTransparency]

;Create local store for Jena Fuseki Server
%2StepMapping <- $[turtleTransparency]
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/mapping/2StepMapping> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescMapping
 echo "opmw:correspondsToTemplateProcess <$[namespace]workflow/$[agency]/mapping>." >> $wfDescMapping
 echo "Create local store in Jena Fuseki Server and import turtleTransparency.ttl into the store for querying."

%3StepMapping, $[turtleTransparency_final] <- firstQuery.txt, secondQuery.txt
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/mapping/3StepMapping> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescMapping
 echo "opmw:correspondsToTemplateProcess <$[namespace]workflow/$[agency]/mapping>." >> $wfDescMapping
 echo "Mapping step was executed by $agent at $date"
 echo "Jena Fuseki was used to crate the finale turtle file named $[OUTPUT]"