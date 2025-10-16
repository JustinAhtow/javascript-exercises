const sumAll = function(a, b) {

    let finalSum = 0;

    for(let i = a; i <= b; i++) {
        finalSum += i;
    }

    return finalSum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
