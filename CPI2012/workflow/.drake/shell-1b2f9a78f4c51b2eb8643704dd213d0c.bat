date=`date +%Y-%m-%d:%H:%M:%S`
echo "Start extracting data from transparency"
echo "<http://$agency.270a.info/workflow/transparency/extraction> a opmw:WorkflowTemplateProcess;" > $wfDescExtraction
echo "opmw:isStepOfTemplate <http://$agency.270a.info/workflow/transparency>;" >> $wfDescExtraction
echo "opmv:wasTriggeredBy <http://$agency.270a.info/workflow/transparency/inspection>." >> $wfDescExtraction
