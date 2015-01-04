;Author: Renato Stauffer
;Author URL: http://renatostauffer.ch

;Global variables
agency="transparency";
agencyLabel="Transparency International";
agencyURL="http://www.transparency.org/"
agent="http://renatostauffer.ch";
data="../data";
namespace="http://$agency.270a.info/";
year=2012;
account="http://transparency.270a.info/account/$date";
config="../data/config.rdf"

;Paths to data
transparencyZIP="$[data]/transparency.zip";
CPI_Results="$[data]/CPI.Results.csv";
countryCodes="$[data]/country.codes.csv";
sortedCountryCodes="$[data]/sorted.country.codes.csv";
refinedCPIData="$[data]/refined.CPI.data.csv";
mergedCPI="$[data]/merged.CPI.csv";
refinedMergedCPI="$[data]/refined.merged.CPI.csv";
rawTurtle="$[data]/raw.ttl";
turtleTransparency="$[data]/transparency.ttl";

;Path to worflow description files
workflowExecutionDescription="$[data]/workflowExecutionDescription.ttl";
abstractWorkflowDescription="$[data]/abstractWorkflowDescription.ttl";
