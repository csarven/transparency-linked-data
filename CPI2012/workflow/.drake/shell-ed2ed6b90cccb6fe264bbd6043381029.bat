date=`date +%Y-%m-%d:%H:%M:%S`
echo "Downloaded country Codes"
echo "Workflow step was executed by Renato Stauffer at $date"
echo "<http://$agency.270a.info/workflow/transparency/extraction/2StepExtraction> a p-plan:Step;" >> $wfDescExtraction
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/extraction>." >> $wfDescExtraction