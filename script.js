// მთავარ კონტენტზე გადასვლა
// Google Classroom
// Classroom
// BTU- Mentorship program
// Front-End Development
// 10 ლექცია
// Nino Sopoian
// •
// 4 სექ

// New Microsoft Word Document.docx
// Microsoft Word

// script.js
// JavaScript
// კლასის კომენტარები

// კლასზე კომენტარის დამატება…

// String Concatenation with Variables

// let myPet = "armadillo";
// console.log("I own a pet " + myPet + ".");

///////////////////////////
// შექმენი ცვლადი სახელად favoriteAnimal და მიანიჭე მას შენი საყვარელი ცხოველი.

// გამოიყენე console.log(), რომ კონსოლში დაბეჭდო: 'My favorite animal: ANIMAL'.
// გამოიყენე სტრინგის კონკატენაცია, რომ ANIMAL ჩანაცვლდეს favoriteAnimal ცვლადის მნიშვნელობით.
/////////////////////////////

// String Interpolation  , template literal

// const myPet = "არმადელო";
// const myCat = "ჯერი "
// console.log(`მე მყავს ${myPet} და ${myCat}.`);



// let myName = "Eka";
// let userName = "Lana";
// let myLestter = myName.slice(0, 1).toUpperCase();
// let myNameLength = myName.length;
// let endLetters = myName.slice(1, myNameLength).toLowerCase();
// console.log(`Hello, ${myLestter}${endLetters} and ${userName}.`);


// ჩემი დავალება ნინო მასწ

// let myName = "Eka";
// let userName = "Lana";
// let lestName = "Gvaramia";
// let userLestName = "Kapanadze";
// const userAge = "29";
// const myAge = "25";
// console.log(`hello, ${myName} ${lestName} and ${userName} ${userLestName}.`);
// console.log(`hello, ${myName.toUpperCase()} ${lestName.toUpperCase()} and ${userName.toUpperCase()} ${userLestName.toUpperCase()}.`);
// console.log(`age difference between me and ${userName} is ${userAge - myAge}.`);
// console.log(`my age is ${myAge} and ${userAge} is ${userName} age.`);





//////////////////////////////////

// შექმენი ცვლადი სახელად myName და მიანიჭე მას შენი სახელი.

// შექმენი ცვლადი სახელად myCity და მიანიჭე მას შენი საყვარელი ქალაქის სახელი.

// გამოიყენე ერთი template literal, რათა ჩასვა ეს ცვლადები წინადადებაში და დაბეჭდე console.log()-ით შემდეგი ფორმატით:







// როგორია? მგონი გამომივიდა

// const myName = "Nikolas-Sinan";
// const myLestName = "Amanatidi";
// const userName = "Toma";
// const userLestName = "Amanatidi";
// const myCity = "Zestafoni";
// let userCity = "Tbilisi";
// const myChildren = ["Nikolas-Sinan", "Toma"];
// console.log(`My name is ${myName} ${myLestName}. My favorite city is ${myCity} and ${userName} ${userLestName} favorite city is ${userCity}.`);
// console.log(`I love my children: ${myChildren[0]} and ${myChildren[1]}.`);




// My name is NAME. My favorite city is CITY.

///////////////////////////////////



// length property
////////////////////////////
// let myName = "Angela";
// console.log(myName.length);
//
// slice(start, end)

// let myName = "AngelaLLBN";
// console.log(myName.slice(0, 1)); // გამოიტანს "A"
// console.log(myName.slice(5, 6)); // გამოიტანს "a"
// console.log(myName.slice(0, 3)); // გამოიტანს "Ang"

// toUpperCase();
// let yourName = myName.toUpperCase();
// console.log(yourName);

// ეს მე დავწერე

// let myName = "Tinatin";
// let yourName =myName.toLowerCase();
// console.log(yourName);

// let myName = "Demetre";
// console.log(myName.slice(0,4));
// console.log(myName.slice(1,5));
// console.log(myName.slice(2,4));
// console.log(myName.slice(3,6));




// ///////////////
// შექმენი prompt, რომელიც სთხოვს მომხმარებელს სახელს.
// •	არ აქვს მნიშვნელობა, შემოიტანს დიდებით თუ პატარა ასოებით.
// •	შენ უნდა გაუგზავნო alert, მაგალითად: "Hello, Angela".
///////////////



//  მე შევადგინე ჩემო შვილების სახელზე

// let yourName = prompt("what is your name?")

// // let yourName = "Nikolas-Sinan";
// let firstletter = yourName.slice(0,1).toUpperCase();
// console.log(firstletter);

// let andletters = yourName.slice(1,7).toLowerCase();
// console.log(andletters);

// let tooletter = yourName.slice(8,9).toUpperCase();
// console.log(tooletter);

