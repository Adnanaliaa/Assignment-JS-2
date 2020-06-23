// Chapter 21-25

// Task 01
// var firstName= prompt("Enter you first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName + lastName
// alert ( fullName )

//Task 02
// var i = prompt("Enter your favorite mobile phone model");
// var n = i.length;
// alert ( "My favorite phone is:" + i + "Lenght of strings:" + n )

//Task 03
// var i = "I am Pakistani";
// var n = i.indexOf("n");
// alert ("String:"  +  i  +   "\nIndex of'n'"  + n )

//Task 04
// var i = "Hello World";
// var n = i.lastIndexOf("");
// alert ("String:"  +  i  +   "\nIndex of'n'"  + n )

//Task 05
// var i = "Pakistan";
// var n = i.substring(3,4);
// alert( "String:"  +  i  +   "\nCharachter at index 3rd:"  + n  )

//Task 06
// var firstName= prompt("Enter you first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName.concat (lastName) 
// alert ( fullName )

//Task 07
// var i = "Hydrabad";
// var rep = i.replace("Hydr", "Islam");
// alert ( "City:" + i + "\nAfter Replacement:" + rep  )

//Task 08
// var i = ("Ali & Sami are best friends.They play cricket & football together")
// var rep = i.replace("&", "and");
// alert ( i + "\n var message=" + rep  )

//Task 09
// var i = parseInt("472")
// var num = 472
// var n = num.toString();
// alert ("Value:" + i + "\n Type: String" + "\nValue:" + n + "\n Type: Number" )

//Task 10
// var userInput = "peanuts"
// var upper = userInput.toUpperCase()
// alert ( "User input:" + userInput + "\n \nUpper case:" + upper )

//Task 11
// var i = "helloworld!";
// var n = i.toTitleCase();
// alert ( n )

//Task 12
// var i = (35.36);
// var n = i.toString();
// alert(n.replace("." , ""))

//Task 13
// var i = prompt("Enter a valid username")

//Task 14
// var i = prompt("")
// var a = ["apple pie", "cookie", "chips", "patties", "cake"]


//Chapter 26-30
//Task 01
// var num = 3.45214
// a alert (num)

// b alert (Math.round (num))

// c alert (Math.floor(num))

// d alert (Math.ceil(num))

//Task 02
// var num = -2.673
// a alert (num);

// b alert (Math.round (num));

// c alert (Math.floor(num));

// d alert (Math.ceil(num))

// //Task 03
// var i = parseInt(prompt('Enter value in number'));
// alert (`The absolute value of ${i} is ${Math.abs (i)}`)

// //Task 04
// var i =  Math.floor(Math.random() * (6)) + 1;
// alert( "random dice value : " + i)

//Task 05
// var i = Math.floor(Math.random() * 2) + 1;
// console.log(i)
// var arr = ['','Heads', 'Tails'];

// alert("random dice value : " + arr[i])

//Task 06    
// var i =  Math.floor(Math.random() * (100)) + 1;
// alert( "random number between 1 and 100: " + i)

//Task 07
// var i = prompt("Enter your weight in kiolgram")
// alert (`The weight of user is ${i}`)

//Task 08
// var i =  Math.floor(Math.random() * (10)) + 1;
// var userNum = parseInt(prompt("Enter a Number between 1 and 10"))

// if(userNum < 0){
//     alert('try again your value is less than zero')
// }else if(userNum >10){
//     alert('try again your value is Grater than ten')
// } else if( i === userNum){
//     alert('Congratulation!')
// }else {

//     alert('Please try again')}

//Chapter 31-34
//Task 01
// var i = new Date()
// alert (i)

//Task 02
// var i = new Date()
// var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// alert ("Current month : " months[i.getMonth()])

//Task 03
// var i = new Date()
// var today = ['Sun','Mon','Tue','Wed','Thus','Fri','Sat'];
// alert ("Today is : " +today[i.getDay()])

//Task 04
// var i = new Date()
// var today = ['It's Fun Day','Mon','Tue','Wed','Thus','Fri','It's Fun Day'];
// alert ("Today is : " +today[i.getDay()])

//Task 05
// var i = new Date()
// if(i.getDate() <15){
//     alert('First fifteen days of the month')
// }else {
//     alert('last days of the month')
// }

//Task 06
// var nDate = new Date()
// var i = nDate.getTime()
// var min = i / 60000
//  console.log (i , min)

//Task 07
// var i = new Date();
// var h = i.getHours();

// if(h <12){
//     alert(`It's AM`)
// }else {
//     alert(`It's PM`)
// }

//Task 08
// var i = new Date();
// i.setDate(0);
// alert (i)

//Task 09
// var i = new Date ("2020-04-24");
// var c = new Date ()
// var r = c - i
// var d = (r / (60*60*24*1000))

// alert (Math.round(d) + " Days have passed Since 1st Ramadan,2020")