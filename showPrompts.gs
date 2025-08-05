/**
 * This function shows input prompts for intial conditions
 */
function showPrompts_() {
  var initCond = []

  // Display a dialog box with a message, input field, and "Okay" button. The user can
  // also close the dialog by clicking the close button in its title bar.
  var ui = SpreadsheetApp.getUi()
  var result = ui.prompt(
    'There are currently no registers. Please add info below',
    'Please enter the starting balance:',
    ui.ButtonSet.OK
  )

  // Process the user's response.
  var button = result.getSelectedButton()
  var text = result.getResponseText()
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Initial balance is ' + text + '.')
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog. I see how it is.')
  }
}
