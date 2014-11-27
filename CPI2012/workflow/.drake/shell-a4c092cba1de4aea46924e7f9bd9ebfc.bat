date=`date +%Y-%m-%d:%H:%M:%S`
echo "<http://$agency.270a.info/workflow/transparency/preprocessing/2StepPreprocessing> a opmv:Process, prov:Activity, opmw:WorkflowExecutionProcess;" >> $wfDescPreprocessing
echo "opmw:correspondsToTemplateProcess <http://$agency.270a.info/workflow/transparency/preprocessing>." >> $wfDescPreprocessing
echo "Created CSV by Renato Stauffer at $date"
