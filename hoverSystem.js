let leftPanelSelectedId
let topPanelDaySelectedId
let topPanelMonthSelectedId

$('div').hover((event)=>{
    let selectedId = event.target.id
    let newId = selectedId.split(' ')

    if (newId[0] === 'Operator') {
        leftPanelSelectedId = document.getElementById('line ' + newId[1])
        topPanelDaySelectedId = document.getElementById('topLineDay ' + newId[2])
        topPanelMonthSelectedId = document.getElementById('topLineMonth ' + newId[2])
        topPanelDaySelectedId.style.color = '#ff6600'
        leftPanelSelectedId.style.color = '#ff6600'
        topPanelMonthSelectedId.style.color = '#ff6600'
    }


}, ()=>{
    topPanelDaySelectedId.style.color = 'white'
    leftPanelSelectedId.style.color = 'white'
    topPanelMonthSelectedId.style.color = 'white'
})

stylingWeekends()
function stylingWeekends() {
    for (let x = 0; x < sundayArray.length; x++) {
        styleWeekend(x)
    }
}

function styleWeekend(x) {
    for (let i = 1; i < operatorsArray.length +1; i++) {
        let y = document.getElementById('Operator ' + i + ' ' + sundayArray[x])
        y.style.backgroundColor = '#666699'
    }
}