// let tooandletters = yourName.slice(9,13).toLowerCase();
// console.log(tooandletters);







// let yourName = prompt("what is your name?")

// // let yourName = "Nikolas-Sinan";

// let firstletter = yourName.slice(0,1).toUpperCase();
// console.log(firstletter);

// let andletters = yourName.slice(1,7).toLowerCase();
// console.log(andletters);

// let tooletter = yourName.slice(8,9).toUpperCase();
// let yourNameLength = yourName.length     //სიგრძე
// console.log(tooletter);

// let tooandletters = yourName.slice(9,13).toLowerCase();
// console.log(tooandletters);
// console.log(`"hello, ${firstletter}${andletters} and ${tooletter}${tooandletters}`);


// let yourName = prompt("what is your name?");

// // let myName = "Toma";

// let firstletter = yourName.slice(0,1).toUpperCase();
// console.log(firstletter);

// let andletters = yourName.slice(1,5).toLowerCase();
// console.log(andletters);
// console.log(`Hi, my darling ${firstletter}${andletters}`);





// სიგრძის დაზუსტება



// let yourName = prompt("what is your name?");

// // let myName = "Toma";

// let firstletter = yourName.slice(0,1).toUpperCase();
// // let yourNameLength = yourName.length;
// console.log(firstletter);

// let andletters = yourName.slice(1,5).toLowerCase();
// let yourNameLength = yourName.length;
// console.log(andletters);

// console.log(`Hi, my darling ${firstletter}${andletters}`);



// ლექციაზე დაწერილი


// let yourName = prompt("რა გქვია შენ?");
// // let yourName = "tinatin";
// let firstletter = yourName.slice(0, 1).toUpperCase();
// let yourNameLength = yourName.length;
// let endLetters = yourName.slice(1, yourNameLength).toLowerCase();
// console.log(`Hello, ${firstletter}${endLetters}`);











// რანდომიზაცია და კონტროლის ნაკადები.

// Math.random(). ეს ფუნქცია გენერირებს რიცხვს 0-ის და 0.999999… (16 ათწილადი) შორის. არასოდეს აღწევს 1-ს.
// Math.floor; დამრგვალება
//////////////////
// let n = Math.random();

// n = n * 6;
// n = Math.floor(n);
// console.log(n);
//ეს გვაძლევს რიცხვს 0–დან 5-მდე.
// n = n + 1;
///////////////////////////
//  Love Calculator.

// ორი prompt-ი, სადაც მომხმარებელი შეჰყავს ორი სახელი.
// იგნორირებთ სახელს და გამოთვლით რანდომულ პროცენტს 1–დან 100-მდე.
// შედეგი აჩვენეთ alert-ში: "Your love score is X%".
// let myName = prompt("It is main name?")


// სხვა მსგავსად რიცხვებზე

// let myName = prompt("what is my name?");
// // let myName = "Tinatin";
// let yourName = prompt("what is your name?");
// // let yourName = "alesandra"
// console.log(myName);
// console.log(yourName);


// let n = Math(random)
// n = 1,2,3 . . . 98,99,100




// სრულად ვერ გავიგე



// // ორი prompt-ი, სადაც მომხმარებელი შეჰყავს ორი სახელი
// let name1 = prompt("Enter first name:");
// let name2 = prompt("Enter second name:");

// // // სახელები არ გვჭირდება, უბრალოდ რანდომული პროცენტი ვაგენერიროთ
// let loveScore = Math.floor(Math.random() * 100) + 1;

// // // შედეგი alert-ში
// alert("Your love score is " + loveScore + "%");



// If Statement
///////////////////////
// ხშირად ჩვენ ამოცანას ვასრულებთ გარკვეული პირობის მიხედვით. მაგალითად:
// თუ ამინდი კარგია, მაშინ გარეთ გავალთ.
// თუ მაღვიძარა რეკავს, მაშინ გავთიშავთ.
// თუ დავიღალეთ, მაშინ დავიძინებთ.



// let weatherGood = false;

// if (true) {
//   console.log('This message will print!');
// }
// else {
//     console.log("This message will not print!");       
// }


// let weatherGood = false;

// if (weatherGood) {
//   console.log('This message will print!');
// }
// else {
//   console.log("This message will not print!");        
// }



// let weatherGood = false;
// let alarmRings = true;
// let tired = false;

// if (weatherGood) {
//   console.log("We will go outside!");
// }
// else if (alarmRings) {
//   console.log("We will turn off the alarm!");
// }
// else if (tired) {
//   console.log("We will sleep!");
// }
// else {
//   console.log("No conditions were met.");
// }

// if საკვანძო სიტყვა, რომელსაც მოსდევს მრგვალი ფრჩხილები (), და შემდეგ კოდის ბლოკი, ანუ {} ფიგურული ფრჩხილები.

