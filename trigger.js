// Google AppScript Trigger
function Schedule (FUNCTION_NAME) {
     ScriptApp.newTrigger(FUNCTION_NAME)  // HERE IN THIS PUSHBULLET
               .timeBased()
                .everyMinutes(1)
                 .create();
 }

 // To delete appscript trigger, visit https://script.google.com/home/triggers to delete one by one or run the below function to delete all the triggers
function StopeTriggerAlert() {
  // Deletes all triggers in the current project.
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  return;
}
