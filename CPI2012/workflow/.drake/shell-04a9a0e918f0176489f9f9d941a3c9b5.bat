date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/3StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "Data merged by Renato Stauffer at $date"
join -t',' -1 2 -2 2 refinedCountryCodes.csv refinedCPI2012.csv > CPI2012.csv
