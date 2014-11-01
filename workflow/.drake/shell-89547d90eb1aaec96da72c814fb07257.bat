date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/3StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "Data merged by Renato Stauffer at $date"
