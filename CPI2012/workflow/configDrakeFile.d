;Author: Renato Stauffer
;Author URI: http://renatostauffer.ch

;Global variables
agency="transparency";
agencyLabel="Transparency International";
agencyURL="http://www.transparency.org/"
agent="Renato Stauffer"
data="../data";
namespace="http://$agency.270a.info/";
temp="../temp/"

;Paths to description for workflows
wfDesc="$[data]/wfDesc/";
wfDescMainProcess="$[data]/wfDesc/$[agency].ttl";
wfDescInspection="$[wfDesc]wfDescInspection/inspection-$[agency].ttl";
wfDescExtraction="$[wfDesc]wfDescExtraction/extraction-$[agency].ttl";
wfDescPreprocessing="$[wfDesc]wfDescPreprocessing/preprocessing-$[agency].ttl";
wfDescMapping="$[wfDesc]wfDescMapping/mapping-$[agency].ttl";

;Paths to workflow steps
wfExtractionSteps="extraction/wfExtraction.d";
wfInspectionSteps="inspection/wfInspection.d";
wfPreprocessingSteps="preprocessing/wfPreprocessing.d";
wfMappingSteps="mapping/wfMapping.d";