console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
var newnode1=document.getElementById("node1");
newnode1.innerHTML="I used the get elementByID() method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
var newnode2=document.getElementsByClassName("node2");
newnode2.textContent="I used the get elementByID() method to access this"
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3tags=document.getElementsByTagName("h3");
for (let h3 of h3tags){
    h3.textContent="I used the getelementbyTagName(h3)"
};
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
var para1=document.createElement("p")
para1.textContent="This node was created using the createElement() method"
const pelement=document.querySelector("#parent");
pelement.appendChild(para1);


// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aelement=document.createElement("a");
aelement.textContent="I am a <a> tag";
aelement.href="https://portal.truecoders.io/course/52/lecture/16/lesson"
// BONUS: Add a link href to the <a>
console.log(aelement);
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
pelement.insertBefore(aelement,para1);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent2=document.getElementById("exercise-container3")
let paragraph2=document.getElementById("N1")
let newElement=document.createElement("p")
newElement.textContent="New child node";
parent2.replaceChild(newElement,paragraph2)
// TODO: Remove the "New Child Node"
setTimeout(()=>{
    parent2.removeChild(newElement)
},5000)
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let parent3=document.getElementById("container")
let unorder=document.createElement("ul")
parent3.appendChild(unorder);
let ul=document.getElementsByTagName("ul")[0];
// TODO: Iterate over the array values, and create a list item element for each

for(let item of list){
    let li=document.createElement("li");
    li.textContent=item;
    ul.appendChild(li);
}
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show(){
    var exersise=document.querySelector(".exercise5")
    let modalContainer=document.createElement("div");
    modalContainer.id="modal";
    let modalCard=document.createElement("div");
    modalCard.classList.add("modal-card");
    let h2=document.createElement("h2");
    let p=document.createElement("p");
    let closeBtn=document.createElement("button");
    h2.textContent="modal Header";
p.textContent="Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
exersise.appendChild(modalContainer);
modalContainer.appendChild(modalCard);
modalCard.append(h2,p,closeBtn);

}
    


let button=document.querySelector("#btn");
button.addEventListener("click",show)
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
