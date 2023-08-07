const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");


function addTask() {

  if (inputBox .value === '') {
    alert("you must write Something")
    
  } else {
    let li = document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span =  document .createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
    
  }
  
  inputBox.value="";
  // saveData();
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("Checked");
    // saveData();
    
  }
   else if(e.target.tagName === "SPAN") {
    
    e.target .parentElement .remove();
    // saveData();
  }
  
}, false);

function saveData(){
  
  const box = document.getElementById('box');
localStorage .setItem("data",  listContainer.innerHTML);
console.log("entering")
  
}
function saveTask(){
  
  listContainer.innerHTML = localStorage.getItem("data");
  
  
}
saveTask();

// function showTask(){
// }
// showTask();

//new line commits


// const box = document.getElementById('box');

// box.addEventListener('click',

// function saveData(){
  
//   localStorage .setItem("data",  listContainer.innerHTML);
    
//   }

// function saveTask(){
//   listContainer.innerHTML = localStorage.getItem("data");
  
// })
// saveTask();
  


