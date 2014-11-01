echo "Do the mapping"
echo "<http://$agency.270a.info/workflow/transparency/mapping a p-plan:MultiStep;>" > wfDescMapping
echo "p-plan:isDecomposedAsPlan <http://$agency.270a.info/workflow/transparency>." >> wfDescMapping
%call mapping/wfMapping.d
echo "End of workflow"