// მრგვალ ფრჩხილებში () იწერება პირობა, რომელიც ფასდება როგორც true ან false.

// თუ პირობა true არის, მაშინ ფიგურულ ფრჩხილებში {} მოთავსებული კოდი შესრულდება.

// თუ პირობა false არის, ბლოკი არ შესრულდება.

// let sale = false;
// if (sale) {
//   console.log("Time to buy!");
// }
// else {
//       console.log("come to next time");
// }
///////////////
//////////////////////
// Else statement-ის წესები:

// else ყოველთვის უნდა იყოს დაკავშირებული if statement-თან — ერთად მათ ეწოდებათ if...else statement.

// else იწყება else საკვანძო სიტყვით და მოჰყვება { } ფიგურული ფრჩხილებით მოცული კოდის ბლოკი.

// ამ ბლოკში არსებული კოდი შესრულდება მხოლოდ მაშინ, თუ if statement-ის პირობა false-ზე ფასდება.
/////////////////////////
// if (true) {
//   console.log("The code in this block will not run.");
// } else {
//   console.log("But the code in this block will!");
// }

//  Conditional statements–  პირობითი განცხადებები –  if, რომლის მეშვეობითაც ვამოწმებთ გარკვეულ პირობას.

// Control Flow როდესაც კოდის მიმდინარეობას ვაკონტროლებთ არსებული მდგომარეობის მიხედვით.
// თუ პირობა true-ა, შესრულდება ერთი ნაწილი კოდის.
// თუ პირობა false-ა, მაშინ შესრულდება სხვა ნაწილი კოდის.

/////////////////////////////
// Toy train-ის მაგალითი – თუ რელსები თავისუფალია → მატარებელი გაივლის პირდაპირ.
// თუ რელსები დაკავებულია → მატარებელი შეუხვევს.

// let track = "დაკავებულია";
// if (track === "ცარიელია") {
//   console.log("წადი პირდაპირ");
// } else {
//   console.log("გადაუხვიე");
// }



// let track = "ცარიელია";
// if (track === "ცარიელია") {
//   console.log("წადი პირდაპირ");
// } else {
//   console.log("გადაუხვიე");
// }


////////////////////////
// შედარების ოპერატორები (comparison operators).
// მეტობა (>), ნაკლებობა (<) ან სამმაგი ტოლობა (===) —

// if ("oranges" === "oranges") {
//   console.log("yes");
// }
// else {
//   console.log("no");
// }













// 14,09,2025 

///////////////
// 1. მარტივი შედარება (>)
// const age = prompt("ასაკი")

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   alert("You are a minor.");
// }
////////////////////////
// Strict Equality (===)
// const password = "1234";

// if (password === "1234") {
//   console.log("Access granted!");
// } else {
//   console.log("Access denied!");
// }
//
//
//////////
// ლოგიკური ოპერატორები (logical operators)
///////////////////////
// AND (&&) — ორი პირობა ერთდროულად
// const score = 55;
// if (score >= 35 && score < 72) {
//   console.log("you are right");
// } else if (score > 30 && score <= 70) {
//   console.log("Your score is in the middle range.");
// } else {
//   console.log("Your score is out of the range.");
// }

//////////////////////////////////////////////////////////////////////////////////////
// 4. OR (||) — მინიმუმ ერთი პირობა
// const temperature = 35;

// if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Do some work.");
// }
//
///////////////
// NOT (!) — პირობის საწინააღმდეგო
// const isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log("Please log in first.");
// } else {
//   console.log("Welcome back!");
// }
///////////////
// 6. კომბინირებული პირობა (AND + OR)
// const age = 20;
// const hasTicket = true;

// if ((age >= 18 && age <= 65) || hasTicket) {
//   console.log("You can enter the event.");
// } else {
//   console.log("You are not allowed to enter.");
// }
//////////////////////
// savarjiSo
// გამოიყენე let, შექმენი ცვლადი სახელად hungerLevel და მიანიჭე მნიშვნელობა 7.

// დაწერე if...else პირობა შედარების ოპერატორის გამოყენებით. პირობა უნდა ამოწმებდეს, არის თუ არა hungerLevel მეტი 7ზე.

// თუ პირობა მართალია, კონსოლში უნდა გამოიტანოს: 'Time to eat!'.

// წინააღმდეგ შემთხვევაში, კონსოლში გამოიტანოს: 'We can eat later!'.

/////////////////

// გვაქვს ორი ცვლადი — mood და tirednessLevel.
// let mood = "sleepy";
// let tirednessLevel = 6;

//  შექმენი if...else პირობა, რომელიც შეამოწმებს, არის თუ არა mood–  'sleepy' და tirednessLevel მეტია 8-ზე.

// თუ ორივე პირობა არის true, კონსოლში გამოვიტანთ სტრინგს 'time to sleep'.

