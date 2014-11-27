date=`date +%Y-%m-%d:%H:%M:%S`
echo "Unzipped data"
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/1StepPreprocessing> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescPreprocessing
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "Workflow step was executed by $agent at $date"
unzip $INPUT
