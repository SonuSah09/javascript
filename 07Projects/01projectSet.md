# Projects related to DOM:

## project 1: color  switcher-- Solution code

```Javascript
 
// first we will select all the buttons and body using querySelectorAll and querySelector

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const bgBody = document.querySelector('body');
// console.log(bgBody);

// now we got nodeList of the buttons sop we can apply forEach loop to wrie conditions on the buttons.
// inside for each, for every item (i.e button), we are adding one eventListener method which will capture the click events on buttons.

buttons.forEach(function (item) {
item.addEventListener('click', function (e){
  console.log(e.target)
 
// Now we will add condition for each click event for these buttons:
if(e.target.id== 'grey'){
  bgBody.style.backgroundColor=e.target.id
}

if(e.target.id== 'white'){
  bgBody.style.backgroundColor=e.target.id
}

if(e.target.id== 'blue'){
  bgBody.style.backgroundColor=e.target.id
}

if(e.target.id== 'yellow'){
  bgBody.style.backgroundColor=e.target.id
}

//Note we can simplify without using the if conditions: just add below 1 condition--
// bgBody.style.backgroundColor=e.target.id

// We can aslo try using switch case: 
/*
 switch (e.target.id) {
     case e.target.id: bgBody.style.backgroundColor = e.target.id
         break;

     default:
        break;
} 
*/
})
})

```

## project 2 : BMI calculator -- solution code

``` javascript 
const myForm = document.querySelector('form');

myForm.addEventListener('submit', function (e){
  e.preventDefault(); // this is to prevent default action of form
const height = parseInt(document.querySelector('#height').value) // this will give the value of input given by user in for height and then parseInt is used to convert input into Number dataType

const weight = parseInt(document.querySelector('#weight').value) // this will give the value of input given by user in for weight and then parseInt is used to convert input into Number dataType
// Note: We are trying to get the values of user inpuut at th time of submit click event so we must write the code inside the form.addEventListener and not the outside as it will take empty values on load of page.
const results = document.querySelector('#results') // we are storing the result into one variable

// nopw we will check input conitions to avoid invalid inputs and once checks are passed we will write logic to calculate BMI: 
if(height=== '' || height < 0 || isNaN(height)){
  results.innerHTML=`Please enter a valid height ${height}`
} else if (weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML=`Please enter a valid weight ${weight}`
} else {
  const BMI = (weight / ((height * height) / 10000)).toFixed(2);
// now we will check the weight guide and as per condition, reslt will be shown:
  if(BMI < 18.6){
    results.innerHTML =` <span> Your BMI is : ${BMI} and You are Under Weight </span> ` 
    }else if(BMI > 24.9){
      results.innerHTML =` <span> Your BMI is : ${BMI} and You are Over Weight </span>`
    } else{
      results.innerHTML =` <span> Your BMI is : ${BMI}and Your BMI lies within normal range </span> `
        }
}

})

```