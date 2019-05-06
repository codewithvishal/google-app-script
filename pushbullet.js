function pushbullet(title, body) {
  var PUSH_BULLET_ACCESS_TOKEN = "YOUR-PUSHBULLET-API-TOKEN";
  var digest = "Basic " + Utilities.base64Encode(PUSH_BULLET_ACCESS_TOKEN + ":"),
    options = {
      "method": "post",
      "payload": {
        "type": "note",
        "title": title,
        "body": body,
        "device_iden": "YOUR DEVICE ID" // You will find it in the URL at pushbullet account
      },
      "headers": {
        "Authorization": digest // Do not edit here
      }
    },
  push_bullet_url = "https://api.pushbullet.com/v2/pushes";
  UrlFetchApp.fetch(push_bullet_url, options);
  Logger.log("Pushed succesfully");
}
