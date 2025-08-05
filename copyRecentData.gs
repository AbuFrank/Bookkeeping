/**
 * This function finds the associated spreadsheets corresponding to
 * the last register and the newly created register and copies
 * the account names and totals from the prior to the latter.
 */
function copyRecentData_(lastFileId, newFileId) {
  // Retrieve the new and last spreadsheets
  var lastSs = SpreadsheetApp.openById(lastFileId)
  var newSs = SpreadsheetApp.openById(newFileId)

  // Data fields matrix for looping purposes
  var accrues = [
    ['J5:J39', 'J5:J39'], // Expense Account Names
    ['P5:P39', 'N5:N39'], // Expense Totals, shifts to "Up to This Week"
    ['J42:J47', 'J42:J47'], // Non-Expense Account Names
    ['P42:P47', 'N42:N47'], // Non-Expense Totals
    ['P51', 'N51'], // Expense Totals Total, shifts
    //["B5:B27", "B5:B27"],   // Receipts Descriptions
    ['G33', 'G31'], // Receipts Total, shifts up
    ['G47', 'G45'], // Non-Income Deposits total
  ]
  // Loop each "to", "from" range and copy data over
  var page2 = 'Income & Expense Ledger!'
  for (var i = 0, j = accrues.length; i < j; i += 1) {
    var lastValues = lastSs.getRange(page2 + accrues[i][0]).getValues()
    newSs.getRange(page2 + accrues[i][1]).setValues(lastValues)
  }

  // Get the last value in the running balance column and copy it to new register; new starting balance
  var page1 = 'General Ledger!'
  var runBal = lastSs.getRange(page1 + 'L4:L').getValues()
  var lastVal = 0
  // get last non-zero value
  for (i = 0; i < runBal.length; i++) {
    // check for first zero entry
    if (runBal[i][0] == 0.0 && runBal[i + 1][0] == 0.0) {
      // we're at the end if the next entry is also zero
      if (runBal[i + 1][0] == 0.0) {
        lastVal = runBal[i - 1]
        break
      }
    }
  }
  newSs.getRange(page1 + 'K4').setValue(lastVal)
}
