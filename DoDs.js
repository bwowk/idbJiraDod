confirmDod = function(dod) {
  return confirm("Did you fulfill the DoD?\n"+dod);
};

dorBacklog = "Backlog:\n\
- Check info provided and request more info – if needed – creating Sub-Blocks\n\
- Count the Complexity Points and set the Complexity Points field of the parent issue\n\
- Business rules details\n\
- Design (if needed)";

dodAnalysing = "Analysing:\n\
- Technical solution\n\
- Reference links (if needed)\n\
- Alternative scenarios";

dodDev = "Development:\n\
1- Check if there is any JS error on working website page\n\
- Run Code Sniffer (Drupal standard)\n\
- Local Unity Test crossBrowser and all Devices\n\
- Features created  (if needed)\n\
- Features executed in CIT_DEV Patheon by Hook Update (if needed)\n\
- Unit Test in CIT_DEV Patheon ( MANDATORY )\n\
- All tasks updated in Jira. If it's a bug make sure that the Root Cause and Root Cause Notes fields are complete.\n\
- Tester peer review\n\
- Check Drupal log for new Warnings/Errors";

dodQA = "QA:\n\
- Features was executed in DEV Pantheon\n\
- Test functionality\n\
- Bugs fixed\n\
- All tasks updated in Jira.";

dodMts = "MTS:\n\
- Unit test in stage\n\
- Check if there is any JS error on working website page\n\
- Check Drupal log for new Warnings/Errors\n\
- Check if the task is assigned to the client";

dodUat = "UAT:\n\
- Client approval (status 'UAT Done')";

dodMtp = "MTP:\n\
- Unit test in prod\n\
- Check if there is any JS error on working website page\n\
- Check Drupal log for new Warnings/Errors\n\
- Check if the task is assigned to the client";
