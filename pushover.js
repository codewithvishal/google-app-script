
function Pushover(title, contents) {
//setup the Pushover API call
var baseUrl = "https://api.pushover.net/1/messages.json";

var parameters = {
"token" : "API_KEY_HERE", //paste your API Key between the single quotation marks
"user" : "USER_KEY_HERE", //paste your User Key between the single quotation marks
"title" : title,
"message" : contents
};

var options = {
"method" : "POST",
"payload" : parameters
};

//send the Pushover API call
UrlFetchApp.fetch(baseUrl,options);

}
