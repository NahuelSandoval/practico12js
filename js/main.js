let animales = [
    'perros',
    'gatos',
    'gorriones',
    'patos',
    'loros',
    'vacas'
]

/* 
let i = 0
while (i <= 9){
    console.log('el valor de i' , i)
    i++
} 

let i = 100
while (i > 0) {
    if (i == 1) {
        console.log('queda', i, 'paso por caminar')
    } else {
        console.log('quedan', i, 'pasos por caminar')
    } i = i - 1
}


for(i=0 ; i<= 5; i++){
    console.log( i , 'es menor o igual a 5')
}

*/
animales.push('toros');
animales.push(prompt("ingrese un animal"))
//               | aca recorre el array hasta llegar a su largo maxim v
for (let i = 0; i < animales.length; i++) {
    let animal = animales[i];
    console.log(animal, 'tiene', animal.length, 'letras');
}
console.log(animales.length)

//no se por que en el alert solo se concatena con +
/* for(k=1; k<3 ; k++){
    let nombre = prompt('ingrese nombre')
    alert('señor ' + nombre + ' tiene el turno numero '+ k)
} 
*/

//aca la llave va dentro del parentesis
animales.forEach(function (animales) {
    console.log('los animales son', animales)
})

animales.forEach((animales) => {
    console.log('los animales con flecha son', animales)
})


//map-------------
let animalesDos = animales.map((animales) => animales + ' son animales')
console.log(animalesDos)
console.log(animales)


//find--------------
let encontrado = animales.find(animales => animales == 'loros');
console.log(encontrado)


//filtro----
let filtro = animales.filter((animal) => {
    return animal.length > 5
})
console.log(filtro, 'tienen mas de 5 letras')


//for of
for (let animalDos of animales){
    if (animalDos.length <= 5){
        console.log(animalDos + ' tiene 5 o menos letras')
    } else {
        console.log(animalDos + ' tienen mas de 5 letras')
    }
}

