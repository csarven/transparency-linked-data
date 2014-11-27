date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/6StepPreprocessing> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescPreprocessing
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
awk '{gsub(/,0/, ",null")}1' CPI2012.csv > temp.csv
awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
awk '{gsub(/null/, "")}1' temp2.csv > CPI2012_refined.csv
echo "refArea,region,rank,score,surveysused,standardU,percentile90lower,percentile90upper,min,max,africanDevelopmentBankcountryPolicyAndInstitutionalAssessmentGovernanceRatings,bertelsmannFoundationSustainableGovernanceIndicators,bertelsmannFoundationTransformationIndex,internationalInstituteForManagementDevelopmentWorldCompetitivenessYearbook,politicalRiskServicesInternationalCountryRiskGuide,worldBankCountryPerformanceAndInstitutionalAssessment,worldEconomicForumExecutiveOpinionSurvey,worldJusticeProjectRuleOfLawIndex,economistIntelligenceUnitCountryRiskAssessment,globalInsightCountryRiskRatings,politicalAndEconomicRiskConsultancyAsianIntelligence,transparencyInternationalBribePayersSurvey,freedomHouseNationsInTransit" > temp_CPI2012.csv
cat CPI2012_refined.csv >> temp_CPI2012.csv
mv temp_CPI2012.csv CPI2012_refined.csv
rm temp2.csv
rm temp.csv
echo "Data was refined by Renato Stauffer at $date"
