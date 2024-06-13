const templateSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("1. Template")
const outputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2. Output");
const maxDataRange = 1000

//Get the final output and clean it 
function getUpdatedValues() {
  const dataRange = templateSheet.getRange(`A10:J${maxDataRange}`)
  const dataRangeValues = dataRange.getValues()

  return dataRangeValues
}

//Set this global variable of all the entries listed in the Template sheet
const updatedValues = getUpdatedValues()

//------FUNCTION TO DISPLAY THE ENTRY OUTPUTS ON THE SHEET--------//
//This function displays the STAT and USD values based on the values shown in the Template sheet
//----COLUMN C IN THE OUTPUT TAB//
function displayCurrency() {
  const column = 3
  
  let final = []
  
  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push("STAT")
      final.push("STAT")
      final.push("USD")
      final.push("USD")
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//This function displays the account name 
//------- COLUMN D IN THE OUTPUT TAB --------//
function displayAccountName() {
  const column = 4

  let final = []

  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push("Inventory (Error Control)")
      
      //This if loop is to account for the formula logic built out in the account_name column 
      if (item[1] === "LP1") {
        final.push("Due to/from LP1")
      } else if (item[1] === "LP2") {
        final.push("Due to/from LP2")
      } else if (item[1] === "LP3") {
        final.push("Due to/from LP3")
      }

      final.push("Inventory (Error Control)")

      if (item[1] === "LP1") {
        final.push("Due to/from LP1")
      } else if (item[1] === "LP2") {
        final.push("Due to/from LP2")
      } else if (item[1] === "LP3") {
        final.push("Due to/from LP3")
      }
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//This function displays the conversion_date column values
//------- Columns E, G, R, S in Output tab--------//
function displayDates() {
  //Assign the columns their own numbers to display to the sheet
  const conversion_date = 5
  const accounting_date = 7
  const trade_date = 18
  const value_date = 19

  const final = []

  for (let i = 0; i < updatedValues.length; i += 4) {
    if (updatedValues[i][0] !== "") {
      final.push(formatDate(updatedValues[i][0]))
      final.push(formatDate(updatedValues[i][0]))
      final.push(formatDate(updatedValues[i][0]))
      final.push(formatDate(updatedValues[i][0]))
    }
  }

  //Turn the date columns into plain text
  const conversionDateRange = outputSheet.getRange(`E2:E${maxDataRange}`)
  const accountingDateRange = outputSheet.getRange(`G2:G${maxDataRange}`)
  const tradeDateRange = outputSheet.getRange(`R2:R${maxDataRange}`)
  const valueDateRange = outputSheet.getRange(`S2:S${maxDataRange}`)

  conversionDateRange.setNumberFormat('@STRING@')
  accountingDateRange.setNumberFormat('@STRING@')
  tradeDateRange.setNumberFormat('@STRING@')
  valueDateRange.setNumberFormat('@STRING@')

  //display all the values to the sheet
  outputSheet.getRange(2, conversion_date, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));

  outputSheet.getRange(2, accounting_date, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));

  outputSheet.getRange(2, trade_date, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));

  outputSheet.getRange(2, value_date, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//This function displays the "company" information 
//----- Column H in Output Tab-----//
function displayCompany() {
  const column = 8
  
  let final = []
  
for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push("CSI")
      final.push("CSI")
      final.push("CSI")
      final.push("CSI")
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//This function displays the "company" information 
//----- Column I in Output Tab-----//
function displayBusinessUnit() {
  const column = 9
  
  let final = []
  
  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push("DISC")
      final.push("DISC")
      final.push("DISC")
      final.push("DISC")
    }
  }

  //display all the values to the sheet
  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//This function displays the natural_acct information
//------- COLUMN J IN THE OUTPUT TAB -----//
function displayNaturalAcct() {
  const column = 10

  const final = []

  //Set the values in the column to plain text so that the asset IDs get pasted in the proper format 
  const noPlainText = outputSheet.getRange(`J2:J${maxDataRange}`)
  noPlainText.setNumberFormat('@STRING@')


  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push("000000")
      final.push("000000")
      final.push("120325")
      final.push("201120")
    }
  }

  //display all the values to the sheet
  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//---------- COLUMN K IN THE OUTPUT TAB--------//
