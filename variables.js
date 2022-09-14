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

let dSLArray
let nSLArray

if (localStorage.getItem('sldJSON') === null) { dSLArray = [] } 
else { dSLArray = JSON.parse(localStorage.getItem('sldJSON')) }

if (localStorage.getItem('slnJSON') === null) { nSLArray = [] } 
else { nSLArray = JSON.parse(localStorage.getItem('slnJSON')) }

let myJSON
//Used colors
const hoverColor = 'red'
const white = 'white'
const paragrafColor = 'linear-gradient(to right, #bc4e9c, #f80759)'
const dayShiftBackgroundColor = 'linear-gradient(to right, #e0eafc, #cfdef3)'
const nightShiftBackgroundColor = 'linear-gradient(to right, #e0eafc, #cfdef3)'
const vacationBackgroundColor = 'linear-gradient(90deg, rgba(65,65,65,0.6727065826330532) 0%, rgba(124,124,124,0.7371323529411764) 100%)'
const freeShiftBackgroundColor = vacationBackgroundColor
const saturdayColor = 'rgba(209, 206, 226, 0.2)'
const sundayColor = 'rgba(209, 206, 226, 0.4)'
const holidayColor = 'rgba(127, 255, 212, 0.5)'
const currentDayColor = '#99ccff'
const shiftLeaderColor = '#666699'
const SLcellColor = 'linear-gradient(320deg, rgb(252, 208, 61) 0%, rgb(255, 231, 0) 100%)'

class NewElement {
    constructor(elType, attributeType, attributeName, content, appendTo) {
        this.elType = elType
        this.attributeType = attributeType
        this.attributeName = attributeName
        this.content = content
        this.appendTo = appendTo
    }
    createNewElement() {
        this.elType = document.createElement(this.elType)
        this.attributeType = $(this.elType).attr(this.attributeType, this.attributeName)
        this.content = this.elType.textContent = this.content
        this.appendTo = this.appendTo.appendChild(this.elType)
    }
}

const splitId = (element) => {
    return element.id.split(' ')
}
//Onload animation
$(document).ready(()=> {
    $('footer, #shiftplan-title, .mainGrid').slideDown(500);
})