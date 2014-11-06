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

;Refine country codes
%3StepPreprocessing, refinedCountryCodes.csv <- countryCodes.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/3StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 sed '1d' countryCodes.csv | sort -k 2 -t ',' > refinedCountryCodes.csv 
 echo "Country codes were refined by $[agent] at $date"

;Refine CPI 2012 data
%4StepPreprocessing, refinedCPI2012.csv <- CPI2012_Results.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/4StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 tail -n+3 CPI2012_Results.csv | cut -d',' -f1-2 -f4-4 -f6- | awk '{gsub(/Macedonia/, "FYR Macedonia")}1'| sort -k 2 -t',' > refinedCPI2012.csv
 echo "CPI 2012 was refined by $[agent] at $date"

;Merge Country Codes with TI CSV
%5StepPreprocessing, CPI2012.csv <- refinedCPI2012.csv, refinedCountryCodes.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/3StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "Data merged by $[agent] at $date"
 join -t',' -1 2 -2 2 refinedCountryCodes.csv refinedCPI2012.csv > CPI2012.csv

;Refine CPI data
%6StepPreprocessing, CPI2012_refined.csv <- CPI2012.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/4StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 awk '{gsub(/,0/, ",null")}1' CPI2012.csv > temp.csv
 awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
 awk '{gsub(/null/, "")}1' temp2.csv > CPI2012_refined.csv
 echo "refArea,region,rank,score,surveysused,standardU,percentile90lower,percentile90upper,min,max,africanDevelopmentBankcountryPolicyAndInstitutionalAssessmentGovernanceRatings,bertelsmannFoundationSustainableGovernanceIndicators,bertelsmannFoundationTransformationIndex,internationalInstituteForManagementDevelopmentWorldCompetitivenessYearbook,politicalRiskServicesInternationalCountryRiskGuide,worldBankCountryPerformanceAndInstitutionalAssessment,worldEconomicForumExecutiveOpinionSurvey,worldJusticeProjectRuleOfLawIndex,economistIntelligenceUnitCountryRiskAssessment,globalInsightCountryRiskRatings,politicalAndEconomicRiskConsultancyAsianIntelligence,transparencyInternationalBribePayersSurvey,freedomHouseNationsInTransit" > temp_CPI2012.csv
 cat CPI2012_refined.csv >> temp_CPI2012.csv
 mv temp_CPI2012.csv CPI2012_refined.csv
 rm temp2.csv
 rm temp.csv
 echo "Data was refined by $[agent] at $date"

;Create tarql file for mapping
%7StepPreprocessing, $[agency].tarql <- CPI2012_refined.csv
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/5StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "tarql file was created by $[agent] at $date"

;Create queries for Jena Fuseki Server
%8StepPreprocessing, firstquery.txt, secondquery.txt <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "<$[namespace]workflow/$[agency]/preprocessing/6StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
 echo "p-plan:isStepOfPlan <$[namespace]workflow/$[agency]/preprocessing>." >> $wfDescPreprocessing
 echo "Query-files for were created by $[agent] at $date"