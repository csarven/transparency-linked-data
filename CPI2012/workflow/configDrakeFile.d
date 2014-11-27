;Author: Renato Stauffer
;Author URL: http://renatostauffer.ch

;Global variables
agency="transparency";
agencyLabel="Transparency International";
agencyURL="http://www.transparency.org/"
agent="Renato Stauffer"
data="../data";
namespace="http://$agency.270a.info/";

;Paths to description for workflows
wfDesc="$[data]/wfDescription/";
wfDescMainProcess="$[wfDesc]/$[agency].ttl";

wfDescInspection="$[wfDesc]wfDescInspection/inspection-$[agency].ttl";
wfDescExtraction="$[wfDesc]wfDescExtraction/extraction-$[agency].ttl";
wfDescPreprocessing="$[wfDesc]wfDescPreprocessing/preprocessing-$[agency].ttl";
wfDescMapping="$[wfDesc]wfDescMapping/mapping-$[agency].ttl";

;Paths to workflow steps
wfExtractionSteps="wfExtraction.d";
wfInspectionSteps="wfInspection.d";
wfPreprocessingSteps="wfPreprocessing.d";
wfMappingSteps="wfMapping.d";
wfCleanupSteps="wfCleanup.d";

;Paths to data
CPI2012_ResultsXLS="$[data]/CPI2012_Results.xls";
transparencyZIP="$[data]/transparency.zip";
CPI2012_ResultsCSV="$[data]/CPI2012_Results.csv";
countryCodesCSV="$[data]/countryCodes.csv";
refinedCountryCodesCSV="$[data]/refinedCountryCodes.csv";
refinedCPI2012CSV="$[data]/refinedCPI2012.csv";
CPI2012csv="$[data]/CPI2012.csv";
CPI2012_refinedCSV="$[data]/CPI2012_refined.csv";
turtleTransparency="$[data]/turtleTransparency.ttl";
turtleTransparency_final="$[data]/turtleTransparency_final.ttl";