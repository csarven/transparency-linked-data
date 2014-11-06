echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> ." > $wfDesc
echo "@prefix p-plan: <http://purl.org/net/p-plan#> ." >> $wfDesc
echo "@prefix ao: <http://purl.org/ao/> ." >> $wfDesc
ech "@prefix ore: <http://www.openarchives.org/ore/terms/> ." >> $wfDesc
echo "@prefix dct: <http://purl.org/dc/terms/> ." >> $wfDesc
echo "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> ." >> $wfDesc
echo "@prefix foaf: <http://xmlns.com/foaf/0.1/> ." >> $wfDesc
echo "@prefix rdfg: <http://www.w3.org/2004/03/trix/rdfg-1/> ." >> $wfDesc
echo "@prefix prov: <http://www.w3.org/ns/prov#> ." >> $wfDesc
echo "<http://$agency.270a.info/workflow/transparency> a p-plan:Plan;>" >> wfDesc
echo 'rdfs:label "Workflow Transparency International".' >> wfDescInspection
