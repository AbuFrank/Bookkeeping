/**
 * This function finds its containing folder
 * then counts the number of sibling files inside that folder
 */
function countPages_(files) {
  // Loop through each file and add them to fileNames[]
  var lastFile = undefined
  while (files.hasNext()) {
    var file = files.next()
    var fileName = file.getName()
    fileNames.push(fileName)
    lastfile = file
  }

  var regNum = fileNames.length
  return regNum, file
}
