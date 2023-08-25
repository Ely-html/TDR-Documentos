// window.onload = saludar();

let timerInterval;
let timerRunning = false;
let seconds = 0;
let previousTaskTime = "00:00:00";

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
            
            // <span class="previous-time">Tarea anterior: ${previousTaskTime}</span>
        taskList.appendChild(li);
        taskInput.value = '';    
    }
    if (!timerRunning){
        startTimer(updateClock, 1000);
    }
} 
    
function completeTask(button) {
    const li = button.parentElement;
    li.style.textDecoration = 'line-through';
    li.style.backgroundColor = '#f9f9f9';
    
    const taskTime = document.getElementById('clock-display').textContent;
    const elapsedTime = calculateElapsedTime(taskTime, previousTaskTime); 
    li.innerHTML += `<span class="completed-time">${elapsedTime}</span>`;
    
    
    previousTaskTime = taskTime;
    // stopTimer();
}

function calculateElapsedTime(currentTime, previousTime) {
    const currentTimeInSeconds = timeToSeconds(currentTime);
    const previousTimeInSeconds = timeToSeconds(previousTime);
    const elapsedSeconds = currentTimeInSeconds - previousTimeInSeconds;

    return secondsToTime(elapsedSeconds);
}

function timeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

// function startStopTimer() {
//     if (timerRunning) {
//         clearInterval(timerInterval);
//         timerRunning = false;
//     } else {
//         timerInterval = setInterval(updateClock, 1000);
//         timerRunning = true;
//     }
// }

 function startTimer(){
    timerInterval = setInterval(updateClock, 1000);
    timerRunning = true;
}

function stopTimer(){
    timerRunning = false
    clearInterval(timerInterval);
}

function updateClock() {
    seconds++;
    const clockDisplay = document.getElementById('clock-display');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    clockDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function clearTimer() {
    seconds = 0;
    updateClock();
    clearInterval(timerInterval);
    timerRunning = false;
    const clockDisplay = document.getElementById('clock-display');
    clockDisplay.textContent = '00:00:00';
}
    
function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function writeTime(time){
    return time.document.getElementById("clock-display").innerHTML(timerInterval)
}