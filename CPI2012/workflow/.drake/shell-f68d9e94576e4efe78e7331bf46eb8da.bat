date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/mapping/1StepMapping> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescMapping
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Mapping step was executed by $agent at $date"
tarql transparency.tarql > ../data/turtleTransparency.ttl
