/*
Q.1 Create three elements and fetch one using a tag name, another one using the class name, and
the last one using id. Display the data on the console and also change the content of the element
fetched via class name.
*/
       // HTML page

<!DOCTYPE html>
<html>
    <head>
       <title>

       </title>
    </head>
   <body>
       <h1>hello</h1>
       <h1>Hi</h1>
       
       <input type="text" placeholder="Enter anything" value="pankaj" class="inp"/>

       <h1 id="AB"> I am here</h1>

      <script src="start3.js"></script>
    </body>
</html>

//------------------------------------------------------------------------------------------

   //start3.js

   
//Fetch using a tag name

var ele=document.getElementsByTagName('h1');
console.log(ele);
ele[0].innerText="LetsUpgrade";
console.log(ele[0].innerText);




//Fetch using the class name

var a=document.getElementsByClassName('inp');
console.log(a);
console.log(a[0].value);



//Fetch using id
var b=document.getElementById('AB');
console.log(b);


//Display the data on the console and also change the content of the element
//fetched via class name.

a[0].value="dan";
console.log(a[0].value);