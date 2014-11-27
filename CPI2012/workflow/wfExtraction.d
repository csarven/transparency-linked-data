;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

;Download data
%1StepExtraction, $[transparencyZIP] <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Downloaded data at $[agencyURL]"
 echo "Workflow step was executed by $[agent] at $date"
 echo "<$[namespace]workflow/$[agency]/extraction/1StepExtraction> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescExtraction
 echo "opmw:correspondsToTemplateProcess <$[namespace]workflow/$[agency]/extraction>." >> $wfDescExtraction
 wget -O $OUTPUT http://files.transparency.org/content/download/533/2213/file/2012_CPI_DataPackage.zip

;Extract data
%2StepExtraction, $[countryCodesCSV] <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Downloaded country Codes"
 echo "Workflow step was executed by $[agent] at $date"
 echo "<$[namespace]workflow/$[agency]/extraction/2StepExtraction> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescExtraction
 echo "opmw:correspondsToTemplateProcess <$[namespace]workflow/$[agency]/extraction>." >> $wfDescExtraction