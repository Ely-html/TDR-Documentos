window.onload = saludar();

let timerInterval;
let timerRunning = false;
let seconds = 0;

function saludar(){
    alert("Bienvenido a una de mis paginas web!")
}

function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();
    if (task !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="completeTask(this)">Completada</button>
            <button onclick="removeTask(this)">Eliminar</button>
            

        `;
        taskList.appendChild(li);
        taskInput.value = '';    
    }
    startStopTimer(updateClock, 1000);
}
    
function completeTask(button) {
    const li = button.parentElement;
    li.style.textDecoration = 'line-through';
    li.style.backgroundColor = '#f9f9f9';
    const taskTime = document.getElementById('clock-display').textContent;
    li.innerHTML += `<span class="completed-time">${taskTime}</span>`;
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function startStopTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
    } else {
        timerInterval = setInterval(updateClock, 1000);
        timerRunning = true;
    }
}

function updateClock() {
    seconds++;
    const clockDisplay = document.getElementById('clock-display');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    clockDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function clearTimer(){
        seconds = 0;
        updateClock();
        clearInterval(timerInterval);
        const clockDisplay = document.getElementById('clock-display');
        clockDisplay.textContent = '00:00:00';
};
    
function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function writeTime(time){
    return time.document.getElementById("clock-display").innerHTML(timerInterval)
}