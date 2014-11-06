echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> ." > ../data/wfDesc/transparency.ttl
echo "@prefix p-plan: <http://purl.org/net/p-plan#> ." >> ../data/wfDesc/transparency.ttl
echo "@prefix ao: <http://purl.org/ao/> ." >> ../data/wfDesc/transparency.ttl
ech "@prefix ore: <http://www.openarchives.org/ore/terms/> ." >> ../data/wfDesc/transparency.ttl
echo "@prefix dct: <http://purl.org/dc/terms/> ." >> ../data/wfDesc/transparency.ttl
echo "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> ." >> ../data/wfDesc/transparency.ttl
echo "@prefix foaf: <http://xmlns.com/foaf/0.1/> ." >> ../data/wfDesc/transparency.ttl
echo "@prefix rdfg: <http://www.w3.org/2004/03/trix/rdfg-1/> ." >> ../data/wfDesc/transparency.ttl
echo "@prefix prov: <http://www.w3.org/ns/prov#> ." >> ../data/wfDesc/transparency.ttl
echo "<http://$agency.270a.info/workflow/transparency> a p-plan:Plan;>" >> ../data/wfDesc/transparency.ttl
echo 'rdfs:label "Workflow Transparency International".' >> ../data/wfDesc/transparency.ttl
