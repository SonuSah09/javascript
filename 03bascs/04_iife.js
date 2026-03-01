// Immediately Invoked Function Expressions (IIFE)

// Syntax 1: 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // NOTE: If we have to write 2 IIFE functions then we musrt separate it using semicolon ";" otherwise it will throw error

// Syntax 2:
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sonu')
// this was unnamed/simple iife.

/* NOTES: 
Immediately Invoked Function Expressions (IIFE): the secret sauce for encapsulating code and maintaining a clean global scope. 
In this video, you'll uncover the power of IIFEs and how they can enhance code organization, protect variables, and prevent naming 
collisions. Whether you're a seasoned developer or just starting out, understanding and utilizing IIFEs will level up your 
JavaScript skills. Get ready to dive into this transformative concept and supercharge your coding prowess!

SUMMARY :

1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
4.We can use parameter inside first parentheses.
5. To write two or multiple IIFE one should be end with semicolon ;

*/