// more colors here https://github.com/shiena/ansicolor/blob/master/README.md
const GREEN_BG='\x1b[42m'
const BLUE_BG='\x1b[44m'
const RED='\x1b[31m'
const GREEN='\x1b[32m'
const DEFAULT='\x1b[39m'
const DEFAULT_BG='\x1b[49m'
console.log(`${RED}red`)
console.log(`${DEFAULT}sdsds sdsd sdds sd d`)
console.log(`${GREEN}green`)
console.log(`${DEFAULT}${GREEN_BG}green bg${DEFAULT_BG}`)
console.log(`${BLUE_BG}blue bg${DEFAULT_BG}`)
console.log(`${RED}${BLUE_BG}combined ${DEFAULT}${GREEN_BG} colors${DEFAULT_BG}dd`)