// წინააღმდეგ შემთხვევაში, გამოვიტანთ 'not bedtime yet'.
//
//

// რა მოხდება თუ && ოპერატორს შევცვლით ||, ხოლო === – ! ით?
////////////////////

// Truthy და Falsy

// როგორ იყოფა არა–ბულეან ტიპები, –– strings ან numbers, როცა ისინი გამოიყენება პირობაში.

//  შეიძლება გჭირდებოდეს შეამოწმო, აქვს თუ არა ცვლადს მნიშვნელობა.

// მაგალითი:

// let myVariable = 'I Exist!';

// if (myVariable) {
//    console.log(myVariable)
// } else {
//    console.log('The variable does not exist.')
// }

// რომელი მნიშვნელობები ითვლება falsy-ად:

// 0

// ცარიელი სტრინგი "" ან ''

// null (ცვლადი არ აქვს მნიშვნელობა)

// undefined (ცვლადი დეკლარირებულია, მაგრამ არ აქვს მნიშვნელობა)

// NaN (Not a Number)

// მაგალითი ნუმერულ მნიშვნელობებთან:

// let numberOfApples = 0;

// if (numberOfApples){
//    console.log('Let us eat apples!');
// } else {
//    console.log('No apples left!');
// }

// // Prints 'No apples left!'

// ამ შემთხვევაში პირობა აფასებს false, რადგან numberOfApples არის 0, რომელიც falsy მნიშვნელობაა, ამიტომ else ბლოკი შესრულდება.

//////////////////////////////

// სავარჯიშო
// შეცვალეთ wordCount-ის მნიშვნელობა ისე, რომ ის truthy იყოს. ეს მნიშვნელობა კვლავ უნდა იყოს ნუმერული.

// კონსოლში უნდა გამოისახოს: "Great! You've started your work!"
/////////
//
// let wordCount = 0;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log("Better get to work!");
// }

// შეცვალეთ favoritePhrase-ის მნიშვნელობა ისე, რომ ის კვლავ იყოს სტრინგი, მაგრამ falsy.

//  კონსოლში უნდა გამოისახოს: "This string is definitely empty."
// let favoritePhrase = "Hello World!";

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log("This string is definitely empty.");
// }

/////////////////////////

// Truthy და Falsy დავალება
// Truthy და falsy მნიშვნელობების გამოყენება იძლევა კოდში მოკლე, კომპაქტურ გამოხატვის შესაძლებლობებს.

// მაგალითად, თუ გვაქვს ვებგვერდი და გვსურს მომხმარებლის სახელის გამოყენება პერსონალიზებული მისალმებისთვის, ზოგჯერ მომხმარებელს ანგარიში არ აქვს და სახელის ცვლადი falsy იქნება.

// let username = '';
// let defaultName;

// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }

// console.log(defaultName);

// შეგვიძლია უფრო მოკლე ჩანაწერიც გამოვიყენოთ. short-circuit evaluation.

// let username = '';
// let defaultName = username || 'Stranger';

// console.log(defaultName);
//////////////////////









// სავარჯიშო
// კინოს ბილეთის ყიდვის სისტემა
// წარმოიდგინე, რომ ვებ-გვერდზე მომხმარებელს უნდა შეიყვანოს რომელი ფილმის ბილეთი უნდა იყიდოს.
// თუ მომხმარებელმა არაფერი შეიყვანა, ავტომატურად ავიღოთ ფილმი „Default Movie“.
// შემდეგ დავბეჭდოთ, რა ფილმის ბილეთი შეიძინა მომხმარებელმა.
// შემდეგ მომხმარებელი გადაწყვეტს ფილმის შეცვლას და ირჩევს "Inception"-ს.

// //
// let chosenMovie = "";
//
//
//
// console.log(`Ticket booked for: ${finalMovie}.`);
//////////////////////////////////////////////////////

//ტერნარი ოპერატორი if...else –ის  შემოკლებული ვარიანტი/
//
// condition ? valueIfTrue : valueIfFalse
//

//სტანდარტული მაგალითი
// let isNightTime = true;

// if (isNightTime) {
//   console.log("Turn on the lights!");
// } else {
//   console.log("Turn off the lights!");
// }

//
//
// შემოკლებული ვარიანტი
// isNightTime
//   ? console.log("Turn on the lights!")
//   : console.log("Turn off the lights!");
//////////////////////
// სავარჯიშო; შეცვალე ეს ჩანაწერი მოკლე ჩანაწერით
///
// let isLocked = false;

// if (isLocked) {
//   console.log("You will need a key to open the door.");
// } else {
//   console.log("You will not need a key to open the door.");
// }

// let isCorrect = true;

// if (isCorrect) {
//   console.log("Correct!");
// } else {
//   console.log("Incorrect!");
// }

