date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/inspection/1StepInspection> a p-plan:Step;" >> "../data/wfDesc/wfDescInspection/inspection-transparency.ttl"
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/inspection>." >> "../data/wfDesc/wfDescInspection/inspection-transparency.ttl"
echo "Inspected data from Transparency International"
echo "Workflow step was executed by Renato Stauffer at $date"
