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
 thousand: "M"
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
		if (dNum > 900) {
			whole = 1;
			dNum -= 900;
			rStr = rStrCnst(rStr, 0, whole, 'thousands9');
		} else {
			whole = Math.floor(dNum/500);
			dNum %= 500;
			rStr = rStrCnst(rStr, 0, whole, "hundreds")
		}
	}
	if (dNum > 100 && !stdNum.includes(dNum)) {
		if (dNum > 400) {
			whole = 1;
			dNum -= 400;
			rStr = rStrCnst(rStr, 0, whole, "hundreds4");
		} else {
			whole = Math.floor(dNum/100);
			dNum %= 100;
			rStr = rStrCnst(rStr, 0, whole, "hundred")
		}
	}
    if ( dNum > 50 && !stdNum.includes(dNum)) {
    	if (dNum > 90) {
    		whole = 1;
    		dNum -= 90;
    		rStr = rStrCnst(rStr, 0, whole, 'ninty');
    	} else {	
        	whole = Math.floor(dNum/50);
        	dNum %= 50;
        	rStr = rStrCnst(rStr, 0, whole, "fifty");
    	}
    }
    if (dNum > 10 && !stdNum.includes(dNum)) {
    	if (dNum > 40) {
    		whole = 1;
    		dNum -= 40;
    		rStr = rStrCnst(rStr, 0, whole, 'forty');
    	} else {
        	whole = Math.floor(dNum/10);
        	dNum %= 10;
        	rStr = rStrCnst(rStr, 0, whole, "ten");
    	}
    	console.log(rStr)
    }
    if (dNum > 5 && !stdNum.includes(dNum)) {
        whole = Math.floor(dNum/5);
        dNum %= 5;
        rStr = rStrCnst(rStr, 0, whole, "five");
        //console.log(rStr)
    } 
    if (dNum < 4 && dNum && dNum != 1) {
		rStr = rStrCnst(rStr, 0, dNum, "one");
    }	
	if (stdNum.includes(dNum)){
		//console.log(rStr)
        rStr += rEquivalent(dNum, std, stdNum);
    }
	console.log(rStr)
	//console.log(e)
})(3999);