// let favoritePhrase = "Love That!";

// if (favoritePhrase === "Love That!") {
//   console.log("I love that!");
// } else {
//   console.log("I don't love that!");
// }
/////////////////////////
// საუკეთესო პრაქტიკა (DO / AVOID)

// მარტივი, მოკლე ლოგიკა:
// const canVote = age >= 18 ? 'yes' : 'no';
// სასურველია ერთი და იგივე ტიპი დააბრუნონ
// const amount = hasDiscount ? 10 : 0; // ორივე number

// if...else — სტეიტმენტია (ბლოკი), კარგია მრავალ ხაზზე, მრავლ ხელსაწყოზე.

// ტერნარი — ექსპრესიაა (აბრუნებს მნიშვნელობას), კარგია მოკლე არჩევანებისთვის.
/////////////////////////////////
//
// Else If Statements
//
// let stopLight = "yellow";

// if (stopLight === "red") {
//   console.log("Stop!");
// } else if (stopLight === "yellow") {
//   console.log("Slow down.");
// } else if (stopLight === "green") {
//   console.log("Go!");
// } else {
//   console.log("Caution, unknown!");
// }

// სავარჯიშო
/// დაამატე else if პირობა, რომელიც ამოწმებს: season === "winter";
// და თუ პირობა შესრულდა გამოიტანე console.log("It's winter! Everything is covered in snow.");
// თუ fall ––– 'It\'s fall! Leaves are falling!
// თუ summer - It\'s sunny and warm because it\'s summer!

// let season = "summer";

// if (season === "spring") {
//   console.log("It's spring! The trees are budding!");
// } else {
//   console.log("Invalid season.");
// }
//////////////////////////

//
// //
// switch case
//
// else if სტეიტმენტები კარგია მაშინ, როცა რამდენიმე პირობას ამოწმებ.
// მაგრამ ხშირად გვიწევს იმდენად ბევრ მნიშვნელობას შევამოწმოთ, რომ else if სტრუქტურა რთულად წასაკითხი და გრძელდება.

// let groceryItem = "papaya";

// if (groceryItem === "tomato") {
//   console.log("Tomatoes are $0.49");
// } else if (groceryItem === "papaya") {
//   console.log("Papayas are $1.29");
// } else {
//   console.log("Invalid item");
// }
//
//
//

// switch გვაძლევს ალტერნატიულ, უფრო სუფთა და წაკითხვად სინტაქსს:

// let groceryItem = 'papaya';

// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break; //თუ break არ დაწერე, შესრულდება ყველა მომდევნო case, სანამ break ან default არ შეგხვდება — ამას fall-through ეწოდება.
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default: //default:// მუშაობს როგორც else.// თუ არცერთი case არ დაემთხვა, მაშინ შესრულდება default-ის კოდი.
//     console.log('Invalid item');
//     break;
// }
// // Prints: Papayas are $1.29
//
//////////////////////
// savarjiSo
// შექმენი პროგრამა, რომელიც სპორტსმენს მედალს გადასცემს მისი პოზიციის მიხედვით.

// დაწერე switch statement, სადაც athleteFinalPosition იქნება მთავარი expression.

// თითოეულ case-ში გამოუტანე შესაბამისი ტექსტი console.log-ით.

// არ დაგავიწყდეს break და default !

// switch statement-ის შიგნით დაამატე სამი case:

// პირველი case:

// ამოწმებს მნიშვნელობას 'first place'.

// თუ ემთხვევა, console.log() უნდა დაბეჭდოს:You get the gold medal!
// მეორე case:

// ამოწმებს მნიშვნელობას 'second place'.

// თუ ემთხვევა, console.log() უნდა დაბეჭდოს:

// You get the silver medal!
// მესამე case:

// ამოწმებს მნიშვნელობას 'third place'.

// თუ ემთხვევა, console.log() უნდა დაბეჭდოს:

// You get the bronze medal!

// 💡 არ დაგავიწყდეს break თითოეული console.log()-ის შემდეგ, რათა შემდეგ case-ები აღარ შესრულდეს.
// ახლა დაამატე default განყოფილება switch-ის ბოლოს, სადაც გამოიყენებ console.log()-ს ტექსტის დასაბეჭდად:

// 'No medal awarded.'
// გაიხსენე, რომ default-ის ბოლოშიც უნდა დაამატო break საკვანძო სიტყვა.
// script.js
// ნაჩვენებია script.js




// 11,09,2025




//  გამომივიდა ამოცანა დავალება 

//  👉 ამოცანა
//  შექმენი prompt, რომელიც მომხმარებელს სთხოვს ტექსტის შეყვანას.  შედეგი შეინახე ცვლადში, მაგალითად tweet.  შეამოწმე მისი სიგრძე tweet.length და შეინახე ცვლადშიtweetCount.  გამოიყენე alert გამოსატანად, 


