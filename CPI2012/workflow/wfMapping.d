;This is a workflow for capturing data from Transparency International and transform
;the data into a turtle file
%include configDrakeFile.d

%mappCSV2RDF, $[rawTurtle] <- $[refinedMergedCPI]
 date=`date +%Y-%m-%d:%H:%M:%S`
 echo "Mapping step was executed by $agent at $date"
 sed "s/{year}/$[year]/g" template.tarql.txt > $[agency].tarql.txt
 tarql $[agency].tarql.txt > $[rawTurtle]

;Create local store for Jena Fuseki Server
%jenaQuery, $[turtleTransparency] <- $[rawTurtle]
 date=`date +%Y-%m-%d:%H:%M:%S`
 sed "s/{year}/$[year]/g" template.first.query.txt > firstQuery.txt
 sed "s/{year}/$[year]/g" template.second.query.txt > secondQuery.txt
 sh apache-jena-2.12.1/bin/arq --data $[rawTurtle] --query firstQuery.txt > $[turtleTransparency]
 sh apache-jena-2.12.1/bin/arq --data $[rawTurtle] --query secondQuery.txt >> $[turtleTransparency]
 echo "Create local store in Jena Fuseki Server and import rawTurtle.ttl into the store for querying."

;Clean up turtle file
%removePrefixes <- $[turtleTransparency]
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
