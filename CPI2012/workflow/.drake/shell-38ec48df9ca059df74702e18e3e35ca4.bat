echo "Downloaded data at http://www.transparency.org/"
echo "Workflow step was executed by Renato Stauffer"
echo "<http://$agency.270a.info/workflow/transparency/extraction/2StepExtraction> a p-plan:Step;" >> $wfDescExtraction
echo "p-plan:isStepOfPlan <http://$agency.270a.info/workflow/transparency/extraction>." >> $wfDescExtraction
wget -O $OUTPUT http://files.transparency.org/content/download/533/2213/file/2012_CPI_DataPackage.zip
