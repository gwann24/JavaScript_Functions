console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0 || isNaN(count)) {
        console.log(`${count} is invalid input. Please enter a positive integer.`);
    } else {
        for (let i = 1; i <= count; i++) {
            if (i % 2 != 0) {
             console.log(i);
            };
        };
    };
};

printOdds(99);
printOdds("WTF?");
printOdds(-200);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function isLegal2Drive(userName, age) {
    if (userName == undefined || age == undefined) {
        console.log("Missing input, please make sure to provide a Name and Age.");
    } else {
        const aboveSixteen = `Congrats ${userName}, you can drive!`;
        const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
        if (age >= 16) {
            console.log(aboveSixteen);
        } else {
            console.log(belowSixteen);
        };
    };
};

isLegal2Drive("Roger",12);
isLegal2Drive("Susan",55);
isLegal2Drive("Jeffrey");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function findQuadrant(x, y) {
    let answer = "";
    if (isNaN(x) || isNaN(y)) {
        answer = `${x},${y} are invalid inputs. Please enter correct values.`;
    } else {
        answer = x === 0 ? `(${x},${y}) is on the y axis` : answer;
        answer = y === 0 ? `(${x},${y}) is on the x axis` : answer;
        answer = x > 0 && y > 0 ? `(${x},${y}) is in Quadrant 1` : answer;
        answer = x < 0 && y > 0 ? `(${x},${y}) is in Quadrant 2` : answer;
        answer = x < 0 && y < 0 ? `(${x},${y}) is in Quadrant 3` : answer;
        answer = x > 0 && y < 0 ? `(${x},${y}) is in Quadrant 4` : answer;
    };
    console.log(answer);
};

findQuadrant(0,8);
findQuadrant(8,0);
findQuadrant(1,3);
findQuadrant(-10,-8);
findQuadrant(3,-9);
findQuadrant(-2,5);
findQuadrant('a','b');

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isTriangle(s1, s2, s3) {
    let answer = `Sides ${s1}, ${s2}, ${s3}`;
    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        answer = `${answer} are invalid inputs.  Please enter correct values.`;
    } else {
        if (s1+s2 <= s3){
            answer = `${answer} make an invalid triangle`;
        } else {
            if (s1 === s2) {
                if (s1 === s3) {
                    answer = `${answer} make an equilateral triangle`;
                } else {
                    answer = `${answer} make an isosceles triangle`;
                };
            } else {
                if (s2 === s3) {
                    answer = `${answer} make an isosceles triangle`; 
                } else {
                    answer = `${answer} make a scalene triangle`;
                };
            };
        };
    };
    console.log(answer);
};

isTriangle(1,1,2);
isTriangle(3,3,3);
isTriangle(1,2,2);
isTriangle('a',3,5);
isTriangle(6,4,9);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function myDataPlan(limit, days, dataUsed) {
    let answer = "";
    const daysInMonth = 30;
    if (isNaN(limit) || isNaN(days) || isNaN(dataUsed)) {
        answer = `Data plan information contains invalid inputs.  Please enter correct values.`;
    } else {
        let avgAllowed = Math.round(limit/daysInMonth * 1000) / 1000;
        let avgUsed = Math.round(dataUsed/days * 1000) / 1000;
        answer = `${daysInMonth} day cycle, ${days} days used, ${daysInMonth - days} days remaining.\n`;
        answer = answer + `Average daily data allowed.....: ${avgAllowed} GB/day.\n`;
        answer = answer + `Your average daily data used...: ${avgUsed} GB/day.\n`;
        answer = answer + "Your current usage status......: ";
        if (avgUsed === avgAllowed) {
            answer = answer + "EXACT\n";
            answer = answer + "Normal usage, data plan at EoC.: 0 GB\n"
        } else {
            if (avgUsed > avgAllowed) {
                answer = answer + "OVER\n";
                answer = answer + `High usage, EXCEED data plan...: ${(limit - avgUsed * daysInMonth).toFixed(3) * -1} GB\n`
            } else {
                answer = answer + "UNDER\n";
                answer = answer + `Low usage, SURPLUS data plan...: ${(limit - avgUsed * daysInMonth).toFixed(3) } GB\n`
            };
        };
        answer = answer + `Data Usage Limit until EoC.....: ${((limit - dataUsed) / (daysInMonth - days)).toFixed(3) } GB\n`;
    };
    console.log(answer);
};

myDataPlan(100,15,56);
myDataPlan("one hundred",20,32);
myDataPlan(50,18,25);
myDataPlan(30,4,4);
