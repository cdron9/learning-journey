Loops

revisit post study of arrays:



    
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true




For loops - creates a loop with 3 optional expressions:

                Expression 1 - is executed 1 time before the excution of teh code block
                Expression 2 - defines the condition for executing the code block
                Expression 3 - is executed every time after the code block has been executed

                for (let i = 0; i < 5; i++) {
                    console.log("The number is " + i)
                }
                
                Expression 1 sets a variable before the loop starts (let i = 0).
                Expression 2 defines the condition for the loop to run (i must be less than 5).
                Expression 3 increases a value (i++) each time the code block in the loop has been executed.
            

                Note that expression 1 is optional and can be omitted when the value has already been
                assigned before the loop

                Note that expression 2 is optional. if expression 2 returns 'True' the loop will restart.
                if false it will end

                Note that expression 3 is optional, i would imagibe commonly left out when values are changed
                within the code block





For in loops - loops through the properties of an object:
                
                to remember for when studied arrays. 
                forEach() method calls a function once for each array element

                syntax
                
                for (key in object) {
                    code 
                }




For Of loops - loops thorugh the values of an iterable object
                lets you loop over iterable data structures such as 
                Arrays, Strings, Maps, NodeLists, and more:

                syntax

        array   const cars = ["BMW", "Volvo", "Mini"];

                for (let car of cars) {
                console.log(car)
                }

                for of executes the array in order of placement, and because its a loop, outputs the string
                values in order. 
                basically going string 1 = " ".... etc 




While loops - these loop through a block of code as long as a specified condition is true 
                they are always checked in a boolean context
                falsy JS will convert ANY value into boolean: 

                Falsy rules = 

                false 
                0 
                "" (empty string)
                null 
                undefined
                NaN 

                everything else is Truthy





Do While loops - Do while loops are a variant of the while loop.
                    They execute a block of code if condition is true
                    before checking if the boolean value is still true. 
                    It will repeat the loop as long as the condition is true: 


                    Syntax

                    do {
                        //block of code
                     }
                    while (condition);




for in vs for of - within for in, x represents a key (index for arrays, name or object)
                    
                    within for of, x represents a value directly 

                    use for in when you need keys - property name or index, when you need both key and value

                    use for of when wanting values directly - also cleaner syntax when not needing or caring about the index

