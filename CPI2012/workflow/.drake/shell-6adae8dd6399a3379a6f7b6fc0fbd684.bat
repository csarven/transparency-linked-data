date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/7StepPreprocessing> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescPreprocessing
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "tarql file was created by Renato Stauffer at $date"
