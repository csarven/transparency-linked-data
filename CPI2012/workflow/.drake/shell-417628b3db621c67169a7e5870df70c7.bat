date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/4StepPreprocessing> a p-plan:Step;" >> $wfDescPreprocessing
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
awk '{gsub(/,0/, ",null")}1' CPI2012.csv > temp.csv
awk '{gsub(/null\./, "0\.")}1' temp.csv > temp2.csv
rm temp.csv
awk '{gsub(/null/, "")}1' temp2.csv > CPI2012_refined.csv
rm temp2.csv
echo "Data was refined by Renato Stauffer at $date"
