// const grades = ["A", "B", "C", "D","E", "F","G","H","I","J"]
// const [Femi, Elvis, Kitan, Demola, Alex, Sidney,...rest]= grades
// console.log(Elvis);

// const person={
//     name: "Damola Cubana",
//     job: "Baller",
//     accBal: 3310,
// }
// const{accBal,name,job}=person
// console.log(accBal,name,job);

// const girlNames= ["Doyin","Catherine","Cleopatra","Amaka"]
// const boyNames= ["Sidney","Damola","Tehn","Tobi"]
// const everyone= [...girlNames,...boyNames]
// console.log(everyone);


// const countriesAfrica=["Egpyt","Nigeria","Jerusalem","Ghana","Togo","Cameroon","South Africa","Malta","Zimbakwe","Somali"]
// const countriesEurope=["Italy","Germany","England","Netherlands","Sweden","Denmark","Czech","Hungary","Ireland","Portugal"]
// const countriesAsia=["China","Thailand","Hong kong","Bangladesh","India","Malaysia","Indonesia","Phillipines","Vietnam","Afghanistan"]
// const continents=[...countriesAfrica,...countriesEurope,...countriesAsia]
// console.log(continents);

// const areaOfSquare=(a)=>{
//     return a**2
    
// }
// console.log(areaOfSquare(20));
 
// const areaOfCircle=(r)=>{
//     return Math.PI*r**2
// }
// console.log(areaOfCircle(10));

// const perimeterOfCircle=(r)=>{
//     return 2*Math.PI*r
// }

// console.log(perimeterOfCircle(5));

// const area = l => l**2
// area(10)
// console.log(area(10));


const paragragh= document.querySelector('p')
console.log(paragragh);

const allParagraphs= document.querySelectorAll('p')
console.log(allParagraphs);

const secondParagragh= document.getElementById('Odinaka spice')
console.log(secondParagragh);

const thirdParagraph= document.getElementsByClassName('Odinaka spice')
console.log(thirdParagraph);

document.querySelector('button').addEventListener('dblclick',()=> {
    alert('i need bobux')
})



