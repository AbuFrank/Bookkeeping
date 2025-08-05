function createFile_(newFileName) {
  //var check = SpreadsheetApp.getUi();
  var fileId = SpreadsheetApp.getActiveSpreadsheet().getId()
  var folderId = DriveApp.getFileById(fileId).getParents().next().getId()
  var folder = DriveApp.getFolderById(folderId)
  var file = SpreadsheetApp.create(newFileName)
  var newFileId = file.getId()
  var copyFile = DriveApp.getFileById(newFileId)
  folder.addFile(copyFile)
  DriveApp.getRootFolder().removeFile(copyFile)

  return newFileId
}
