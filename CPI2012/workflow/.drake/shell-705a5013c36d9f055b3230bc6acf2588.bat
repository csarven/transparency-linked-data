date=`date +%Y-%m-%d:%H:%M:%S`
echo "Start preprocessing"
echo "<http://$agency.270a.info/workflow/transparency/preprocessing> a opmw:WorkflowTemplateProcess;" > $wfDescPreprocessing
echo "opmw:isStepOfTemplate <http://$agency.270a.info/workflow/transparency>;" >> $wfDescPreprocessing
echo "opmv:wasTriggeredBy <http://$agency.270a.info/workflow/transparency/extraction>." >> $wfDescInspection
