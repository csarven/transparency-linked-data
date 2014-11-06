date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/3StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
sed '1d' countryCodes.csv | sort -k 2 -t ',' > refinedCountryCodes.csv 
echo "Country codes were refined by Renato Stauffer at $date"
