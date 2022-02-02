// code your solution here
 function saturdayFun (activity = "roller-skate"){
     return `This Saturday, I want to ${activity}!`;
 }

function mondayWork (work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbol = "*"){
    return function (phrase = "special") {
        return `You are ${symbol}${phrase}${symbol}!`
    }
}

