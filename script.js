const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");//to add a delete(cross) icon to delete a task.
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""; //to empty the input box after entering a task.
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});
//To save the tasks when we exit the website.
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);//Tasks are stored as "data".
}
//Display the saved tasks when we open the website.
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
