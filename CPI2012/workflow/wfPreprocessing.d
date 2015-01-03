;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

;Unzip data
%unzipCPIData <- $[transparencyZIP]
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Unzipp raw CPI$[year] data"
 echo "Workflow step was executed by $agent at $date"
 unzip $INPUT -d $[data]

;Create CSV
%convertExceltoCSV, $[CPI_Results] <-
 date=`date +%Y-%m-%d:%H:%M:%S`
 ssconvert $[data]/$[year]_CPI_DataPackage/CPI$[year]_Results.xls $OUTPUT
 echo "Created CSV by $[agent] at $date"

;Sort country codes
%sortCountryCodes, $[sortedCountryCodes] <- $[countryCodes]
 date=`date +%Y-%m-%d:%H:%M:%S`
 sed '1d' $[countryCodes] | sort -k 2 -t ',' > $[sortedCountryCodes]
 echo "Country codes were refined by $[agent] at $date"

;Refine CPI data
%refineCPIData, $[refinedCPIData] <- $[CPI_Results]
 date=`date +%Y-%m-%d:%H:%M:%S`
 tail -n+3 $INPUT | awk -F"," '{print $1 "," $2 "," $4 "," $6 "," $7 "," $8 "," $9 "," $10 "," $11 "," $12 "," $13 "," $14 "," $15 "," $16 "," $17 "," $18 "," $19 "," $20 "," $21 "," $22 "," $23 "," $24}' | sed "s/\"//g" | awk '{gsub(/Macedonia/, "FYR Macedonia")}1' | sort -k 2 -t',' > $[refinedCPIData]
 echo "CPI $[year] was refined by $[agent] at $date"

;Remove windows line terminator symbols
%removeCRL <- $[refinedCPIData], $[sortedCountryCodes]
 dos2unix $[refinedCPIData]
 dos2unix $[sortedCountryCodes]

;Merge Country Codes with TI CSV
%mergeCountryCodesWithCPI, $[mergedCPI] <- $[refinedCPIData], $[sortedCountryCodes]
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Data merged by $[agent] at $date"
 join -t',' -1 2 -2 2 $[sortedCountryCodes] $[refinedCPIData] > $[mergedCPI]

;Refine CPI data
%refineMergedCPI, $[refinedMergedCPI] <- $[mergedCPI]
 date=`date +%Y-%m-%d:%H:%M:%S`
 awk '{gsub(/,0/, ",null")}1' $[mergedCPI] > temp.csv
 awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
 awk '{gsub(/null/, "")}1' temp2.csv > $[refinedMergedCPI]
 echo "refArea,region,rank,score,surveysused,standardU,percentile90lower,percentile90upper,min,max,africanDevelopmentBankcountryPolicyAndInstitutionalAssessmentGovernanceRatings,bertelsmannFoundationSustainableGovernanceIndicators,bertelsmannFoundationTransformationIndex,internationalInstituteForManagementDevelopmentWorldCompetitivenessYearbook,politicalRiskServicesInternationalCountryRiskGuide,worldBankCountryPerformanceAndInstitutionalAssessment,worldEconomicForumExecutiveOpinionSurvey,worldJusticeProjectRuleOfLawIndex,economistIntelligenceUnitCountryRiskAssessment,globalInsightCountryRiskRatings,politicalAndEconomicRiskConsultancyAsianIntelligence,transparencyInternationalBribePayersSurvey,freedomHouseNationsInTransit" > temp_CPI.csv
 cat $[refinedMergedCPI] >> temp_CPI.csv
 mv temp_CPI.csv $[refinedMergedCPI]
 rm temp2.csv
 rm temp.csv
 echo "Data was refined by $[agent] at $date"