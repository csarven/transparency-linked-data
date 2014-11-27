date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/inspection/1StepInspection> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> "../data/wfDescription/wfDescInspection/inspection-transparency.ttl"
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/inspection>." >> "../data/wfDescription/wfDescInspection/inspection-transparency.ttl"
echo "Inspected data from Transparency International"
echo "Workflow step was executed by Renato Stauffer at $date"
