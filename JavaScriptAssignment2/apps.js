//1.Write a function that creates a closure and returns a function that can add
//  a specific number to any number passed to it. For example, if the closure
//   is created with 5, the returned function should add 5 to any number 
//   passed to it.
// function funOut(abc){
//     return function(def){
//    console.log( abc + def);
//     }
// }
// let outerFun=funOut(5)
// outerFun(9);
// let outerFun2=funOut(5)
// outerFun(3);

//2.Write a recursive function that searches an array for a specific value.
//   The function should return true if the value is found, and false if it is
//    not. 
// let arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

// function searchValue(arr, value) {
  
//   if(arr.length === 0) {
//     return false;
//   }
  
//   else if(arr[0] === value) {
//     return true;
//   }
//   return searchValue(arr.slice(1), value);
// }
// console.log(searchValue(arr, "Friday"));

// 3. Write a function that adds a new paragraph element to the bottom of an
//  HTML document. The function should take a string argument that will be
//   used as the text content of the new paragraph element.
// function add(text){
//  let newPara= document.createElement("p")
//  let paraText=document.createTextNode(text);
//  newPara.appendChild(paraText);
// document.body.appendChild(newPara);
// }
// add("This is new para");

// 4 Write a function that adds a new list item to an unordered list in an
//  HTML document. The function should take a string argument that will be 
//  used as the text content of the new list item.

// function addListItem(text){
//   let ul=document.querySelector("ul");
//   let li=document.querySelector("li");
//   li.innerText=text;
//   ul.appendChild(li);
// }
// addListItem("item one");
//  addListItem("item two");
//  addListItem("item three");

// 5. Write a function that changes the background color of an HTML element.
//  The function should take two arguments: the first argument is a reference 
//  to the HTML element, and the second argument is a string representing the
//   new background color.

// function changeBgColor(element,color){
// let div=document.querySelector("div");
//  div.style.backgroundColor=color;
// }
// changeBgColor("div","grey");

//  6. Write a function that saves an object to localStorage.The function 
//  should take two arguments: the first argument is a string representing the
//  key to use for storing the object, and the second argument is the object
//  to store.
// let theObj={
//   name:"ahmad" ,
//  cnic: 1234 ,
//   className: "CSS"
// };
// function saveToLocalStorage(key,value)
// {
// let stringify=JSON.stringify(value);
// localStorage.setItem(key,stringify);
// }
// saveToLocalStorage("myKey", theObj);

// 7. Write a function that retrieves an object from localStorage. The 
// function should take one argument, which is a string representing the key 
// used to store the object. The function should return the object
// let theObj={
//   name:"ahmad" ,
//  cnic: 1234 ,
//   className: "CSS"
// };
// function saveToLocalStorage(key,value)
// {
// let stringify = JSON.stringify(value);
// localStorage.setItem(key,stringify);
// }


// function getFromLocalStorage(key){
//   let value=localStorage.getItem(key);
//   return JSON.parse(value);
// }
// saveToLocalStorage("myKey", theObj);
// let retrieve=getFromLocalStorage("myKey");
// console.log(retrieve);

// 8.Write a function that takes an object and saves each property to 
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function saveObjectToLocalStorage(obj) {
//   localStorage.setItem('myObject', JSON.stringify(obj));

//   let newObj = JSON.parse(localStorage.getItem('myObject'));
//   return newObj;
// }
// function getObjectFromLocalStorage() {
//   let obj = {};

//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     obj[key] = JSON.parse(localStorage.getItem(key));
//   }
//   return obj;
// }

