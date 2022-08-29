let operatorsArray

if (localStorage.getItem('operatorsJSON') === null) {
    operatorsArray = 
    [operator1 = {
        name: 'Operator 1',
        realName: 'A. Miroslav',
        shiftleader: false,
        workday: [],
    },
    operator2 = {
        name: 'Operator 2',
        realName: 'B. David',
        shiftleader: true,
        workday: [],
    },   
    operator3 = {
        name: 'Operator 3',
        realName: 'B. Pavol',
        shiftleader: true,
        workday: [],
    },
    operator4 = {
        name: 'Operator 4',
        realName: 'C. Vladimir',
        shiftleader: false,
        workday: [],
    },
    operator5 = {
        name: 'Operator 5',
        realName: 'D. Matus',
        shiftleader: true,
        workday: [],
    },
    operator6 = {
        name: 'Operator 6',
        realName: 'G. Roman',
        shiftleader: true,
        workday: [],
    },
    operator7 = {
        name: 'Operator 7',
        realName: 'H. Michaela',
        shiftleader: false,
        workday: [],
    },
    operator8 = {
        name: 'Operator 8',
        realName: 'H. Patrik',
        shiftleader: false,
        workday: [],
    },
    operator9 = {
        name: 'Operator 9',
        realName: 'H. Andrej',
        shiftleader: false,
        workday: [],
    },
    operator10 = {
        name: 'Operator 10',
        realName: 'H. Pavol',
        shiftleader: true,
        workday: [],
    },
     operator11 = {
        name: 'Operator 11',
        realName: 'H. Milos',
        shiftleader: true,
        workday: [],
    },
    operator12 = {
        name: 'Operator 12',
        realName: 'J. Erik',
        shiftleader: false,
        workday: [],
    },
    operator13 = {
        name: 'Operator 13',
        realName: 'M. Milan',
        shiftleader: false,
        workday: [],
    },
    operator14 = {
        name: 'Operator 14',
        realName: 'M. Tomas',
        shiftleader: true,
        workday: [],
    },
    operator15 = {
        name: 'Operator 15',
        realName: 'P. Dominik',
        shiftleader: false,
        workday: [],
    },
    operator16 = {
        name: 'Operator 16',
        realName: 'S. Tomas',
        shiftleader: true,
        workday: [],
    },
    operator17 = {
        name: 'Operator 17',
        realName: 'Z. Jozef',
        shiftleader: false,
        workday: [],
    },
    operator18 = {
        name: 'Operator 18',
        realName: 'M. Ivan',
        shiftleader: false,
        workday: [],
    },
    operator19 = {
        name: 'Operator 19',
        realName: 'K. Patrik',
        shiftleader: false,
        workday: [],
    },
    operator20 = {
        name: 'Operator 20',
        realName: 'P. Fabian',
        shiftleader: false,
        workday: [],
    },
    operator21 = {
        name: 'Operator 21',
        realName: 'M. Matus',
        shiftleader: false,
        workday: [],
    }]
} else {
    operatorsArray = JSON.parse(localStorage.getItem('operatorsJSON'))
    console.log('local storage existuje')
}