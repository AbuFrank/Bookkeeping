/**
 * This function copies the templates that exist within the
 * script spreadsheet to the new file generated.
 */
function copySheets_(newFileId) {
  // Create list of names from sheets to iterate
  var sheetNames = ['General Ledger', 'Income & Expense Ledger']
  for (var i = 0, l = sheetNames.length; i < l; i++) {
    copySheet_(newFileId, sheetNames[i])
  }

  var newSS = SpreadsheetApp.openById(newFileId)
  var sheet1 = newSS.getSheetByName('Sheet1')
  newSS.deleteSheet(sheet1)
}

function copySheet_(newFileId, sheetName) {
  // Copy the current template sheet over to the newly created doc
  var newFile = SpreadsheetApp.openById(newFileId)
  var templateFile = SpreadsheetApp.getActiveSpreadsheet()
  var currSheet = templateFile.getSheetByName(sheetName)
  // ** Testing **
  var check = SpreadsheetApp.getUi()
  currSheet.copyTo(newFile).setName(sheetName)
}
