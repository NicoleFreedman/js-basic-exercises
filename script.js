
// ***********************************************************FOR LOOPS
// Exercice 12 : Your favorite colors
// let colors = ["blue", "green", "white"];

// for (let i = 0; i < colors.length; i++) {
// 	console.log("My #" + (i+1) + " choice is " + colors[i]);
// }

// WHILE LOOPS
// Exercice 13 :

// let number = +prompt("Your number");

// while(number<10){
// 	number = prompt("Your new number");
// }

// ********************************************************ARRAYS
// Exercice 14 :
//  let people = ["Greg", "Mary", "Devon", "James"];

//  for (let i = 0; i < people.length; i++) {
//  	console.log(people[i]);
//  }

//  people.shift();
// console.log(people);

//  people.splice(2, 1, "Jason");
// console.log(people);

// people.push("Nicole");
// console.log(people);

// for (let i = 0; i < people.length; i++) {
// 	if(people[i]==="Mary"){
// 		console.log(people[i]);
// 	}
// }

// let newPeople = people.slice(1,3);
// console.log(newPeople);

// console.log(people.indexOf("Mary"));
// console.log(people.indexOf("Foo"));

// let last = people[people.length - 1];
// console.log(last);


// Exercice 15 :
//  let age = [20,5,12,43,98,55];
// // 1) Console.log the sum of all the elements of the array
// //  2) console.log just the even numbers
// //  3) Bonus: Return the largest number of the array
// let sum=0;
// let max=0;
// for (let i = 0; i < age.length; i++) {
// 	sum += age[i];	
// 	if(age[i]%2===0){
// 		console.log([age[i]]);
// 	}
// 	if(age[i]>max){
// 		max=age[i];
// 	}
// }
// 	console.log(sum);
// 	console.log(max);

// Exercice 16 :
// You know the infamous song “99 Bottle of Beer?”

// let bottles = +prompt("Enter a number of bottles of beer");
// let take_down=1;
// while (bottles > 1) {
// 	console.log(bottles + " bottles of beer on the wall\n" + bottles + " bottles of beer\n" + "Take " + take_down + " down, pass them around\n");	
// 	bottles -= take_down;
// 	take_down++;	
// }

// if(bottles<take_down){
// 	console.log("End");
// }
// if(bottles===1){
// 	console.log(bottles + " bottle of beer on the wall\n");
// }


// Exercise 17:
// jadenCase() --- Take a sentence and capitalize the first letter of each word

	// function jadenCase(sentence){
	//  	let newSentence = sentence.toLowerCase().split(" ");
	 	
	//  	for (let i = 0; i < newSentence.length; i++) {

 // 		newSentence[i] = newSentence[i].charAt(0).toUpperCase()+newSentence[i].slice(1);
 		
 // 	}
 // 		// console.log(newSentence.join(" "));
 // 		return newSentence.join(" ");
	// }
 	
	// jadenCase("take a sentence and YUGUYGvumjj the first hjGUn of each word");


	// Exercise 18:
	// Print A with stars
		//      *
		//    *   *
		//   *     *
		//  *       *
		//  *********
	//     *         *
	//    *           *


	// let row = 7;	
	// for (var i = 1; i <= row; i++) {
	// 		for (var k = 1; k <= (row-i); k++) {
	// 			document.write("&nbsp;");
	// 		}

	// 		for (var j = 1; j <= i; j++) {
	// 			document.write("* ");
	// 		}
	// 		document.write("<br>");
	// 	}
	


	// let rows = 7;	
	// for (var i = rows; i > 0; i--) {
	// 		for (var j = 1; j <= i; j++) {
	// 			document.write(" * ");
	// 		}
	// 		document.write("<br>");
	// 	}

// Exercise 19:
// Framed Sentence: The forest is lovely in the the spring
// ********
// * the *
// * forest *
// * is *
// ********

// let sentence = "The forest is lovely in the spring";
// let sentenceArray = sentence.split(" ");

// 	for (let i = 0; i < sentenceArray.length; i++) {
		
// 		document.write("* " + sentenceArray[i] + " *<br>");
			
// 	}
 		

// Exercise 20:
// Hangman
// _ A _ _ _
// X, A
// lives: 9

let letter = prompt("Choose a letter").toLowerCase();
let word = "hummus";

	for (let i = 0; i < word.length; i++) {
		word[i]
	}

	



