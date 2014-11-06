date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/4StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
awk '{gsub(/,0/, ",null")}1' ../dataCPI2012.csv > ../datatemp.csv
awk '{gsub(/null\./, "0\.")}1' ../datatemp.csv > ../dataCPI2012_refined.csv
echo "Data was refined by Renato Stauffer at $date"
