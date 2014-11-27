date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/mapping/2StepMapping> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescMapping
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Create local store in Jena Fuseki Server and import turtleTransparency.ttl into the store for querying."
