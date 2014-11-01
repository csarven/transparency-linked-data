;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

%1StepMapping, turtleTransparency.ttl <- CPI2012_refined.csv, transparency.tarql
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/mapping/1StepMapping> a p-plan:Step;" >> $wfDescMapping
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/mapping>." >> $wfDescMapping
 echo "Mapping step was executed by $agent at $date"
 tarql $[agency].tarql > turtleTransparency.ttl

%2StepMapping, turtleTransparency_final.ttl <- firstQuery.txt, secondQuery.txt
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/mapping/2StepMapping> a p-plan:Step;" >> $wfDescMapping
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/mapping>." >> $wfDescMapping
 echo "Mapping step was executed by $agent at $date"
 echo "Jena Fuseki was used to crate turtle file named $[OUTPUT]"