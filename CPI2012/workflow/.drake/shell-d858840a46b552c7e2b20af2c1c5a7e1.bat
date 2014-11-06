echo "<http://$agency.270a.info/workflow/transparency/mapping/1StepMapping> a p-plan:Step;" >> $wfDescMapping
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/mapping>." >> $wfDescMapping
echo "Mapp data at $date"
echo "Mapping step was executed by $agent"
sh tarql "../transparency.tarql" > turtle.ttl
