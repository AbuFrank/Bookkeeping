/**
 * This function runs when the spreadsheet is open,
 * and either gets user input for the first register,
 * or creates the next register in the chain.
 */
function onOpen() {
  //menu creation is temporary dev convenience remove later to run automatically
  var spreadsheet = SpreadsheetApp.getActive()
  var menuItems = [{ name: 'Make Register', functionName: 'makeRegister_' }]
  spreadsheet.addMenu('New Register', menuItems)
}

function makeRegister_() {
  // Construct the sibling files object and get number of files
  var filesObj = getFilesObj_()
  var regNum = filesObj['filesNum']

  // Use the number of files in the bookkeeping folder
  // to determine the new register's name.
  var newFileName = 'Register ' + regNum

  // Create the new file using the new name.
  var newFileId = createFile_(newFileName)

  // Copy the sheets using the new file's id
  copySheets_(newFileId)

  if (regNum != 1) {
    // Check if it's the first, copy over last register accruements if not
    var lastFileName = 'Register ' + (regNum - 1)
    var lastFileId = filesObj[lastFileName]

    // Modify the new register using the last register's results
    copyRecentData_(lastFileId, newFileId)
  }
}
