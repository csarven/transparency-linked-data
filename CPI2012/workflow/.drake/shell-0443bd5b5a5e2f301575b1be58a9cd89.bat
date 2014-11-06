date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/4StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
awk '{gsub(/0\.0/, ",null")}1' CPI2012.csv > temp.csv
awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
awk '{gsub(/null/, "")}1' temp2.csv > CPI2012_refined.csv
echo "refArea,region,rank,score,surveysused,standardU,percentile90lower,percentile90upper,min,max,africanDevelopmentBankcountryPolicyAndInstitutionalAssessmentGovernanceRatings,bertelsmannFoundationSustainableGovernanceIndicators,bertelsmannFoundationTransformationIndex,internationalInstituteForManagementDevelopmentWorldCompetitivenessYearbook,politicalRiskServicesInternationalCountryRiskGuide,worldBankCountryPerformanceAndInstitutionalAssessment,worldEconomicForumExecutiveOpinionSurvey,worldJusticeProjectRuleOfLawIndex,economistIntelligenceUnitCountryRiskAssessment,globalInsightCountryRiskRatings,politicalAndEconomicRiskConsultancyAsianIntelligence,transparencyInternationalBribePayersSurvey,freedomHouseNationsInTransit" > temp_CPI2012.csv
cat CPI2012_refined.csv >> temp_CPI2012.csv
mv temp_CPI2012.csv CPI2012_refined.csv
echo "Data was refined by Renato Stauffer at $date"
