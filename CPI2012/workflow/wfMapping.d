;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

%mappCSV2RDF, $[rawTurtle] <- $[refinedMergedCPI]
 tarql $[agency].tarql.txt > $[rawTurtle]
 sed "s/{year}/$[year]/g" template.tarql.txt > $[agency].tarql.txt
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifact=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='refinedMergedCPI']/text()" $config);
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"rawTurtle\">http://transparency.270a.info/data/cpi-turtle/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/mapping/csv-rdf>
 a opmw:WorkflowTemplateProcess ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/cpi-turtle>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/mapping/csv-rdf> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
 " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/mapping/csv-rdf/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/mapping/csv-rdf> ;
 opmv:used <$artifact> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/cpi-turtle/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/mapping/csv-rdf/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/cpi-turtle> ;
 .
 " >> $workflowExecutionDescription;

;Create local store for Jena Fuseki Server
%jenaQuery, $[turtleTransparency] <- $[rawTurtle]
 date=`date +%Y%m%dT%H%M%S%Z`;
 account=$(xpath -e "//rdf:Description[1]/opmo:account/text()" $config);
 artifact=$(xpath -e "//opmw:WorkflowExecutionArtifact[@name='rawTurtle']/text()" $config);
 sed "s/{year}/$[year]/g" template.first.query.txt > firstQuery.txt
 sed "s/{year}/$[year]/g" template.second.query.txt > secondQuery.txt
 sh apache-jena-2.12.1/bin/arq --data $[rawTurtle] --query firstQuery.txt > $[turtleTransparency]
 sh apache-jena-2.12.1/bin/arq --data $[rawTurtle] --query secondQuery.txt >> $[turtleTransparency]
 sed -i '/@prefix/d' $[turtleTransparency];
 echo "@prefix prov:  <http://www.w3.org/ns/prov#> .
 @prefix sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#> .
 @prefix foaf:  <http://xmlns.com/foaf/0.1/> .
 @prefix sdmx-attribute: <http://purl.org/linked-data/sdmx/2009/attribute#> .
 @prefix sdmx-concept: <http://purl.org/linked-data/sdmx/2009/concept#> .
 @prefix void:  <http://rdfs.org/ns/void#> .
 @prefix property: <http://transparency.270a.info/property/> .
 @prefix qb:    <http://purl.org/linked-data/cube#> .
 @prefix qudt:  <http://qudt.org/1.1/schema/qudt#> .
 @prefix dcterms: <http://purl.org/dc/terms/> .
 @prefix xkos:  <http://purl.org/linked-data/xkos#> .
 @prefix rdfs:  <http://www.w3.org/2000/01/rdf-schema#> .
 @prefix dbr:   <http://dbpedia.org/resource/> .
 @prefix wgs:   <http://www.w3.org/2003/01/geo/wgs84_pos#> .
 @prefix dbo:   <http://dbpedia.org/ontology/> .
 @prefix dbp:   <http://dbpedia.org/property/> .
 @prefix xsd:   <http://www.w3.org/2001/XMLSchema#> .
 @prefix owl:   <http://www.w3.org/2002/07/owl#> .
 @prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
 @prefix sdmx:  <http://purl.org/linked-data/sdmx#> .
 @prefix skos:  <http://www.w3.org/2004/02/skos/core#> .
 @prefix sdmx-dimension: <http://purl.org/linked-data/sdmx/2009/dimension#> ." | cat - $[turtleTransparency] > temp && mv temp $[turtleTransparency];
 echo "Create local store in Jena Fuseki Server and import rawTurtle.ttl into the store for querying."
 sed "/<\/rdf:RDF>/d" $config > temp.rdf;
 cat temp.rdf > $config;
 rm temp.rdf;
 echo "<rdf:Description rdf:about=\"/config/WorkflowExecutionArtifacts\">
        <opmw:WorkflowExecutionArtifact name=\"turtleTransparency\">http://transparency.270a.info/data/refined-turtle/$date</opmw:WorkflowExecutionArtifact>
    </rdf:Description>\n" >> $config;
 echo "</rdf:RDF>" >> $config;
 echo "
 <http://transparency.270a.info/workflow/mapping/refine-turtle>
 a opmw:WorkflowTemplateProcess ;
 opmw:isStepOfTemplate <http://transparency.270a.info/workflow> ;
 ." >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/workflow/refined-turtle>
 a opmw:WorkflowTemplateArtifact, opmw:DataVariable ;
 opmw:isGeneratedBy <http://transparency.270a.info/workflow/mapping/refine-turtle> ;
 opmw:correspondsToTemplate <http://transparency.270a.info/workflow> ;
 .
  " >> $abstractWorkflowDescription;
 echo "<http://transparency.270a.info/process/mapping/refine-turtle/$date>
 a opmw:WorkflowExecutionProcess ;
 opmw:correspondsToTemplateProcess <http://transparency.270a.info/workflow/mapping/refine-turtle> ;
 opmv:used <$artifact> ;
 opmv:wasControlledBy <$agent> ;
 opmo:account <$account> ;
 .
 " >> $workflowExecutionDescription;
 echo "
 <http://transparency.270a.info/data/refined-turtle/$date>
 a opmw:WorkflowExecutionArtifact ;
 opmo:account <$account> ;
 opmv:wasGeneratedBy <http://transparency.270a.info/process/mapping/refine-turtle/$date> ;
 opmw:correspondsToTemplateArtifact <http://transparency.270a.info/workflow/refined-turtle> ;
 .
 " >> $workflowExecutionDescription;
