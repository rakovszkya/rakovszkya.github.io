taskNumber = 0
removed=0;
text="New Task"

function checkFunction(elementId){
    $(`#${elementId}`).toggleClass("checkedTask");
}

function removeFunc(elementId){
    $(`#${elementId}`).remove();
    removed++;
}

function addElement(){
    $(`#taskSection`).append(`<div id="task-${taskNumber}"class="taskDiv">
    <p class='task task-${taskNumber}'>${$('#inputField').val()}</p>
    <button class="deleteButton" onclick="removeFunc('task-${taskNumber}')"><img class="deleteImg" src="./img/cross.svg" alt=""</button>
    <button class="tickButton" onclick="checkFunction('task-${taskNumber}')"><img class="tickImg" src="./img/tick.svg" alt=""></button>
  </div>`);
  taskNumber++;
  $('#inputField').val("")
}

$("#inputField").keyup(function(event) {
    if (event.keyCode === 13){
        addElement()
        $('#inputField').val("")
    } 
})
