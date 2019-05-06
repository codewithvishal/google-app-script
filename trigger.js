// Google AppScript Trigger
function Schedule (FUNCTION_NAME) {
     ScriptApp.newTrigger(FUNCTION_NAME)  // HERE IN THIS CASH PUSHBULLET
               .timeBased()
                .everyMinutes(1)
                 .create();
 }
 // To delete appscript trigger, visit https://script.google.com/home/triggers
