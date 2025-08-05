function myFunction() {
  var myData = [
    [],
    [-100.0],
    [0.0],
    [50.0],
    [1000],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
    [0.0],
  ]
  // get last non-zero value
  function removeZeros1() {
    for (i = 0; i < myData.length; i++) {
      Logger.log('i ==> ' + i)
      // check for first zero entry
      if (myData[i][0] == 0.0 && myData[i + 1][0] == 0.0) {
        Logger.log('found last zero')
        // we're at the end if the next entry is also zero
        lastVal = myData[i - 1]
        Logger.log('lastVal ==> ' + lastVal)
        break
      }
    }
  }
  function removeZeros2() {
    var valLength = myData.filter(function (val) {
      if (val[0] !== 0.0) {
        return val
      }
    }).length
    var lastVal = myData[valLength - 1]
    Logger.log(lastVal)
  }
  removeZeros1()
}
