"use strict";

const std = {
	   one: "I",
	  four: "IV",
	  five: "V",
	  nine: "IX",
	   ten: "X",
     forty: "XL",
     fifty: "L",
     ninty: "XC",
   hundred: "C",
 hundreds4: "CD",
  hundreds: "D",
thousands9: "CM",
 thousands: "m"
};
const stdNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

let rEquivalent = (dNum, stdObj, stdNum) => {
	// find if the num is defined in std and return its index
	let defined = stdNum.findIndex((thisVal) => {
		return thisVal === dNum;
	}, dNum);
	
	// use the index to obtain the value using bracket notation
	return std[Object.keys(std)[defined]];
}

let rStrCnst = (str, start, end, rE) => {
	for (let i = start; i < end; i++) {
		str += std[rE]
	}
    
	return str;
}

(function convertRoman(dNum){
    let rStr = "";
	let whole;
	



	if (dNum > 1000 && !stdNum.includes(dNum)) {
		whole = Math.floor(dNum/1000);
		dNum %= 1000;
		rStr = rStrCnst(rStr, 0, whole, "thousand")
	}
	if (dNum > 500 && !stdNum.includes(dNum)) {
		whole = Math.floor(dNum/100);
		dNum %= 500;
		rStr = rStrCnst(rStr, 0, whole, "5hundred")
	}
	if (dNum > 100 && !stdNum.includes(dNum)) {
		whole = Math.floor(dNum/100);
		dNum %= 100;
		rStr = rStrCnst(rStr, 0, whole, "hundred")
	}
    if ( dNum > 50 && !stdNum.includes(dNum)) {
        whole = Math.floor(dNum/50);
        dNum %= 50;
        rStr = rStrCnst(rStr, 0, whole, "fifty");
    }
    if (dNum > 10 && !stdNum.includes(dNum)) {
    	console.log(rStr)
        whole = Math.floor(dNum/10);
        dNum %= 10;
        rStr = rStrCnst(rStr, 0, whole, "ten");
    }
    if (dNum > 5 && !stdNum.includes(dNum)) {
        whole = Math.floor(dNum/5);
        dNum %= 5;
        rStr = rStrCnst(rStr, 0, whole, "five");
        //console.log(rStr)
    } 
    if (dNum < 5 && dNum && dNum != 1) {
    	//console.log(dNum)
		rStr = rStrCnst(rStr, 0, dNum, "one");
    }	
	if (stdNum.includes(dNum)){
		//console.log(rStr)
        rStr += rEquivalent(dNum, std, stdNum);
    }
	console.log(rStr)
	//console.log(e)
})(42);