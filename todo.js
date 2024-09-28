let taskInput = document.getElementById('box1');
let addTaskBtn = document.getElementById('addbtn');
let taskList = document.getElementById('taskslist');

// Add task function
addTaskBtn.addEventListener('click', function() {
  let taskText = taskInput.value;
  
  if (taskText !== '') {
    // Create new list item
    let li = document.createElement('li');
    li.textContent = taskText;
    // Append list to task 
    taskList.appendChild(li);
  }
});

let clear = document.getElementById("btn")

clear.addEventListener("click",function (){
    taskList.innerHTML=''
    document.getElementById("taskInput").value=''
})