function displaySubAccount() {
  const column = 11

  let final = []

    //Set the values in the column to plain text so that the subaccount get pasted in the proper format 
  const noPlainText = outputSheet.getRange(`K2:K${maxDataRange}`)
  noPlainText.setNumberFormat('@STRING@')

  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push("BR00190X7USD")
      if (item[1] === "LP1") {
        final.push("BR00136L0USD")
      }

      if (item[1] === "LP2") {
        final.push("BR00135L1USD")
      }

      if (item[1] === "LP3") {
        final.push("BR00164L5USD")
      }

      final.push("BR00190X7USD")

      if (item[1] === "LP1") {
        final.push("BR00136L0USD")
      }

      if (item[1] === "LP2") {
        final.push("BR00135L1USD")
      }

      if (item[1] === "LP3") {
        final.push("BR00164L5USD")
      }
    } 
  }
    outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}


//------- Column L in Output Tab -------//
function displayAssetID() {
  const column = 12

  let final = []

  //Set the values in the column to plain text so that the asset IDs get pasted in the proper format 
  const noPlainText = outputSheet.getRange(`L2:L${maxDataRange}`)
  noPlainText.setNumberFormat('@STRING@')

  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push(item[7])
      final.push(item[7])
      final.push(item[7])
      final.push('00000000000000000000')
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));

}

//------- Column M in the Output Tab -------//
function displayPosition() {
  const column = 13

  let final = []

  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push('CP')
      final.push('CP')
      final.push('CP')
      final.push('CP')
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Output the debit values found 
//------ COLUMN N IN THE OUTPUT TAB ------//
function displayDebitValues() {
  const column = 14

  const final = []

  for (const item of updatedValues) {
    if (item[0] !== "") {

      if (item[4] === "Buy" || item[4] === "buy") {
        final.push(item[3])
      } else {
        final.push("")
      }

      if (item[4] === "Sell" || item[4] === "sell") {
        final.push(item[3])
      } else {
        final.push("")
      }

      if (item[4] === "Buy" || item[4] === "buy") {
        final.push(item[5])
        } else {
          final.push("")
        }
      
      if (item[4] === "Sell" || item[4] === "sell") {
        final.push(item[5])
      } else {
        final.push("")
      }
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));

}

//Output the credit values found 
//------ COLUMN O IN THE OUTPUT TAB ------//
function displayCreditValues() {
  const column = 15

  const final = []

  for (const item of updatedValues) {
    if (item[0] !== "") {
      if (item[4] === "Sell" || item[4] === "sell") {
        final.push(item[3])
      } else {
        final.push("")
      }

      if (item[4] === "Buy" || item[4] === "buy") {
        final.push(item[3])
      } else {
        final.push("")
      }

      if (item[4] === "Sell" || item[4] === "sell") {
        final.push(item[5])
        } else {
          final.push("")
        }
      
      if (item[4] === "Buy" || item[4] === "buy") {
        final.push(item[5])
      } else {
        final.push("")
      }
    }
  }
  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));

}

// ---------- Column P in the Outputs sheet ---------- //
function displayLineDescription() {
  const column = 16

  const final = []
  
  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push(`${item[6]} - ${item[4]} ${item[3]} ${item[2]} @ ${item[5]}`)
      final.push(`${item[6]} - ${item[9]} ${item[3]} ${item[2]} @ ${item[5]}`)
      final.push(`${item[6]} - ${item[4]} ${item[3]} ${item[2]} @ ${item[5]}`)
      final.push(`${item[6]} - ${item[9]} ${item[3]} ${item[2]} @ ${item[5]}`)
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}


//------- Column T in the Output tab --------//
function displayTransCode() {
  const column = 20

  const final = []

  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push(item[4].toUpperCase())
      final.push(item[9].toUpperCase())
      final.push(item[4].toUpperCase())
      final.push(item[9].toUpperCase())
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//-------- Column U in the Outputs sheet ------//
function displayLocationID() {
  const column = 21

  const final = []

  for (const item of updatedValues) {
    if (item[0] !== "") {
      final.push(item[8])
      final.push(item[8])
      final.push(item[8])
      final.push(item[8])
    }
  }

  outputSheet.getRange(2, column, final.length, 1).setValues(final.map(function (item) {
    return [item]
  }));
}

//Function that runs to display all the functions at once
function displayAll() {
  displayCurrency()
  displayAccountName()
  displayCompany()
  displayBusinessUnit()
  displayNaturalAcct()
  displaySubAccount()
  displayDates()
  displayAssetID()
  displayPosition()
  displayDebitValues()
  displayCreditValues()
  displayLineDescription()
  displayTransCode()
  displayLocationID()
}

//Clear the input entry values in the Template sheet
function clearValues() {
  const outputRange = templateSheet.getRange(`A10:J${maxDataRange}`)
  outputRange.clearContent()
}

//Clears the journal entries outputed in Output sheet
function clearOutputEntries() {
  const outputRange = outputSheet.getRange(`C2:V${maxDataRange}`)
  outputRange.clearContent()
}



