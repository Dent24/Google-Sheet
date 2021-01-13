function doPost(e) {
  //設定相應的欄位參數
  var params = e.parameter; //這一個不要動
  var username = params.username;
  var phone = params.phone;
  var time = params.time;
  //設定sheet資訊
  var SpreadSheet = SpreadsheetApp.openById("1NinTbt-EXRJ1Ln0HGeAEysB-QI9USP2uIwgHi3KZDFI");
  var Sheet = SpreadSheet.getSheetByName("sheet1");
  var LastRow = Sheet.getLastRow();
  //資料寫入對應欄位中
  Sheet.getRange(LastRow+1, 1).setValue(username);
  Sheet.getRange(LastRow+1, 2).setValue(phone);
  Sheet.getRange(LastRow+1, 3).setValue(time);
  //當資料寫入完成後，回傳資訊
  return ContentService.createTextOutput("success");
}