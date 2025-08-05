function getFilesObj_() {
  var fileId = SpreadsheetApp.getActiveSpreadsheet().getId()
  var folderId = DriveApp.getFileById(fileId).getParents().next().getId()
  var folder = DriveApp.getFolderById(folderId)
  var files = folder.getFiles()

  // Loop files retrieve name and id
  var filesObj = {}
  var filesNum = 0
  while (files.hasNext()) {
    var file = files.next()
    var fileName = file.getName()
    // Add name and url to
    filesObj[fileName] = file.getId()
    filesNum += 1
  }
  filesObj['filesNum'] = filesNum
  return filesObj
}
