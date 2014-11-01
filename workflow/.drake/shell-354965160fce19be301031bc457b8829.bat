date=`date +%Y-%m-%d:%H:%M:%S`
echo "Downloaded data at http://www.transparency.org/"
echo "Workflow step was executed by Renato Stauffer at $date"
echo "<http://$agency.270a.info/workflow/transparency/extraction/1StepExtraction> a p-plan:Step;" >> $wfDescExtraction
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/extraction>." >> $wfDescExtraction
wget -P ../data $OUTPUT http://files.transparency.org/content/download/533/2213/file/transparency.zip
