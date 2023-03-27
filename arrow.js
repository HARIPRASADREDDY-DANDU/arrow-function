'use strict';

const average = (round1,round2,round3) => (round1+round2+round3)/3;

const avgDol = average(4,4,4);
const avgKoa = average(2,2,2);

const checkWinner = function (avgDol ,avgKoa){
    if(avgDol >= 2 * avgKoa){
        console.log(`Dolphins won the match`);
    }
    else if(avgKoa  >= 2 * avgDol){
        console.log(`kolas won the match`);
    }
    else{
        console.log(`No oone one the match`);
    }
}
checkWinner(avgDol,avgKoa);
// console.log(avgDol ,avgKoa);

const years = new Array(1991,1990,1992,1993);
console.log(years)