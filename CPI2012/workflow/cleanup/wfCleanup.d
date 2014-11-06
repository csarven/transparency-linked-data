%include configDrakeFile.d

;Clean up unnecessary stuff
%1StepCleanup <-
 rm -rf CPI2012.csv
 rm -rf transparency.zip
 rm -rf 2012_CPI_DataPackage
 rm -rf drake.log
 echo "test"