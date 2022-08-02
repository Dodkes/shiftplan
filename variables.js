//Dates
const holidays = {
    january: [1, 6],
    may: [1, 8],
    july: [5],
    august: [29],
    september: [1, 15],
    november: [1, 17],
    december: [24, 25, 26]
}
let editorMode = false
let date = new Date
//Used colors
const white = 'white'
const paragrafColor = 'linear-gradient(to right, #bc4e9c, #f80759)'
const dayShiftBackgroundColor = 'linear-gradient(to right, #e0eafc, #cfdef3)'
const nightShiftBackgroundColor = 'linear-gradient(to right, #e0eafc, #cfdef3)'
const vacationBackgroundColor = 'linear-gradient(90deg, rgba(65,65,65,0.6727065826330532) 0%, rgba(124,124,124,0.7371323529411764) 100%)'
const freeShiftBackgroundColor = vacationBackgroundColor
const saturdayColor = 'rgba(209, 206, 226, 0.2)'
const sundayColor = 'rgba(209, 206, 226, 0.4)'
const holidayColor = 'rgba(127, 255, 212, 0.5)'
const currentDayColor = '#66ccff'
const shiftLeaderColor = '#666699'