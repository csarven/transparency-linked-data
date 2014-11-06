date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/mapping/1StepMapping> a p-plan:Step;" >> $wfDescMapping
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Mapping step was executed by $agent at $date"
tarql transparency.tarql > turtleTransparency.ttl