// let myText = prompt ("Enter the text");

// let tweet =  myText;
// let myTextLength = myText.length;
// // console.log(tweet);



// console.log(myTextLength);
// console.log(tweet);




// ეს დაწერილი მაქვს ზედა ნაწილში

// თუ მომხმარებელმა ჩააკოპირა დიდი აბზაცი, ჩვენ გამოვიტანთ მხოლოდ 14 სიმბოლოს და დანარჩენს წავშლით.
// slice() – სტრინგის დაჭრა/ამოჭრა. /////./ სავარჯიშო
// შექმენი prompt, რომელიც სთხოვს მომხმარებელს სახელს.  არ აქვს მნიშვნელობა, შემოიტანს დიდებით თუ პატარა ასოებით.  შენ უნდა გაუგზავნო alert, მაგალითად: "Hello, Angela".  შედეგი უნდა იყოს ისე, რომ პირველი ასოდიდიიყოს, ხოლო დანარჩენი — პატარა. გაითვალისწინე მომხმარებელმა შეიძლება შეიყვანოს დიდი ასოებიც და პატარაც.
// დაიმახსოვრე:  დაშალე პრობლემა პატარა ნაბიჯებად.  გამოიყენე მხოლოდ ის ცოდნა, რაც უკვე ვისწავლეთ.

// const input = prompt("Enter your name:");

// if (input) {
//   const name = input.trim();
//   const formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
//   alert(`Hello, ${formatted}`);
//   console.log(`Hello, ${formatted}`);
// } else {
//   alert("You didn't enter a name.");
//   console.log("You didn't enter a name.");
// }




// ამოცანა kelvini


//////////////////////////////////////////////////////////////////////////კელვინის ამინდი
// მის მთისქვეშა მეტეოროლოგიურ ლაბორატორიაში გიჟმა მეცნიერმა კელვინმა სრულყოფილად აითვისა ამინდის წინასწარმეტყველება.ბოლო დროს კელვინმა დაიწყო ამინდის პროგნოზების გამოქვეყნება თავის ვებ–საიტზე.
// თუმცა, ერთი პრობლემა არსებობს: მისი ყველა პროგნოზი აღწერს ტემპერატურას კელვინში. ჩვენი JavaScript–ის ცოდნის გამოყენებით, მოდი გადავიყვანოთ კელვინი ცელსიუსში, და შემდეგ ფარენჰეიტში.
// კელვინის, ცელსიუსისა და ფარენჰეიტის თერმომეტრებიმაგალითად, 283 K გარდაიქმნება 10 °C–ად, რაც შემდეგ გარდაიქმნება 50 °F–ად.
// 1. დღევანდელი პროგნოზი არის 293 კელვინი. დასაწყისისთვის, შექმენი ცვლადი სახელად kelvin და მიანიჭე მას მნიშვნელობა 293. ცვლადის მნიშვნელობა ყოველთვის უცვლელი იქნება. ამიტომ შეარჩიე შესაბამისი ცვლადის ტიპი.
// 2. ცელსიუსი კელვინს ჰგავს — განსხვავება მხოლოდ ისაა, რომ ცელსიუსი 273–ით ნაკლებია კელვინზე.
// გადავიყვანოთ კელვინი ცელსიუსში: გამოვაკლოთ273 kelvin ცვლადს. შედეგი შეინახე ახალ ცვლადში, სახელად celsius. 3. გამოიყენე ეს ფორმულა ფარენჰეიტის გამოსათვლელად და პასუხი შეინახე ცვლადში სახელად fahrenheit:
// Fahrenheit = Celsius * (9/5) + 32
// შემდეგ ნაბიჯში, ჩვენ დავამრგვალებთfahrenheit-ში შენახულ რიცხვს. ამიტომ აირჩიე ცვლადის ტიპი, რომელიც შეცვლის საშუალებას გაძლევს.
// 4. როდესაც ცელსიუსს ფარენჰეიტში გარდაქმნი, ხშირად მიიღება ათწილადი რიცხვი. გამოიყენე Math.floor() მეთოდი (რომელიც არის ჩაშენებული Math ობიექტში) ფარენჰეიტის მნიშვნელობის დასამრგვალებლად ქვემოთ. შედეგი ისევ შეინახე ცვლადში fahrenheit. 5. გამოიყენე console.log რათა დაბეჭდო ტემპერატურა ფარენჰეიტში შემდეგი ფორმატით:
// The temperature is TEMPERATURE degrees Fahrenheit.
// 👉 აქ TEMPERATURE ჩანაცვლდება fahrenheit ცვლადის მნიშვნელობით.
// 6. გაუშვი შენი პროგრამა და ნახე შედეგი!
// 7. ცვლადების გამოყენებით, შენი პროგრამა უნდა მუშაობდეს ნებისმიერი კელვინის ტემპერატურისთვის — უბრალოდ შეცვალე kelvin-ის მნიშვნელობა და თავიდან გაუშვი პროგრამა.❓ რა იქნება 0 კელვინი ფარენჰეიტში?
// 12.შესანიშნავი სამუშაო! ახლა კელვინს შეუძლია გამოაქვეყნოს თავისი პროგნოზები ცელსიუსში და ფარენჰეიტში. 👉 თუ გინდა დამატებითი ვარჯიში, სცადე ეს:  გარდაქმენ ცელსიუსი ნიუტონის სკალაში შემდეგი ფორმულის გამოყენებით:
// Newton = Celsius * (33/100)  გამოიყენ Math.floor() მეთოდი ნიუტონის მნიშვნელობის დასამრგვალებლად ქვემოთ.
//  დაბეჭდე ნიუტონის ტემპერატურა კონსოლში console.log–ისა და string interpolation–ის გამოყენებით. 

