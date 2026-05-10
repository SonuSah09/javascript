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
})
})

```