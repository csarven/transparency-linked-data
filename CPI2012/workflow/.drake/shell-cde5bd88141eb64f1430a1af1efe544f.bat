date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/4StepPreprocessing> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescPreprocessing
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
tail -n+3 CPI2012_Results.csv | cut -d',' -f1-2 -f4-4 -f6- | awk '{gsub(/Macedonia/, "FYR Macedonia")}1'| sort -k 2 -t',' > refinedCPI2012.csv
echo "CPI 2012 was refined by Renato Stauffer at $date"
