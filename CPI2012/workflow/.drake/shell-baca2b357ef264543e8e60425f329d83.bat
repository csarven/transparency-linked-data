date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/mapping/3StepMapping> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescMapping
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Mapping step was executed by $agent at $date"
echo "Jena Fuseki was used to crate turtle file named /Users/renatostauffer/Desktop/FakeRetrieval_Transparency/tarql-0.9/bin/transparency-linked-data/CPI2012/data/turtleTransparency_final.ttl"
