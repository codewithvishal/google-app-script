function getMessage() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('message'); // Message is the name of the HTML file
  var message = htmlOutput.getContent()
  return message;
}

function mail () {
  var message = getMessage();
  var subject_ = "Sending Mail"; // subject
  var recipientEmail = "youremail@gmail.com"; // recipient email
  MailApp.sendEmail({to: recipientEmail, subject: subject_, htmlBody : message}); 
}
