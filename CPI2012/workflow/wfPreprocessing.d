;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

;Unzip data
%unzipCPIData <- $[transparencyZIP]
 echo "Unzipp raw CPI$[year] data"
 unzip $INPUT -d $[data]
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifact=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='transparencyZIP']/text()" $config);
 echo "
 <http://transparency.270a.info/workflow/preprocessing/unzip-cpi-data>
 a opmw:WorkflowTemplateProcess ;
 opmw:uses <http://transparency.270a.info/workflow/cpi-data-zip> ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription; 
 echo "<http://transparency.270a.info/workflow/data-bundle-cpi>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy  <http://transparency.270a.info/workflow/preprocessing/unzip-cpi-data> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/preprocessing/unzip-cpi-data/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/preprocessing/unzip-cpi-data> ;
 opmv:used <$artifact> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/data-bundle-cpi/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/preprocessing/unzip-cpi-data/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/data-bundle-cpi> ;
 .
 " >> $workflowExecutionDescription;

;Create CSV
%convertExceltoCSV, $[CPI_Results] <-
 ssconvert $[data]/$[year]_CPI_DataPackage/CPI$[year]_Results.xls $OUTPUT
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"CPI_Results\">http://transparency.270a.info/data/cpi-xls/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/preprocessing/xls-csv>
 a opmw:WorkflowTemplateProcess ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription; 
 echo "<http://transparency.270a.info/workflow/cpi-xls>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/preprocessing/xls-csv> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/preprocessing/xls-csv/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/preprocessing/xls-csv>;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/cpi-xls/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/preprocessing/xls-csv/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/cpi-xls> ;
 .
 " >> $workflowExecutionDescription;

;Sort country codes
%sortCountryCodes, $[sortedCountryCodes] <- $[countryCodes]
 sed '1d' $[countryCodes] | sort -k 2 -t ',' > $[sortedCountryCodes]
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifact=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='countryCodes']/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"sortedCountryCodes\">http://transparency.270a.info/data/sorted-country-codes/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/preprocessing/sort-country-codes>
 a opmw:WorkflowTemplateProcess ;
 opmw:uses <http://transparency.270a.info/workflow/country-codes> ; 
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/sorted-country-codes>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/preprocessing/sort-country-codes> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
  " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/preprocessing/sort-country-codes/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess  <http://transparency.270a.info/workflow/preprocessing/sort-country-codes>;
 opmv:used <$artifact> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/sorted-country-codes/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/preprocessing/sort-country-codes/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/sorted-country-codes> ;
 .
 " >> $workflowExecutionDescription;

;Sort CPI data
%refineCPIData, $[refinedCPIData] <- $[CPI_Results]
 tail -n+3 $INPUT | awk -F"," '{print $1 "," $2 "," $4 "," $6 "," $7 "," $8 "," $9 "," $10 "," $11 "," $12 "," $13 "," $14 "," $15 "," $16 "," $17 "," $18 "," $19 "," $20 "," $21 "," $22 "," $23 "," $24}' | sed "s/\"//g" | awk '{gsub(/Macedonia/, "FYR Macedonia")}1' | sort -k 2 -t',' > $[refinedCPIData]
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifact=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='CPI_Results']/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"refinedCPIData\">http://transparency.270a.info/data/sorted-cpi-data/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/preprocessing/sort-cpi-data>
 a opmw:WorkflowTemplateProcess ;
 opmw:uses <http://transparency.270a.info/workflow/cpi-xls> ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/sorted-cpi-data>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/preprocessing/sort-cpi-data> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
  " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/preprocessing/sort-cpi-data/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/preprocessing/sort-cpi-data>;
 opmv:used <$artifact> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/sorted-cpi-data/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/preprocessing/sort-cpi-data/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/sorted-cpi-data> ;
 .
 " >> $workflowExecutionDescription;

