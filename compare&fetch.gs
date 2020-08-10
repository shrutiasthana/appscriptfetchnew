function _updateSpreadsheet() {
  var uid = "-------";
  var ss = SpreadsheetApp.openById(uid);
  var source_sheet = ss.getSheetByName("data-7,8");
  var target_sheet = ss.getSheetByName("Combined");
  var last_row = target_sheet.getLastRow();  
  var source_data = source_sheet.getDataRange().getValues();
  var target_data = target_sheet.getDataRange().getValues();
  var resultArray = [];

  for (var n = 1 ; n < source_data.length ; n++) {
    var keep = true;
    for(var p = 1 ; p < target_data.length ; p++) {
      if (source_data[n][0] == target_data[p][0] ) {
        keep = false; break;
      }
    }
    Logger.log(keep);
 //   if(keep){ resultArray.push(source_data[n])};
//    if(keep){ resultArray.push([source_data[n][0]])};
    var columnsToKeep = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    var tempData = [];
    if(keep && source_data[n][17] != ""){
      for(var c in columnsToKeep){ tempData.push(source_data[n][columnsToKeep[c]])}
    resultArray.push(tempData);
    }     
  }
  last_row++;
  Logger.log(resultArray);
  if(resultArray.length>0){
    target_sheet.getRange(last_row,1,resultArray.length,resultArray[0].length).setValues(resultArray);
  }
}

function _updateSpreadsheetsecond() {
  var uid = "-------";
  var ss = SpreadsheetApp.openById(uid);
  var source_sheettwo = ss.getSheetByName("data-9,10");
  var target_sheet = ss.getSheetByName("Combined");
  var last_row = target_sheet.getLastRow();  
  var source_data = source_sheettwo.getDataRange().getValues();
  var target_data = target_sheet.getDataRange().getValues();
  var resultArray = [];

  for (var n = 1 ; n < source_data.length ; n++) {
    var keep = true;
    for(var p = 1 ; p < target_data.length ; p++) {
      if (source_data[n][0] == target_data[p][0]) {
        keep = false; break;
      }
    }
    Logger.log(keep);
 //   if(keep){ resultArray.push(source_data[n])};
//    if(keep){ resultArray.push([source_data[n][0]])};
    var columnsToKeep = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    var tempData = [];
    if(keep && source_data[n][17] != ""){
      for(var c in columnsToKeep){ tempData.push(source_data[n][columnsToKeep[c]])}
    resultArray.push(tempData);
    }     
  }
  last_row++;
  Logger.log(resultArray);
  if(resultArray.length>0){
    target_sheet.getRange(last_row,1,resultArray.length,resultArray[0].length).setValues(resultArray);
  }
}
