%include configDrakeFile.d

;Inspect data
%1StepInspection <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/inspection/1StepInspection> a p-plan:Step;" >> "$[wfDescInspection]"
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/inspection>." >> "$[wfDescInspection]"
 echo "Inspected data from $[agencyLabel]"
 echo "Workflow step was executed by $[agent] at $date"