// გასაგებია

// const kelvin = 293;
// let celsius = kelvin - 273;
// fahrenheit = celsius * (9/5) + 32;

// // console.log(kelvin);
// // console.log(celsius);
// // console.log(Fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// // console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");



// const kelvin = 0;
// let celsius = kelvin - 273;
// fahrenheit = celsius * (9/5) + 32;

// // console.log(kelvin);
// // console.log(celsius);
// // console.log(Fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// // console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");


// console.log(`The temperature is ${celsius} degrees Fahrenheit.`);

// // console.log("The temperature is " + celsius + " degrees Fahrenheit.");





// //////////////////////////////////////////
// ძაღლების ასაკი
// ძაღლები სწრაფად მატულობენ შედარებით ადამიანებთან. ხშირად ვამბობთ, რომ ძაღლის ასაკი შეიძლება გამოვთვალოთ “ძაღლის წლებად” (dog years), რათა გავითვალისწინოთ მათი ზრდა ადამიანთან შედარებით. გარკვეულწილად შეგვიძლია ვთქვათ, რომ დრო ძაღლებისთვის სწრაფად მიდის — 8 წელი ადამიანის ცხოვრებაში უდრის 45 წელს ძაღლის ცხოვრებაში.
// როგორ გადავაქციოთ ასაკი “ადამიანის წლებიდან” “ძაღლისწლებად”:
// 1. ძაღლის ცხოვრების პირველი ორი წელი ითვლება თითო 10.5ძაღლის წლად. 2. თითოეული შემდეგი წელი ითვლება 4 ძაღლის წლად. გადააკეთე შენი ადამიანის ასაკი ძაღლის წლებად.
// შექმენი ცვლადი სახელად myAge და მიანიჭე მას ასაკი რიცხვად.
// შექმენი ცვლადი სახელად earlyYears და შეინახე მასში მნიშვნელობა 2. ( გაითვალისწინე, რომ ეს ცვლადი შეიცვლება შემდგომ.)
// გამოიყენე გამრავლების ოპერატორი (*=) რათა earlyYearsგაამრავლო 10.5-ზე და შედეგი ისევ შეინახო earlyYears-ში.
// ვინაიდან პირველი ორი წელი უკვე გავითვალისწინეთ, ცვლადს – myAge გამოაკელი 2.
// შედეგად შექმენი ცვლადი laterYears, რომლის მნიშვნელობასაც შემდგომ შევცვლით.
// laterYears გაამრავლე 4-ზე, რათა გამოთვალო რამდენი ძაღლის წელი მოდის შენს შემდგომ წლებში. გამოიყენე *= ოპერატორი ერთ ნაბიჯში გამრავლებისა და გადანაწილებისთვის.
// თუ გინდა, ამ ეტაპზე შეამოწმე შენი მუშაობა და დაბეჭდე კონსოლში earlyYears და laterYears. შეესაბამება თუ არა მნიშვნელობები იმას, რასაც ელოდი?
// შეჯამე earlyYears და laterYears, და შეინახე შედეგი ცვლადში myAgeInDogYears. ახლა გამოვიყენოთ სტრიქონის მეთოდი.
// ჩაწერე შენი სახელი სტრიქონად, მიმართე მის .toLowerCase()მეთოდს და შეინახე შედეგი ცვლადში myName. toLowerCase() მეთოდი აბრუნებს სტრიქონს , მცირე ასოებით.დაწერე console.log სტატემენტი, რომელიც აჩვენებს შენს სახელს და ასაკს ძაღლის წლებად. გამოიყენე string interpolation, რათა დაბეჭდო შემდეგი წინადადება:
// My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
// ჩანაცვლება:  NAME → myName
//  HUMAN AGE → myAge
//  DOG AGE → myAgeInDogYears
// ახლა შეგიძლია ნებისმიერი ადამიანის ასაკი გადააქციო ძაღლის წლებად. სცადე შეცვალო myAge და ნახო შედეგი.
// თუ გინდა დამატებითი ვარჯიში, სცადე ამ პროექტის დაწერა *=ოპერატორის გარეშე.
// //////////////////////////



