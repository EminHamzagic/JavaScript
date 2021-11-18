
// brojevi = prompt()

// lista_brojeva = brojevi.split(',')


// for (let x of lista_brojeva){
//     lista_brojeva[lista_brojeva.indexOf(x)] = parseInt(x)
    
// }

// for (let x of lista_brojeva){
//     if (x % 15 === 0){
//         lista_brojeva[lista_brojeva.indexOf(x)] = 'FizzBuzz'
//     }
//     else if (x % 3 === 0){
//         lista_brojeva[lista_brojeva.indexOf(x)] = 'Fizz'
//     }
//     else if (x % 5 === 0){
//         lista_brojeva[lista_brojeva.indexOf(x)] = 'Buzz'
//     }
// }

// console.log(lista_brojeva)



// var1 = document.getElementsByClassName('Box')

// console.log(var1)

navbar = 0 

function func(){
    navbar = document.getElementById('nav')
}

window.onload = func

window.onscroll = function(){
    if (window.scrollY > 640) {
        navbar.classList.add('nav_active')
    } else {
        navbar.classList.remove('nav_active')
    }
} 