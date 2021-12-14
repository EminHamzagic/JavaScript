// broj1 = parseInt(prompt('Unesite 1. broj:'))

// broj2 = parseInt(prompt('Unesite 2. broj:'))


// if (broj1 % 3 === 0 && broj1 % 5 === 0){
//     console.log('FizzBuzz')
// }
// else if (broj1 % 3 === 0){
//     console.log('Fizz')
// }
// else if (broj1 % 5 === 0){
//     console.log('Buzz')
// }
// else {
//     console.log(broj1)
// }

// if (broj2 % 3 === 0 && broj1 % 5 === 0){
//     console.log('FizzBuzz')
// }
// else if (broj2 % 3 === 0){
//     console.log('Fizz')
// }
// else if (broj2 % 5 === 0){
//     console.log('Buzz')
// }
// else {
//     console.log(broj2)
// }





// broj = Math.floor(Math.random() * (50 - 1) + 1)

// pokusaj = parseInt(prompt('Unesite vrednost za koju verujete da je random broj jednak(od 1 do 20):'))

// if (pokusaj === broj){
//     alert('Pogodili ste broj!')
// }
// else if (pokusaj !== broj){
//     alert('Niste pogodili broj, random broj je bio ' + broj)
// }

// br_pokusaja = 5

// while (true){
//     pokusaj = parseInt(prompt('Unesite neki broj od 1 do 20, imate 5 pokusaja:'))
//     if (pokusaj === broj){
//         alert('Pogodili ste broj!')
//         break
//     }
//     else if (pokusaj > broj){
//         br_pokusaja -= 1
//         if (br_pokusaja === 0){
//             alert('Ostali ste bez pokusaja, broj je ' + broj)
//             break
//         }
//         alert('Broj je manji od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
//     }
//     else if(pokusaj < broj){
//         br_pokusaja -= 1
//         if (br_pokusaja === 0){
//             alert('Ostali ste bez pokusaja, broj je ' + broj)
//             break
//         }
//         alert('Broj je veci od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
//     }
// }






// start = parseInt(prompt('Unesi pocetak:'))

// end = parseInt(prompt('Unesi karj:'))

// brojevi = []

// zbir = 0

// for (let i = start; i < end; i++){
//     brojevi.push(i)
//     zbir += i
// }

// alert('Zbir brojeva u zadataom opsegu je ' + zbir)

// console.log(brojevi)
// console.log(zbir)







// start = parseInt(prompt('Unesi pocetak:'))

// end = parseInt(prompt('Unesi karj:'))

// brojevi = []

// for (let i = start; i <= end; i++){
//     brojevi.push(i)
// }

// for (i = 0; i < brojevi.length; i++){
//     if (brojevi[i] % 2 === 0){
//         brojevi[i] = 'paran'
//     }
//     else{
//         brojevi[i] = 'neparan'
//     }
// }

// console.log(brojevi)




// start = parseInt(prompt('Unesi pocetak:'))

// end = parseInt(prompt('Unesi karj:'))

// brojevi = []

// zbir = 0

// brojac = 0

// for (let i = start; i < end + 1; i++){
//     brojevi.push(i)
//     zbir += i
//     brojac += 1
// }

// alert('Aritmeticka sredina brojeva u zadataom opsegu je ' + (zbir / brojac))

// console.log(brojevi)
// console.log(zbir)


        
        
        
        
        
// happy_nums = []

// new_num = 0

// start = 4

// pocetniBroj = 1

// // limit = 5
// limit = parseInt(prompt('Unesite koliko happy numbera zelite da dobijete:'))

// while(true){
//     if (happy_nums.length === limit){
//         break
//     }
//     num = pocetniBroj
//     while(true){
//         for (j = 0; j < String(num).length; j++){
//             new_num += parseInt(String(num)[j]) ** 2
//         }
//         if (new_num === 1){
//             happy_nums.push(pocetniBroj)
//             new_num = 0
//             break
//         }
//         else if(new_num === start){
//             new_num = 0
//             break
//         }
//         num = new_num
//         new_num = 0
//     }
//     pocetniBroj++
// }

// console.log(happy_nums)





// function fixer(string){
//     return string[0].toUpperCase() + string.substr(1).toLowerCase()
// }

// str = prompt('Unesite neki string;')

// alert(fixer(str))







// sheeps = []

// for (let i = 0; i < 20; i++){
//     broj = Math.round(Math.random())
//     if (broj === 1){
//         sheeps.push(true)
//     }
//     else{
//         sheeps.push(false)
//     }
// }

// function countSheeps(array){
//     brojac = 0
//     for (let x of array){
//         if (x === true){
//             brojac++
//         }
//     }
//     return brojac
// }

// alert('Ima ' + countSheeps(sheeps) + ' ovaca')





// function elevatorDistance(array) {
//     let distance = 0
//     for (let i = 0; i < array.length - 1; i++){
//       if (array[i] > array[i + 1]){
//         distance += array[i] - array[i + 1]
//       }
//       else if (array[i] < array[i + 1]){
//         distance += array[i + 1] - array[i]
//       }
//       else{
//         continue
//       }
//     }
//     return distance
// }


// console.log(elevatorDistance([5, 2, 8]))



//------------------------------------------------------------------------------------

// function fiveAndGreaterOnly(arr) {
//   new_arr = arr.filter(function (el){
//     return el >= 5
//   })
//   return new_arr
// }

// console.log(fiveAndGreaterOnly([3, 6, 8, 2]))




// function evensOnly(arr){
//   new_arr = arr.filter(function (el){
//     return el % 2 === 0
//   })
//   return new_arr
// }

// console.log(evensOnly([3, 6, 8, 2])); 



// function fiveCharactersOrFewerOnly(arr) {
//   new_arr = arr.filter(function (el){
//     return el.length <= 5 
//   })
//   return new_arr
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]




// function peopleWhoBelongToTheIlluminati(arr){
//   new_arr =  arr.filter(function(el){
//     return el.member === true
//   })
//   return new_arr
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]




// function ofAge(arr){
//   new_arr = arr.filter(function(el){
//     return el.age > 18
//   })
//   return new_arr
// }
// // test
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]


// var button = document.getElementsByTagName('btn')

// button.addEventListener('click', () => {
//   alert('Imate ' + document.getElementsByTagName('option').length + ' opcija')
// })


const imageSrc = 'https://crocoder.dev/icon.png';
var div = document.getElementById('div');

var img = document.createElement('img');

img.src = imageSrc;

div.appendChild(img);