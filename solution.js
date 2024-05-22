//1.sum of two numbers
function sum(num1, num2) {
    return num1 + num2;
}
 console.log(sum(3,2));
 
 //2.Return the next number from the number passed
 function nextNumber(number) {
    return number + 1;
}
console.log(nextNumber(1))

//3.Finds perimeter of a triangle
function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}
console.log(rectanglePerimeter(2, 5)); 

//4.Return something to me 
function returnSomethingToMe(str) {
    return "something " + str;
}

console.log(returnSomethingToMe("is better than nothing")); 

//5.Bob's BMI vs Jane's BMI
function greaterBMI(bobBMI, janeBMI) {
    if (bobBMI > janeBMI) {
        return "Bob";
    } else if (janeBMI > bobBMI) {
        return "Jane";
    } else {
        return "Equal";
    }
}
console.log(greaterBMI(30, 25)); 

//6.Basketball points
function basketBallPoints(twoPointers, threePointers) {
    return (2 * twoPointers) + (3 * threePointers);
}
console.log(basketBallPoints(1, 1)); 

//7.less than 100
function isSumMoreThan100(num1, num2) {
    return (num1 + num2) > 100;
}

console.log(isSumMoreThan100(25, 55)); 
console.log(isSumMoreThan100(60, 50)); 

//8.convert minutes to second
function convertToSeconds(minutes) {
    const seconds = minutes * 60;
    
    if (seconds === 1) {
        return '1 second';
    } else {
        return `${seconds} seconds`;
    }
}
console.log(convertToSeconds(5)); 

//9.greater among three
function greater(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(greater(2, 35, 9));  

//10.less among three
function least(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
console.log(least(2, 35,9));

//11.Football points
function footballPoints(wins, draws, losses) {
    const pointsForWins = wins * 3;
    const pointsForDraws = draws * 1;
    const pointsForLosses = losses * 0;
    return pointsForWins + pointsForDraws + pointsForLosses;
}
console.log(footballPoints(5, 0, 2));  

//12. even numbers
function isEven(number) {
    return number % 2 === 0;
}

// Logging all even numbers between 0 and 101
for (let i = 0; i <= 101; i++) {
    if (isEven(i)) {
        console.log(i);
    }
}








