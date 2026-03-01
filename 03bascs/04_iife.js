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