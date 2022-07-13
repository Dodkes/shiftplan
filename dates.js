const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const operatorsArray = []
const sundayArray = []
const saturdayArray = []
let monthDays
let weekend
let getNextMonth = new Date().getMonth()+1
let gridColumns = ''


//GET FIRST DAY OF THE NEXT MONTH
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const firstDayOfTheMonth = new Date(new Date().getFullYear(), getNextMonth, 1)
const firstDay = firstDayOfTheMonth.getDay()
console.log('First day of NEXT month is ' + weekDays[firstDay])

let dayLoop = firstDay

const mainGridContainer = document.querySelector('.mainGrid')
const displayMonth = document.querySelector('#currentMonth')
currentMonth = month[getNextMonth]
displayMonth.innerHTML = currentMonth

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

//how many days has each month
console.log(currentMonth + ' has ' + monthDays + ' days')

//MAPPING WEEKENDS
switch (new Date().getDay()){
    default: weekend = 'Normal day'
    break;
    case 0: weekend = 'Sunday'
    break;
    case 6: weekend = 'Saturday'
    break;
}

console.log('is the weekend? ' + weekend)

//Main grid - day line
    function dayLineGrid (monthDays) {
        for (i = 0; i < monthDays; i++) {
            gridColumns += 'auto '
        }
        //jquery set columns according to loop above
        $('.mainGrid').css('grid-template-columns', gridColumns)

        for (i = 1; i < monthDays + 1; i++) {
            let monthDay = document.createElement('div')
            mainGridContainer.appendChild(monthDay)
            monthDay.textContent = i
            $(monthDay).attr('id', 'topLineDay ' + i)
        }

        for (i = 0; i < monthDays; i++) {
            let weekDay = document.createElement('div')
            $(weekDay).attr('id', 'topLineMonth ' + (i + 1))
            mainGridContainer.appendChild(weekDay)
            weekDay.textContent = weekDays[dayLoop].slice(0,3) //get first 3 letters of the day
            if (dayLoop == 6) {
                dayLoop = 0
            } else {
                dayLoop++
            }

            if (weekDays[dayLoop] === 'Sunday') {
                let saturdayDayNumber = weekDay.id.split(' ')
                sundayArray.push(saturdayDayNumber[1])
            }

        }
    }

    