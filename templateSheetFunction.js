//Column A
function insertColumnA() {
  const dataRangeValues = templateSheet.getRange(`A10:A${maxDataRange}`).getValues()
  const final = []
  const column = 1

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column B values here 
function insertColumnB() {
  const dataRangeValues = templateSheet.getRange(`B10:B${maxDataRange}`).getValues()
  const final = []
  const column = 2

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column C values here 
function insertColumnC () {
  const dataRangeValues = templateSheet.getRange(`C10:C${maxDataRange}`).getValues()
  const final = []
  const column = 3

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column D values here 
function insertColumnD () {
  const dataRangeValues = templateSheet.getRange(`D10:D${maxDataRange}`).getValues()
  const final = []
  const column = 4

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column E values here 
function insertColumnE () {
  const dataRangeValues = templateSheet.getRange(`E10:E${maxDataRange}`).getValues()
  const final = []
  const column = 5

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column F values here 
function insertColumnF () {
  const dataRangeValues = templateSheet.getRange(`F10:F${maxDataRange}`).getValues()
  const final = []
  const column = 6

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column G values here 
function insertColumnG () {
  const dataRangeValues = templateSheet.getRange(`G10:G${maxDataRange}`).getValues()
  const final = []
  const column = 7

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column H Asset Values here
function insertColumnH() {
  const dataRangeValues = templateSheet.getRange(`C10:C${maxDataRange}`).getValues()
  const final = []
  const column = 8

  for (const item of dataRangeValues) {
    if(item[0] !== "") {
      final.push(assetID[item[0]])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Column I values here 
function insertColumnI () {
  const dataRangeValues = templateSheet.getRange(`I10:I${maxDataRange}`).getValues()
  const final = []
  const column = 9

  for (const item of dataRangeValues) {
    if (item[0] !== "") {
      final.push(item[0])
      final.push("")
      final.push("")
      final.push("")
    }
  }

  templateSheet.getRange(10, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Run all of the functions at once
function runAll() {
  insertColumnA()
  insertColumnB()
  insertColumnC()
  insertColumnD()
  insertColumnE()
  insertColumnF()
  insertColumnG()
  insertColumnH()
  insertColumnI()

  const formulaRange = templateSheet.getRange(`E10:E${maxDataRange}`)
  const formulaReferenceValues = formulaRange.getValues()


  //Iterate through all the values in column E, apply the formula based on the value displayed in column E
  for (let i = 0; i < formulaReferenceValues.length; i++) {
    if (formulaReferenceValues[i][0] !== '') {
      templateSheet.getRange(`J${10 + i}`).setFormula(`=IF(E${10+i} = "Buy","Sell","Buy")`)
    } 
  }
}




