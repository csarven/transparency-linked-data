%include configDrakeFile.d

;Clean up unnecessary stuff
%1StepCleanup <-
 rm -rf $[CPI2012csv]
 rm -rf $[transparencyZIP]
 rm -rf drake.log
 rm -rf $[refinedCountryCodesCSV]
 rm -rf $[refinedCPI2012CSV]
 rm -rf 2012_CPI_DataPackage