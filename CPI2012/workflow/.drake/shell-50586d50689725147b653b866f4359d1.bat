date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/5StepPreprocessing> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescPreprocessing
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "Data merged by Renato Stauffer at $date"
join -t',' -1 2 -2 2 ../data/refinedCountryCodes.csv ../data/refinedCPI2012.csv > ../data/CPI2012.csv
