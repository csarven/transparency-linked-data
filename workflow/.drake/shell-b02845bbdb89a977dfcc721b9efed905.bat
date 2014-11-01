date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/mapping/2StepMapping> a p-plan:Step;" >> $wfDescMapping
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Mapping step was executed by $agent at $date"
echo "Jena Fuseki was used to crate turtle file named /Users/renatostauffer/Desktop/FakeRetrieval_Transparency/tarql-0.9/bin/transparency-linked-data-test/workflow/turtleTransparency_final.ttl"
