//Helper function to create a newly formatted date with the proper format
//Will take a date in the format "MM/MM/YYYY" and turn it into the format "YYYY-MM-DD"
function formatDate(date) {
  dateToString = String(date)

  const newDate = dateToString.split(" ") 
  let day = ""
  let month = ""
  const year = newDate[2]

  //Based on how the day is populated in the string, then a different value is pushed out so that it includes the 0 before the day if it's a single digit day 
  switch (newDate[1].slice(0,-1)) {
    case "1":
      day = "01"
      break;
    case "2":
      day = "02"
      break;
    case "3":
      day = "03"
      break;
    case "4":
      day = "04"
      break;
    case "5":
      day = "05"
      break;
    case "6":
      day = "06"
      break;
    case "7":
      day = "07"
      break;
    case "8":
      day = "08"
      break;
    case "9":
      day = "09"
      break;
    default:
      day = newDate[1].slice(0,-1)
  }

  //switch statement to return the correct number value for the month
  switch (newDate[0]) {
    case "January":
      month = "01"
      break;
    case "February":
      month = "02"
      break;
    case "March":
      month = "03"
      break;
    case "April":
      month = "04"
      break;
    case "May":
      month = "05"
      break;
    case "June":
      month = "06"
      break;
    case "July":
      month = "07"
      break;
    case "August":
      month = "08"
      break;
    case "September":
      month = "09"
      break;
    case "October":
      month = "10"
      break;
    case "November":
      month = "11"
      break;
    case "December":
      month = "12"
      break;
  }

  //Return the final date string in the correct format 
  const final = `${year}-${month}-${day} 00:00:00`
  return final
}


//Array to find each token's associated ID based on the key with their name
const assetID = {
  "BTC":"00000000000000029817",
  "ETH":"00000000000000029818",
  "BAT":"00000000000000029819",
  "BCH":"00000000000000029820",
  "LINK":"00000000000000029821",
  "LTC":"00000000000000029822",
  "AAVE":"00000000000000029823",
  "BAL":"00000000000000029824",
  "COMP":"00000000000000029825",
  "CRV":"00000000000000029826",
  "UNI":"00000000000000029827",
  "YFI":"00000000000000029828",
  "SNX":"00000000000000029829",
  "MKR":"00000000000000029830",
  "KNC":"00000000000000029831",
  "ZRX":"00000000000000029832",
  "UMA":"00000000000000029833",
  "FIL":"00000000000000029834",
  "REN":"00000000000000029835",
  "DOGE":"00000000000000029836",
  "SUSHI":"00000000000000029837",
  "MATIC":"00000000000000029838",
  "1INCH":"00000000000000029839",
  "MANA":"00000000000000029840",
  "FTM":"00000000000000029841",
  "ADA":"00000000000000029842",
  "DOT":"00000000000000029843",
  "XLM":"00000000000000029844",
  "SOL":"00000000000000029845",
  "SHIB":"00000000000000029846",
  "XTZ":"00000000000000029847",
  "ATOM":"00000000000000029848",
  "ALGO":"00000000000000029849",
  "AXS":"00000000000000029850",
  "AVAX":"00000000000000029851",
  "SAND":"00000000000000029852",
  "LRC":"00000000000000029853",
  "ENJ":"00000000000000029854",
  "LUNC":"00000000000000029855",
  "GALA":"00000000000000029856",
  "GRT":"00000000000000029857",
  "DAI":"00000000000000029858",
  "USDC":"00000000000000029859",
  "APE":"00000000000000029860",
  "AMP":"00000000000000029861",
  "CELO":"00000000000000029862",
  "CHZ":"00000000000000029863",
  "ANKR":"00000000000000029864",
  "DYDX":"00000000000000029865",
  "QNT":"00000000000000029866",
  "BNT":"00000000000000029867",
  "SKL":"00000000000000029868",
  "STORJ":"00000000000000029869",
  "CHR":"00000000000000029870",
  "BAND":"00000000000000029871",
  "COTI":"00000000000000029872",
  "CTSI":"00000000000000029873",
  "PAXG":"00000000000000029874",
  "NEAR":"00000000000000029875",
  "HBAR":"00000000000000029876",
  "ENS":"00000000000000029877",
  "OP":"00000000000000029878",
  "MASK":"00000000000000071795",
  "LDO":"00000000000000071796",
  "RNDR":"00000000000000071797",
  "XRP":"00000000000000077993",
  "EOS":"00000000000000130307",
  "ETC":"00000000000000130308",
  "ARB":"00000000000000140328",
  "USD":"00000000000000000000"
}