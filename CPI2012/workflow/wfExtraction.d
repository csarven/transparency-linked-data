;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

;Download data
%extractRawData, $[transparencyZIP] <-
 echo "Downloaded data from $[agencyURL]"
 wget -O $OUTPUT http://files.transparency.org/content/download/533/2213/file/2012_CPI_DataPackage.zip
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"transparencyZIP\">http://transparency.270a.info/data/cpi-data/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/extraction/cpi-data>
 a opmw:WorkflowTemplateProcess ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription; 
 echo "<http://transparency.270a.info/workflow/cpi-data-zip>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/extraction/cpi-data> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/extraction/cpi-data/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/extraction/cpi-data> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/cpi-data/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/extraction/cpi-data/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/cpi-data-zip> ;
 .
 " >> $workflowExecutionDescription;


;Extract country codes
%extractCountryCodes, $[countryCodes] <-
 wget -O $OUTPUT "http://transparency.270a.info/sparql?query=%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+wgs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3E%0D%0APREFIX+dbo%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0APREFIX+dbp%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbr%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%0D%0APREFIX+sdmx%3A+%3Chttp%3A%2F%2Fpurl.org%2Flinked-data%2Fsdmx%23%3E%0D%0APREFIX+sdmx-attribute%3A+%3Chttp%3A%2F%2Fpurl.org%2Flinked-data%2Fsdmx%2F2009%2Fattribute%23%3E%0D%0APREFIX+sdmx-dimension%3A+%3Chttp%3A%2F%2Fpurl.org%2Flinked-data%2Fsdmx%2F2009%2Fdimension%23%3E%0D%0APREFIX+sdmx-measure%3A+%3Chttp%3A%2F%2Fpurl.org%2Flinked-data%2Fsdmx%2F2009%2Fmeasure%23%3E%0D%0APREFIX+qb%3A+%3Chttp%3A%2F%2Fpurl.org%2Flinked-data%2Fcube%23%3E%0D%0APREFIX+year%3A+%3Chttp%3A%2F%2Freference.data.gov.uk%2Fid%2Fyear%2F%3E%0D%0APREFIX+void%3A+%3Chttp%3A%2F%2Frdfs.org%2Fns%2Fvoid%23%3E%0D%0A%0D%0APREFIX+wb%3A+%3Chttp%3A%2F%2Fworldbank.270a.info%2F%3E%0D%0APREFIX+wbc%3A+%3Chttp%3A%2F%2Fworldbank.270a.info%2Fclassification%2F%3E%0D%0APREFIX+wbcountry%3A+%3Chttp%3A%2F%2Fworldbank.270a.info%2Fclassification%2Fcountry%2F%3E%0D%0APREFIX+wbindicator%3A+%3Chttp%3A%2F%2Fworldbank.270a.info%2Fclassification%2Findicator%2F%3E%0D%0APREFIX+wbp%3A+%3Chttp%3A%2F%2Fworldbank.270a.info%2Fproperty%2F%3E%0D%0A%0D%0APREFIX+transparency%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2F%3E%0D%0APREFIX+classification%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fclassification%2F%3E%0D%0APREFIX+country%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fclassification%2Fcountry%2F%3E%0D%0APREFIX+source%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fclassification%2Fsource%2F%3E%0D%0APREFIX+property%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fproperty%2F%3E%0D%0A%0D%0APREFIX+stats%3A+%3Chttp%3A%2F%2Fstats.270a.info%2Fvocab%23%3E%0D%0A%0D%0APREFIX+d-cpi%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fdataset%2Fcorruption-perceptions-index%3E%0D%0APREFIX+d-sources%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fdataset%2Fsources%3E%0D%0A%0D%0A%23USE+THESE+GRAPHS+%3A%29%0D%0APREFIX+g-void%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fgraph%2Fvoid%3E%0D%0APREFIX+g-meta%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fgraph%2Fmeta%3E%0D%0APREFIX+g-cpi%3A+%3Chttp%3A%2F%2Ftransparency.270a.info%2Fgraph%2Fcorruption-perceptions-index%3E%0D%0A%0D%0A%0D%0Aselect+%3Fnotation+%3Fname+WHERE%7B%0D%0A%3Fcountry+a+dbo%3ACountry.%0D%0A%3Fcountry+skos%3Anotation+%3Fnotation.%0D%0A%3Fcountry+skos%3AprefLabel+%3Fname.%0D%0A%7D&default-graph-uri=&output=csv&stylesheet=&force-accept=text%2Fplain";
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"countryCodes\">http://transparency.270a.info/data/country-codes/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/extraction/country-codes>
 a opmw:WorkflowTemplateProcess ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription; 
 echo "<http://transparency.270a.info/workflow/country-codes>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/extraction/country-codes> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/extraction/country-codes/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/extraction/country-codes> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/country-codes/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/extraction/country-codes/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/country-codes> ;
 .
 " >> $workflowExecutionDescription;