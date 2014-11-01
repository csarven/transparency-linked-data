echo "<http://$agency.270a.info/workflow/transparency/mapping/1StepMapping> a p-plan:Step;" >> $wfDescMapping
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Mapping step was executed by $agent."
tarql transparency.tarql > turtleTransparencyd.ttl
