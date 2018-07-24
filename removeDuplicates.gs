function removeDuplicates() {
  
  
  var data = SpreadsheetApp.getActive().getActiveSheet().getRange("A1:A6").getValues();
  var uniqueList = [];
  
  var output = data.filter(function (el) {
    if (uniqueList.indexOf(el[0]) == -1) {
      uniqueList.push(el[0]);
      return true;
    }
  });
  
  var write = SpreadsheetApp.getActive().getActiveSheet().getRange(1, 2, output.length).setValues(output);
  
}
