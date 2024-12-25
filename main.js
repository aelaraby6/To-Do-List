let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    {
        "name": "task 1",
        "date": "1/5/2024",
        "isdone": false
    },
    {
        "name": "task 2",
        "date": "1/5/2024",
        "isdone": false
    },
    {
        "name": "task 3",
        "date": "1/5/2024",
        "isdone": false
    }
];

// show tasks
function showcContent() {
    document.getElementById("tasks").innerHTML = "";
    let index = 0;
    tasks.forEach(task => {
        let content = `
            <div class="task">
                <div class="taskinfo">
                    <p>${task.name}</p>
                    <div class="date">
                        <i class="fa-regular fa-calendar-days"></i>
                        <p>${task.date}</p>
                    </div>
                </div>
                <div class="taskoperations">
                    <button onclick="deletetask(${index})" class="circularButton" >
                        <i class="fas fa-trash"></i>
                    </button>
                    <button onclick = "updateTask(${index})" class="circularButton">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button  onclick = "setStatus(${index})" class="circularButton">
                       <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>`;
        index++;
        document.getElementById("tasks").innerHTML += content;
    });
}

// Add task
function haederbuttn() {
    let name = prompt("Please enter your task name");
    let date = prompt("Please enter your task date");
    let text = {
        "name": name,
        "date": date,
        "isdone": false
    };

    tasks.push(text);
    storeTasks()
    showcContent();

}


// delete task
function deletetask(index) {
    tasks.splice(index, 1);
    storeTasks()
    showcContent();
}

// update task
function updateTask(index) {
    let newName = prompt("Please enter your new task name");
    let task = tasks[index];
    task.name = newName;
    showcContent();
}

// put task status
function setStatus(index) {
    let taskElements = document.querySelectorAll("#tasks .task");
    let task = tasks[index];
    let taskElement = taskElements[index];
    let statusButton = taskElement.querySelector(".taskoperations button:nth-child(3)");
    if (task.isdone == true) {
        statusButton.style.backgroundColor = "rgb(102, 0, 3)";
        taskElement.style.backgroundColor = "white";
        taskElement.querySelector(".taskoperations button:nth-child(3)").innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        task.isdone = false;
        return;
    }
    else {
        task.isdone = true;
        statusButton.style.backgroundColor = "green";
        taskElement.style.backgroundColor = "rgb(158, 253, 160)";
        taskElement.querySelector(".taskoperations button:nth-child(3)").innerHTML = `<i class="fa-solid fa-check"></i>`;
    }

}


function storeTasks(){
    let taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks",taskString);
}

showcContent();