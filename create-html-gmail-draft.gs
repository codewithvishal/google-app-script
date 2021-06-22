// Create gmail html draft.
// very useful in sending emails to party's or customers.
// Pivot data can be used.

function Html() {

 return "<h1 style='color:red'>This is test</h1>"; 
}


function createDraft(USER_MAIL_ID) {
var STATUS = "";
try {
    var html = Html();
    GmailApp.createDraft(
      USER_MAIL_ID,
      "This is a test email",
      html,
      {
        htmlBody: html
      });
      STATUS = "Draft has been Created!";
  } catch (e) {
      STATUS = "Draft Creation Failed!";
  }
  
 return STATUS;
}
