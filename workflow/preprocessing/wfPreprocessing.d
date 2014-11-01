;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

;Unzip data
%1StepPreprocessing, CPI2012_Results.xls <- transparency.zip
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Unzipped data"
 echo "<$[namespace]workflow/$[agency]/preprocessing/1StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "Workflow step was executed by $agent at $date"
 unzip $INPUT

;Create CSV
%2StepPreprocessing, CPI2012_Results.csv <- CPI2012_Results.xls
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/2StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "Created CSV by $[agent] at $date"

;Merge Country Codes with TI CSV
%3StepPreprocessing, CPI2012.csv <- CPI2012_Results.csv, countryCodes.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/3StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "Data merged by $[agent] at $date"
 echo "Used Tool: Google Refine"

;Refine CPI data
%4StepPreprocessing, CPI2012_refined.csv <- CPI2012.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/4StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 awk '{gsub(/,0/, ",null")}1' CPI2012.csv > temp.csv
 awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
 rm temp.csv
 awk '{gsub(/null\./, "")}1' temp2.csv > CPI2012_refined.csv
 rm temp2.csv
 echo "Data was refined by $[agent] at $date"

;Create tarql file for mapping
%5StepPreprocessing, $[agency].tarql <- CPI2012_refined.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/5StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "tarql file was created by $[agent] at $date"

;Create queries for Jena Fuseki Server
%6StepPreprocessing, firstquery.txt, secondquery.txt <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/6StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "Query-files for were created by $[agent] at $date"