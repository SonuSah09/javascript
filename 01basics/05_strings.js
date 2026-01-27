const name = "Sonu"
const repoCount = 5

// console.log(name + repoCount + " Value"); // Sonu5 value => not recommended to use this way as it's outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Sonu and my repo count is 5
console.log(`Hello, This is ${name} and i have around ${repoCount} repos on my channel`); // Hello, This is Sonu and i have around 5 repos on my channel


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));