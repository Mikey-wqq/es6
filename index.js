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


// const paragragh= document.querySelector('p')
// console.log(paragragh);

// const allParagraphs= document.querySelectorAll('p')
// console.log(allParagraphs);

// const secondParagragh= document.getElementById('Odinaka spice')
// console.log(secondParagragh);

// const thirdParagraph= document.getElementsByClassName('Odinaka spice')
// console.log(thirdParagraph);

// document.querySelector('button').addEventListener('dblclick',()=> {
//     alert('i need bobux')
// })

// const greetings = (name) =>  {
//     return `hello ${name}`
// }
// console.log(greetings('damola cubana'));

// const sentence = (name,job,school,product) => {
//     return `my name is ${name} i am a ${job} i graduated from ${school} i offer ${product} `
// }
//  console.log(sentence('sidney','game developer','GMC','roblox'));
//  console.log(sentence('ayo','software developer','GMC','fintech app'));
  

 
//  const inec = (age) => {
//    age >= 18? console.log('you can vote') : console.log("you are to young to vote");
      
//  }
//  inec(13)
//  inec(123)

//  function inectwo (age){
//     if(age>= 18){
//         console.log('you can vote');
        
//     }else{
//         console.log("you can't vote");
        
//     }
// } 
// inectwo(15)
// inectwo(150)


// Define dishes
const dishes = ['jollof rice', 'amala', 'pounded yam', 'fried rice', 'eba', 'beans', 'pasta', 'cake', 'pie', 'semo'];
// Destructure the first few elements and store the rest
const [Ehis, Damola, Sidney, ...restFromDishes] = dishes;
console.log('Rest from dishes:', restFromDishes);

// Define drinks
const drinks = ['coke', 'fanta', 'sprite', 'water', 'juice', 'wine'];

// Combine dishes and drinks into a single menu
const combinedMenu = [...dishes, ...drinks];

// Log outputs
console.log('Dishes:', dishes);
console.log('Drinks:', drinks);
console.log('Combined Menu:', combinedMenu);






// const staff =[
//     {
//         name: 'ayo',
//         salary: 250000,
//     },
//     {
//         name: 'ehis',
//         salary: 250000,
//     },
//     {
//         name: 'khitan',
//         salary: 250000,
//     },
//     {
//         name: 'demola',
//         salary: 250000,
//     },
//     {
//         name: 'oni',
//         salary: 250000,
//     },
// ]
// const  khitan = staff.find((employee => employee.name === 'khitan'));
// console.log(khitan);

// const ayo = staff.find(employee => employee.salary === 250000)
// console.log(ayo);

 
// const customers = [
//     {
//  name: 'daniel',
//  phone: 9922929929,
//  email:'example@gmail.com',
//  married: false,
//  numberOfChildren: null,
//  homeAddress:"Iyana paja",
//  nin:7200201891,

//     },
//     {
//         name: 'daniel',
//         phone: 9922929929,
//         email:'example@gmail.com',
//         married: false,
//         numberOfChildren: null,
//         homeAddress:"Iyana paja",
//         nin:7200201891,
       
//            },
//            {
//             name: 'daniel',
//             phone: 9922929929,
//             email:'example@gmail.com',
//             married: false,
//             numberOfChildren: null,
//             homeAddress:"Iyana paja",
//             nin:7200201891,
           
//                },
//                {
//                 name: 'alex',
//                 phone: 9922929929,
//                 email:'example@gmail.com',
//                 married: false,
//                 numberOfChildren: null,
//                 homeAddress:"Iyana paja",
//                 nin:7200201211,
               
//                    },
//                    {
//                     name: 'OdinakaSpice',
//                     phone: 9922929929,
//                     email:'example@gmail.com',
//                     married: false,
//                     numberOfChildren: null,
//                     homeAddress:"Iyana paja",
//                     nin:7200201892,
                   
//                        },
// ]
// const daniel = customers.find(employee => employee.nin===7200201891)
// console.log(daniel);

// const alexposition = customers.findIndex(employee => employee.nin===7200201211)
// console.log(alexposition);

// const OdinakaSpicePosition = customers.findIndex(employee => employee.nin===7200201892)
// console.log(OdinakaSpicePosition);

// customers.forEach((customer) => (
//     returnv console.log(`${customers.name} has ${customers.numberOfChildren} children`);
    
// ))


// const staff =[
//     {
//         name: 'ayo',
//         salary: 250000,
//     },
//     {
//         name: 'ehis',
//         salary: 180000,
//     },
//     {
//         name: 'khitan',
//         salary: 140000,
//     },
//     {
//         name: 'demola',
//         salary: 100000,
//     },
//     {
//         name: 'oni',
//         salary: 60000,
//     },
// ]

// const updatedSalaries = staff.map((employee) => {
//     return {
//         name: employee.name,
//         salary: employee.salary*1.3

//     }
// })
// console.log(updatedSalaries);


// const highEarners = staff.filter((employee) => {
//     return employee.salary >= 100000
    
// })
// console.log(highEarners);