// // 1. ჩემი ასაკი
// let myAge = 42; // შეგიძლია შეცვალო შენი ასაკით

// // 2. პირველი ორი წელი
// let earlyYears = 2;
// earlyYears *= 10.5;

// // 3. შემდეგი წლები
// let laterYears = myAge - 2;
// laterYears *= 4;

// // 4. ჯამური ძაღლის წლები
// let myAgeInDogYears = earlyYears + laterYears;

// // 5. სახელი პატარა ასოებით
// let myName = "Tina".toLowerCase();

// // 6. შედეგის ტექსტი
// let result = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;

// // 7. გამოვიტანთ ორივეგან
// console.log(result); 
// alert(result);






















// /////////////////////////////////////////////////
// ვქმნით Love Calculator-ს.  ორი prompt-ი, სადაც მომხმარებელი შეჰყავს ორი სახელი.  იგნორირებთ სახელს და გამოთვლით რანდომულ პროცენტს 1–დან 100-მდე.  შედეგი აჩვენეთ alert-ში: "Your love score is X%".
// //////////
// ხომ არ იქნებოდა უკეთესი, თუ მომხმარებელს შევძლებდით მივცეთ სპეციალური მესიჯი იმის მიხედვით, თუ როგორი love score მიიღეს?ჩვენ გვაქვს loveScore, რომელიც რანდომულად იქმნება 1-დან 100-მდე.
// ჩვენ შეგვიძლია ეს ქულა შევამოწმოთ და მომხმარებელს სხვადასხვა მესიჯი ვაჩვენოთ.
// მაგალითად:  თუ ქულა 70-ზე მეტია, ვაჩვენოთ განსაკუთრებული მესიჯი. – You love each other like Kanye loves Kanye!  სხვა შემთხვევაში → ჩვეულებრივი მესიჯი. – Your love score is 40 %." (აქ მითითებული რიცხვი უნდა იყოს მომხარებლისთვის რანდომულად გამოჩენილი რიცხვი).
// //
// დამატებითი სავარჯიშო
//  1-დან 30-მდე → ერთი მესიჯი
//  31-დან 70-მდე → მეორე მესიჯი
//  71-დან 100-მდ

// პირველი ვარიანტი

// // Love Calculator
// // მომხმარებლისგან ორი სახელი
// let name1 = prompt("Enter the first name:");
// let name2 = prompt("Enter the second name:");

// // Love score რენდმულად 1–დან 100-მდე
// let loveScore = Math.floor(Math.random() * 100) + 1;

// // მესიჯების განსაზღვრა ქულის მიხედვით
// let message = "";

// if (loveScore >= 1 && loveScore <= 30) {
//   message = `Your love score is ${loveScore}%. Maybe you need to work on your relationship. 💔`;
// } 
// else if (loveScore >= 31 && loveScore <= 70) {
//   message = `Your love score is ${loveScore}%. There's some love here! 💕`;
// } 
// else if (loveScore >= 71 && loveScore <= 100) {
//   message = `Your love score is ${loveScore}%. You love each other like Kanye loves Kanye! 😍`;
// }
// // შედეგის ჩვენება alert-ით
// alert(message);




// Love Calculator - JavaScript only
// მომხმარებლისგან ორი სახელი
// let name1 = prompt("Enter the first name:");
// let name2 = prompt("Enter the second name:");

// // შეამოწმე, თუ სახელები შეიყვანა მომხმარებელმა
// if (!name1 || !name2) {
//   console.log("Please enter both names!");
// } else {
//   // Love score რანდომულად 1–დან 100-მდე
//   let loveScore = Math.floor(Math.random() * 100) + 1;
//   let message = "";
//   // მესიჯები ქულის მიხედვით
//   if (loveScore >= 1 && loveScore <= 30) {
//     message = `Your love score between ${name1} and ${name2} is ${loveScore}%. Maybe you need to work on your relationship. 💔`;
//   } else if (loveScore >= 31 && loveScore <= 70) {
//     message = `Your love score between ${name1} and ${name2} is ${loveScore}%. There's some love here! 💕`;
//   } else if (loveScore >= 71 && loveScore <= 100) {
//     message = `Your love score between ${name1} and ${name2} is ${loveScore}%. You love each other like Kanye loves Kanye! 😍`;
//   }

//   // შედეგის გამოქვეყნება console.log-ში
//   console.log(message);
// }
