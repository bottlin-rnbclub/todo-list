const inputBox = document.getElementById('input-box');
const listCon = document.getElementById('list-con');

function addTask(){
    if(inputBox.value === ''){
        alert('Напиши что-нибудь');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value == '';
    saveData(); // save данные 
}

listCon.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData(); // save данные 
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData(); // save данные 
    }
}, false);

function saveData(){ // функция save 
    localStorage.setItem('data', listCon.innerHTML);
}
function showTask(){
    listCon.innerHTML = localStorage.getItem('data');
}
showTask();