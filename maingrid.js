const maingridContainer = document.querySelector('.mainGrid')
let falseArray = [false, false, false, false, false]
let [dayshift, nightshift, vacation, paragraf, freeshift] = falseArray

function controlPanelReset(id) {
    [dayshift, nightshift, vacation, paragraf, freeshift] = falseArray
    $('.controlPanel').children().css({'border-color': 'black' })
    document.getElementById(id).style.borderColor = 'chartreuse'
}

function setup(id) {
    switch (id) {
        case 'dayshift': controlPanelReset(id), dayshift = true
        break;
        case 'nightshift': controlPanelReset(id), nightshift = true
        break;
        case 'vacation': controlPanelReset(id), vacation = true
        break;
        case 'paragraf': controlPanelReset(id), paragraf = true
        break;
        case 'freeshift': controlPanelReset(id), freeshift = true
        break;
        default: ;
    }
}

//Click to invoke proper function shift

$(maingridContainer).children().click((event)=>{
    console.log('Clicked ID is ' + event.target.id)
    let clickedIdSplit = event.target.id.split(' ')
    if (clickedIdSplit[0] === 'Operator') {
        if (event.target.id){
            if (dayshift){
                dayshiftFunction(event)
            } else if (nightshift) {
                nightshiftFunction(event)
            } else if (vacation) {
                vacationFunction(event)
            } else if (paragraf) {
                paragrafFunction(event) 
            } else if (freeshift) {
                freeshiftFunction(event)
            }
        } 
    }

})

//Doubleclick to reset
$(maingridContainer).children().dblclick((event)=>{
    let clickedIdSplit = event.target.id.split(' ')
    if (clickedIdSplit[0] === 'Operator') {
        event.target.style.background = 'none'
        event.target.textContent = '-'
        event.target.style.color = 'white'
    }
})

//Invoked functions - tu budem davat podmienky a pristupovat k bunkam
function dayshiftFunction(event) {
    event.target.style.background = 'linear-gradient(to right, #e0eafc, #cfdef3)'
    event.target.textContent = 'D'
    event.target.style.color = 'black'
}

function nightshiftFunction(event) {
    event.target.style.background = 'linear-gradient(to right, #e0eafc, #cfdef3)'
    event.target.textContent = 'N'
    event.target.style.color = 'black'
}

function vacationFunction(event) {
    event.target.style.background = 'linear-gradient(to left, #bdc3c7, #2c3e50)'
    event.target.textContent = 'V'
    event.target.style.color = 'white'
}

function paragrafFunction(event) {
    event.target.style.background = 'linear-gradient(to right, #bc4e9c, #f80759)'
    event.target.textContent = 'P'
    event.target.style.color = 'white'
}

function freeshiftFunction(event) {
    event.target.style.background = 'linear-gradient(to left, #bdc3c7, #2c3e50)'
    event.target.textContent = '-'
    event.target.style.color = 'white'
}

//Keyboard Control Panel
document.addEventListener('keydown',(event)=>{

    switch(event.key){
        case 'd': setup('dayshift')
        break;
        case 'n': setup('nightshift')
        break;
        case 'v': setup('vacation')
        break;
        case 'p': setup('paragraf')
        break;
        case 'f': setup('freeshift')
        break;
        default: ;
    }
})