;Remove windows line terminator symbols
%removeCRL <- $[refinedCPIData], $[sortedCountryCodes]
 dos2unix $[refinedCPIData]
 dos2unix $[sortedCountryCodes]
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifactRefinedCPI=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='refinedCPIData']/text()" $config);
 artifactSortedCountryCodes=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='sortedCountryCodes']/text()" $config);
 echo "
 <http://transparency.270a.info/workflow/preprocessing/remove-crlf>
 a opmw:WorkflowTemplateProcess ;
 opmw:uses <http://transparency.270a.info/workflow/sorted-cpi-data>, <http://transparency.270a.info/workflow/sorted-country-codes>; 
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
  echo "<http://transparency.270a.info/process/preprocessing/remove-crlf/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/preprocessing/sort-cpi-data> ;
 opmv:used <$artifactRefinedCPI>, <$artifactSortedCountryCodes> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;

;Merge Country Codes with TI CSV
%mergeCountryCodesWithCPI, $[mergedCPI] <- $[refinedCPIData], $[sortedCountryCodes]
 join -t',' -1 2 -2 2 $[sortedCountryCodes] $[refinedCPIData] > $[mergedCPI]
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifactRefinedCPI=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='refinedCPIData']/text()" $config);
 artifactSortedCountryCodes=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='sortedCountryCodes']/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"mergedCPI\">http://transparency.270a.info/data/joined-cpi-data/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/preprocessing/join-cpi-data-with-country-codes>
 a opmw:WorkflowTemplateProcess ;
 opmw:uses <http://transparency.270a.info/workflow/sorted-cpi-data>, <http://transparency.270a.info/workflow/sorted-country-codes>; 
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/joined-cpi-data>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/preprocessing/join-cpi-data-with-country-codes> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
  " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/preprocessing/join-cpi-data-with-country-codes/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/preprocessing/join-cpi-data-with-country-codes> ;
 opmv:used <$artifactRefinedCPI>, <$artifactSortedCountryCodes> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/joined-cpi-data/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/preprocessing/join-cpi-data-with-country-codes/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/joined-cpi-data> ;
 .
 " >> $workflowExecutionDescription;

;Refine CPI data
%refineMergedCPI, $[refinedMergedCPI] <- $[mergedCPI]
 awk '{gsub(/,0/, ",null")}1' $[mergedCPI] > temp.csv
 awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
 awk '{gsub(/null/, "")}1' temp2.csv > $[refinedMergedCPI]
 echo "refArea,region,rank,score,surveysused,standardU,percentile90lower,percentile90upper,min,max,africanDevelopmentBankcountryPolicyAndInstitutionalAssessmentGovernanceRatings,bertelsmannFoundationSustainableGovernanceIndicators,bertelsmannFoundationTransformationIndex,internationalInstituteForManagementDevelopmentWorldCompetitivenessYearbook,politicalRiskServicesInternationalCountryRiskGuide,worldBankCountryPerformanceAndInstitutionalAssessment,worldEconomicForumExecutiveOpinionSurvey,worldJusticeProjectRuleOfLawIndex,economistIntelligenceUnitCountryRiskAssessment,globalInsightCountryRiskRatings,politicalAndEconomicRiskConsultancyAsianIntelligence,transparencyInternationalBribePayersSurvey,freedomHouseNationsInTransit" > temp_CPI.csv
 cat $[refinedMergedCPI] >> temp_CPI.csv
 mv temp_CPI.csv $[refinedMergedCPI]
 rm temp2.csv
 rm temp.csv
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifact=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='mergedCPI']/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"refinedMergedCPI\">http://transparency.270a.info/data/refined-cpi-data/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/preprocessing/refine-cpi-data>
 a opmw:WorkflowTemplateProcess ;
 opmw:uses <http://transparency.270a.info/workflow/joined-cpi-data> ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/refined-cpi-data>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/preprocessing/refine-cpi-data> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription;
  echo "<http://transparency.270a.info/process/preprocessing/refine-cpi-data/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/preprocessing/refine-cpi-data> ;
 opmv:used <$artifact> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/refined-cpi-data/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/preprocessing/refine-cpi-data/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/refined-cpi-data> ;
 .
 " >> $workflowExecutionDescription;