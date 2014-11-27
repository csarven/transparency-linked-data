date=`date +%Y-%m-%d:%H:%M:%S`
echo "Start inspecting data from transparency"
echo "<http://$agency.270a.info/workflow/transparency/inspection> a opmw:WorkflowTemplateProcess;" > $wfDescInspection
echo "opmw:isStepOfTemplate <http://$agency.270a.info/workflow/transparency>;" >> $wfDescInspection
echo "opmv:wasTriggeredBy <http://$agency.270a.info/workflow/transparency>." >> $wfDescInspection
