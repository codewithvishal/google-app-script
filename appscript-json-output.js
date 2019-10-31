function doGet(e) {
  var price = 55;
  
  var textoutput =  JSON.stringify({
    "yesbank": price 
  })
  
  return ContentService.createTextOutput(textoutput)
                        .setMimeType(ContentService.MimeType.JSON);
}

// output shall be {"price": 55} as json
