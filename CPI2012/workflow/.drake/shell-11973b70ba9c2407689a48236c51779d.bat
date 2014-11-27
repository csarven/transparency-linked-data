date=`date +%Y-%m-%d:%H:%M:%S`
echo "Start mapping"
echo "<http://$agency.270a.info/workflow/transparency/mapping> a opmw:WorkflowTemplateProcess;" > $wfDescMapping
echo "opmw:isStepOfTemplate <http://$agency.270a.info/workflow/transparency>;" >> $wfDescMapping
echo "opmv:wasTriggeredBy <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescMapping
