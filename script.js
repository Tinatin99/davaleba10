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

//////////////////////////////////

// შექმენი ცვლადი სახელად myName და მიანიჭე მას შენი სახელი.

// შექმენი ცვლადი სახელად myCity და მიანიჭე მას შენი საყვარელი ქალაქის სახელი.

// გამოიყენე ერთი template literal, რათა ჩასვა ეს ცვლადები წინადადებაში და დაბეჭდე console.log()-ით შემდეგი ფორმატით:

// My name is NAME. My favorite city is CITY.

///////////////////////////////////

// length property
////////////////////////////
// let myName = "Angela";
// console.log(myName.length);
// ////
// //slice(start, end)
// let myName = "AngelaLLBN";
// console.log(myName.slice(0, 1)); // გამოიტანს "A"
// console.log(myName.slice(5, 6)); // გამოიტანს "a"
// console.log(myName.slice(0, 3)); // გამოიტანს "Ang"

// toUpperCase();
// let yourName = myName.toUpperCase();
// console.log(yourName);

// ///////////////
// შექმენი prompt, რომელიც სთხოვს მომხმარებელს სახელს.
// •	არ აქვს მნიშვნელობა, შემოიტანს დიდებით თუ პატარა ასოებით.
// •	შენ უნდა გაუგზავნო alert, მაგალითად: "Hello, Angela".
///////////////

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

// //
// If Statement
///////////////////////
// ხშირად ჩვენ ამოცანას ვასრულებთ გარკვეული პირობის მიხედვით. მაგალითად:
// თუ ამინდი კარგია, მაშინ გარეთ გავალთ.
// თუ მაღვიძარა რეკავს, მაშინ გავთიშავთ.
// თუ დავიღალეთ, მაშინ დავიძინებთ.

// if (true) {
//   console.log('This message will print!');
// }
// else {

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
/////////////////
////////////////////////
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

////////////////////////
// შედარების ოპერატორები (comparison operators).
// მეტობა (>), ნაკლებობა (<) ან სამმაგი ტოლობა (===) —

// if ("apples" === "oranges") {
//   console.log("yes");
// }
// else {
//   console.log("no");
// }

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