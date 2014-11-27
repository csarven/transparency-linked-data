date=`date +%Y-%m-%d:%H:%M:%S`
echo "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> ." > ../data/wfDescription//transparency.ttl
echo "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> ." >> ../data/wfDescription//transparency.ttl
echo "@prefix prov: <http://www.w3.org/ns/prov#> ." >> ../data/wfDescription//transparency.ttl
echo "@prefix opmv: <http://purl.org/net/opmv/ns#> ." >> ../data/wfDescription//transparency.ttl
echo "@prefix opmw: <http://www.opmw.org/ontology/> ." >> ../data/wfDescription//transparency.ttl
printf "\n" >> ../data/wfDescription//transparency.ttl
echo "<http://$agency.270a.info/workflow/transparency> a opmw:WorkflowTemplate ;" >> ../data/wfDescription//transparency.ttl
echo 'rdfs:label "Workflow Transparency International" ;' >> ../data/wfDescription//transparency.ttl
echo 'dc:contributor <http://renatostauffer.ch> ;' >> ../data/wfDescription//transparency.ttl
echo 'dc:creator <http://renatostauffer.ch> ;' >> ../data/wfDescription//transparency.ttl
echo 'dc:contributor <http://renatostauffer.ch> ;' >> ../data/wfDescription//transparency.ttl
echo 'dc:createdInWorkflowSystem <https://github.com/Factual/drake#clone-the-project> ;' >> ../data/wfDescription//transparency.ttl
echo 'opmw:versionNumber "1"^^xsd:int .' >> ../data/wfDescription//transparency.ttl
printf "\n" >> ../data/wfDescription//transparency.ttl
