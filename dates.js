const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const sundayArray = []
const saturdayArray = []
let monthDays
let getNextMonth = new Date().getMonth()+1
let gridColumns = ''

//GET FIRST DAY OF THE NEXT MONTH
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const firstDayOfTheMonth = new Date(new Date().getFullYear(), getNextMonth, 1)
const firstDay = firstDayOfTheMonth.getDay()
console.log('First day of NEXT month is ' + weekDays[firstDay])

if (getNextMonth == 12) { getNextMonth = 0 } //if its december, shiftplan generated for january next year

let dayLoop = firstDay

const mainGridContainer = document.querySelector('.mainGrid')
currentMonth = month[getNextMonth]
document.querySelector('#currentMonth').textContent = currentMonth

switch (currentMonth){
    case 'February': monthDays = 28, dayLineGrid(monthDays)
    break;
    case 'April': monthDays = 30, dayLineGrid(monthDays)
    break;
    case 'June': monthDays = 30, dayLineGrid(monthDays)
    break;
    case 'September': monthDays = 30, dayLineGrid(monthDays)
    break;
    case 'November': monthDays = 30, dayLineGrid(monthDays)
    break;
    default: monthDays = 31, dayLineGrid(monthDays)
}

//Main grid Top line only - day lines only
    function dayLineGrid (monthDays) {
        for (i = 0; i < monthDays; i++) {
            gridColumns += 'auto '
        }

        $('.mainGrid').css('grid-template-columns', gridColumns)

        for (i = 1; i < monthDays + 1; i++) {
            new NewElement('div', 'id', 'topLineDay ' + i, i, mainGridContainer).createNewElement()
        }

        for (i = 0; i < monthDays; i++) {
            let weekDayElement = new NewElement('div', 'id', 'topLineMonth ' + (i + 1), weekDays[dayLoop].slice(0,3), mainGridContainer)
            weekDayElement.createNewElement()
            let splitNewElementId = splitId(weekDayElement.elType)
            dayLoop === 6 ? dayLoop = 0 : dayLoop++
            if (dayLoop === 1) {
                sundayArray.push(splitNewElementId[1])
            }

            if (dayLoop === 0) {
                saturdayArray.push(splitNewElementId[1])
            }
        }
    }