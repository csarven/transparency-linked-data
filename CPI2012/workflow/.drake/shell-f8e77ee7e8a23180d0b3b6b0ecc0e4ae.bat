date=`date +%Y-%m-%d:%H:%M:%S`
echo "Unzipped data"
unzip $INPUT
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/1StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "Workflow step was executed by $agent at $date"
