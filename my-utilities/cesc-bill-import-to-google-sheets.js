var debug = false;
var ss = SpreadsheetApp.getActiveSpreadsheet();

function test() {
  var label = "cesc";
  var name = /(Name:.*)/g;
  var amount = /(Net Amount.*(\d.00))/g;
  var customerId = /(Customer ID:.*)/g;
  var dueDate = /(Due Date:.*)/g;
  var threads = GmailApp.search("label:"+label);
  
  var bills = GmailApp.getMessagesForThreads(threads);
  
  if (debug == false) {
  
  for (var i = 0; i < bills.length; i++) {
    var row = [];
    for (var j = 0; j < bills[i].length; j++) {
        var id_ = bills[i][j].getId();
        var name_ = bills[i][j].getPlainBody().match(name)[0].replace("Name: ", "");
        var customerId_ = bills[i][j].getPlainBody().match(customerId)[0].replace("Customer ID: ", "");
        var dueDate_ = bills[i][j].getPlainBody().match(dueDate)[0].replace("Due Date: ", "");
        var amount_ = bills[i][j].getPlainBody().match(amount)[0].replace("Net Amount: ", "").replace("₹ ", "");
        row.push(id_);
        row.push(name_);
        row.push(customerId_);
        row.push(dueDate_);
        row.push(amount_);        
        //Logger.log(bills[i][j].getPlainBody().match(reg));
        ss.getSheetByName('Sheet1').appendRow(row);
    }
  }
  }
  
  if (debug == true) {
    //Logger.log(bills);
//    Logger.log(bills[0][0].getSubject());
//    Logger.log(bills[0][0].getPlainBody());
//    Logger.log(bills[0][0].getPlainBody().match(reg)[0]);
    Logger.log(bills[0][0].getId());
  }
  
}
