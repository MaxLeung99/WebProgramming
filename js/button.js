var currentBG = 'day'
var colorList = ['Brown', 'BlueViolet','SteelBlue','Salmon','Green']
var currentColor = 0
var isAllSelected = false
var isSearch = false
var todoStorage = []
var inSearch = false;
var allCount = 0
var activeCount = 0
var finishedCount = 0

window.onload = function (){
    if(localStorage.getItem('allCount')!=null) {
        allCount = localStorage.getItem('allCount')
    }
    if(localStorage.getItem('activeCount')!=null) {
        activeCount = localStorage.getItem('activeCount')
    }
    if(localStorage.getItem('finishedCount')!=null) {
        finishedCount = localStorage.getItem('finishedCount')
    }
    if(localStorage.getItem('todolist')!=null) {
        var list = document.getElementById('todolist')
        list.innerHTML = localStorage.getItem('todolist')
    }

    var all = document.getElementById('allCount')
    all.innerText = allCount.toString()
    var active = document.getElementById('activeCount')
    active.innerText = activeCount.toString()
    var finished = document.getElementById('finishedCount')
    finished.innerText = finishedCount.toString()

    document.querySelector('.switcher').onmousedown = (e) => {
        console.log('down')
        let ele = document.querySelector('.switcher')
        var disX=null
        var dixY=null
        if(e instanceof MouseEvent) {
            disX = e.clientX - ele.offsetLeft;
            disY = e.clientY - ele.offsetTop;
        }
        else if(e instanceof TouchEvent){
            disX = e.changedTouches[0].clientX - ele.offsetLeft;
            disY = e.changedTouches[0].clientY - ele.offsetTop;
        }
        document.onmousemove = function (e) {
            console.log('move')
            let moveX = e.clientX - disX;
            let moveY = e.clientY - disY;

            if (moveX >= 0 && moveX <= window.innerWidth - ele.offsetWidth) {
                ele.style.left = moveX + 'px';
            }
            if (moveY >= 0 && moveY <= window.innerHeight - ele.offsetHeight) {
                ele.style.top = moveY + 'px';
            }
        };
        document.onmouseup = function (e) {

            if(ele.offsetLeft > window.innerWidth/2){
                ele.style.left=null
                ele.style.right='0px'
            }
            else {
                ele.style.right = null
                ele.style.left = '0px'
            }
            document.onmousemove = null;
            document.onmouseup = null;
        };

        document.ontouchmove= function(e){
            console.log('move')

            let moveX = e.changedTouches[0].clientX - disX;
            let moveY = e.changedTouches[0].clientY - disY;
            console.log(disX)
            console.log(disY)
            console.log(moveX)
            console.log(moveY)

            if (moveX >= 0 && moveX <= window.innerWidth - ele.offsetWidth) {
                ele.style.left = moveX + 'px';
            }
            if (moveY >= 0 && moveY <= window.innerHeight - ele.offsetHeight) {
                ele.style.top = moveY + 'px';
            }
        }
        document.ontouchend = function (e) {

            if(ele.offsetLeft > window.innerWidth/2){
                ele.style.left=null
                ele.style.right='0px'
            }
            else {
                ele.style.right = null
                ele.style.left = '0px'
            }
            document.ontouchmove = null;
            document.ontouchend = null;
        };
    }

}

function switchBackground(ele){
    var fontList = document.querySelectorAll('.switchableFont')
    console.log(fontList)
    if(currentBG === 'night'){
        document.querySelector('body').style.backgroundImage = "url('./static/day.jpeg')"
        currentBG = 'day'
        ele.src="static/moon_2.png"
        ele.style.backgroundColor="rgb(52,79,90)"
        for(var i=0;i<fontList.length;i++){
            fontList[i].style.color='black'
        }
        ele.style.borderColor = 'black'
    }
    else {
        document.querySelector('body').style.backgroundImage = "url('./static/night.jpeg')"
        currentBG = 'night'
        ele.src="static/sun.png"
        ele.style.backgroundColor = "yellow";
        for(var i=0;i < fontList.length;i++){
            fontList[i].style.color='white'
        }
        ele.style.borderColor = 'SkyBlue'
    }
}

function addTodoList(){
    var list = document.getElementById("todolist")
    var el = document.createElement("li")

    allCount++
    activeCount++
    updateCount()
    ele.innerHTML="<input class='Selected' type='checkbox' value='"+inputText+"'/>\n"+
        "<input style='text-decoration: none;' class=\"todoInput\" TYPE=\"text\" placeholder=\"Add a todo\" onkeyup='todoInputKeyup()' onblur='todoInputBlur(this)'>\n" +
        "        <label style='text-decoration: none;' class=\"todoLabel\" onclick=\"switchtoInput(this)\">"+inputText+"</label>\n" +
        "        <div class='wrapper'><div style='display: inline-block' class='wrapperHead' onclick='pullout(this)'><span style='line-height: 5vh;font-weight: 2vh;color: transparent'><</span></div><div style='display: none' class='deleteWrapper'><span class=\"delete\" onclick='deleteTODO(this)'>+</span></div>\n" +
        "        <div class='highlightWrapper' style='display: none'><span class=\"highlight\" onclick='highlightTODO(this)'><img src='static/light.png' style=\"width:100%;height: 5vh;\"></span></div>\n" +
        "       <div class='finishWrapper' style='display: none'><span class=\"finish\" onclick='finishTODO(this)'>&#10003</span></div></div>\n"
    ele.style.cssText="display:inherit;overflow:hidden;font-size:0"
    secondChild = list.firstChild.nextSibling.nextSibling;
    list.insertBefore(el, secondChild)
    save()
    el.children[2].click()
}
function deleteTODO(element){

    var list = document.getElementById("todolist")
    var child = list.firstChild;
    var last = list.lastChild;
    while(true){
        if(child===element.parentNode.parentNode.parentNode){
            allCount--
            if(child.children[2].style.textDecoration==='line-through'){
                finishedCount--
            }
            else{
                activeCount--
            }
            list.removeChild(child)
            updateCount()
            save()

            break;
        }
        if(child===last) {
            break;
        }
        child = child.nextSibling;
    }
}

function finishTODO(element){
    console.log('finish')
    var list = document.getElementById("todolist")
    var child = list.firstChild;
    var last = list.lastChild;
    while(true){
        if(child===element.parentNode.parentNode.parentNode){
            console.log(child.children[2].style.textDecoration)
            if(child.children[2].style.textDecoration==='none') {
                activeCount--
                finishedCount++
                updateCount()
                child.children[2].style.textDecoration = 'line-through'
                child.children[2].disabled = "disabled"
                save()
                break;
            }
            else{
                activeCount++
                finishedCount--
                updateCount()
                child.children[2].style.textDecoration = 'none'
                child.children[2].disabled = null
                save()
                break;
            }

        }
        if(child===last) {
            break;
        }
        child = child.nextSibling;
    }
}

function highlightTODO(element){
    var list = document.getElementById("todolist")
    var child = list.firstChild;
    var last = list.lastChild;
    while(true){
        if(child===element.parentNode.parentNode.parentNode){
            console.log(child.children)
            child.children[1].style.color = colorList[currentColor]
            child.children[2].style.color = colorList[currentColor]
            currentColor = (currentColor+1)%5;
            var tempNode = child
            list.removeChild(tempNode)
            list.insertBefore(tempNode, list.firstChild.nextSibling.nextSibling)
                save()
            break;
        }
        if(child===last) {
            break;
        }
        child = child.nextSibling;
    }
}

function selectAll(){
    console.log('select')
    var allCheckbox = document.getElementsByClassName('Selected');
    if(isAllSelected===false) {
        for (var i = 0; i < allCheckbox.length; i++) {
            allCheckbox[i].checked = 'checked'
        }
        isAllSelected = true;
    }
    else{
        for (var i = 0; i < allCheckbox.length; i++) {
            allCheckbox[i].checked = ''
        }
        isAllSelected = false;
    }
}

function deleteFinished(){
    var list = document.getElementById("todolist")
    let deleteList = []
    for(var i=list.childElementCount-1;i>=1;i--){
        if(list.children[i].nodeName!=='#text'){
            node = list.children[i]
            if(node.children[2].style.textDecoration==='line-through'){
                deleteList.push(node)
                allCount--
                finishedCount--
            }
        }
    }
    for(var i=0;i<deleteList.length;i++) {
        list.removeChild(deleteList[i])
    }
    updateCount()
    save()

}

function finishSelected(){
    var list = document.getElementById("todolist")
    for(var i=0;i<list.childElementCount;i++){
        if(list.children[i].firstChild.checked===true && list.children[i].children[1].style.textDecoration!=='line-through'){
            activeCount--
            finishedCount++
            list.children[i].children[1].style.textDecoration='line-through'
            list.children[i].children[2].style.textDecoration='line-through'
        }
        else if(list.children[i].firstChild.checked===true && list.children[i].children[1].style.textDecoration==='line-through'){
            activeCount++
            finishedCount--
            list.children[i].children[1].style.textDecoration='none'
            list.children[i].children[2].style.textDecoration='none'
        }
    }
    updateCount()
    save()
}

function searchTODO(){
    var ele=document.getElementsByClassName('search')
    console.log(ele[0])
    if(isSearch===false){
        ele[0].style.display='block'
        isSearch=true
    }
    else{
        ele[0].style.display='none'
        var list = document.getElementById('todolist')
        for (var i = 1; i < list.childElementCount; i++) {
            list.children[i].style.display = 'inherit'
        }
        isSearch=false

    }
}

function search(){
        var searchText = document.getElementById('searchArea').value
        var list = document.getElementById('todolist')
        if(inSearch===false) {
            for (var i = 1; i < list.childElementCount; i++) {
                if (!list.children[i].children[2].innerText.includes(searchText)) {
                    list.children[i].style.display = 'none'
                }
            }
        }
        else{
            for (var i = 1; i < list.childElementCount; i++) {
                list.children[i].style.display = 'inherit'
            }
        }
        inSearch = !inSearch;
}

function switchtoInput(ele){
    var fatherNode = ele.parentNode;
    console.log(ele)
    var input = fatherNode.querySelector('.todoInput')
    input.style.display='inline'
    ele.style.display='none'
    input.value=ele.innerText
    input.focus()
}

function todoInputKeyup(){
    console.log(event.key)
    var input = event.target
    var fatherNode = input.parentNode
    var label = fatherNode.querySelector('.todoLabel')
    if(event.key==='Escape'){
        input.blur()
        input.style.display='none'
        label.style.display='inline-block'
    }
    if(event.key==='Enter'){
        label.innerText=input.value
        input.blur()
        input.style.display='none'
        label.style.display='inline-block'

    }
}

function inputTODO(ele){
    var inputText = ele.nextSibling.nextSibling.value;
    ele.nextSibling.nextSibling.value=""
    var list = document.getElementById("todolist")
    var el = document.createElement("li")

    allCount++
    activeCount++
    updateCount()
    el.innerHTML="<input class='Selected' type='checkbox' value='"+inputText+"'/>\n"+
        "<input style='text-decoration: none;' class=\"todoInput\" TYPE=\"text\" placeholder=\"Add a todo\" onkeyup='todoInputKeyup()' onblur='todoInputBlur(this)'>\n" +
        "        <label style='text-decoration: none;' class=\"todoLabel\" onclick=\"switchtoInput(this)\">"+inputText+"</label>\n" +
        "        <div class='wrapper'><div style='display: inline-block' class='wrapperHead' onclick='pullout(this)'><span style='line-height: 5vh;font-weight: 2vh;color: transparent'><</span></div><div style='display: none' class='deleteWrapper'><span class=\"delete\" onclick='deleteTODO(this)'>+</span></div>\n" +
        "        <div class='highlightWrapper' style='display: none'><span class=\"highlight\" onclick='highlightTODO(this)'><img src='static/light.png' style=\"width:100%;height: 5vh;\"></span></div>\n" +
        "       <div class='finishWrapper' style='display: none'><span class=\"finish\" onclick='finishTODO(this)'>&#10003</span></div></div>\n"
    el.style.cssText="display:inherit;overflow:hidden;font-size:0"
    secondChild = list.firstChild.nextSibling.nextSibling;
    list.insertBefore(el, secondChild)
    save()
    el.children[1].click()
}

function addTODO2KeyUp(){
    var input = event.target

    if(event.key==='Escape'){
        input.blur()
        input.value=""
    }
    if(event.key==='Enter'){
        input.blur()
        var inputText = input.value;
        input.value="";
        var list = document.getElementById("todolist")
        var ele = document.createElement("li")

        allCount++
        activeCount++
        updateCount()
        ele.innerHTML="<input class='Selected' type='checkbox' value='"+inputText+"'/>\n"+
            "<input style='text-decoration: none;' class=\"todoInput\" TYPE=\"text\" placeholder=\"Add a todo\" onkeyup='todoInputKeyup()' onblur='todoInputBlur(this)'>\n" +
            "        <label style='text-decoration: none;' class=\"todoLabel\" onclick=\"switchtoInput(this)\">"+inputText+"</label>\n" +
            "        <div class='wrapper'><div style='display: inline-block' class='wrapperHead' onclick='pullout(this)'><span style='line-height: 5vh;font-weight: 2vh;color: transparent'><</span></div><div style='display: none' class='deleteWrapper'><span class=\"delete\" onclick='deleteTODO(this)'>+</span></div>\n" +
            "        <div class='highlightWrapper' style='display: none'><span class=\"highlight\" onclick='highlightTODO(this)'><img src='static/light.png' style=\"width:100%;height: 5vh;\"></span></div>\n" +
            "       <div class='finishWrapper' style='display: none'><span class=\"finish\" onclick='finishTODO(this)'>&#10003</span></div></div>\n"
        ele.style.cssText="display:inherit;overflow:hidden;font-size:0"
        secondChild = list.firstChild.nextSibling.nextSibling;
        list.insertBefore(ele, secondChild)
        save()
    }
}

function pullout(ele){
    ele = ele.parentNode.parentNode
    var wrapper = ele.querySelector('.wrapper')
    if(wrapper.children[1].style.display==='none'){
        wrapper.children[0].firstChild.textContent='>'
    }
    else{
        wrapper.children[0].firstChild.textContent='<'
    }
    for(var i=1;i<wrapper.childElementCount;i++){
         if(wrapper.children[i].style.display==='none') {
             wrapper.children[i].style.display='inline-block'
         }
         else{
             wrapper.children[i].style.display='none'
         }
     }
    if(wrapper.children[1].style.display==='none') {
        wrapper.style.left = '38.25%';
    }
    else{
        wrapper.style.left = '0';
    }
}


function switchAll(){
    var ele = document.querySelector('.all')
    console.log(ele)
    ele.style.backgroundColor='rgba(218,165,32,0.7)';
    ele = document.querySelector('.activate')
    ele.style.backgroundColor='rgba(47,79,79,0.3)';
    ele = document.querySelector('.complete')
    ele.style.backgroundColor='rgba(128,0,0,0.3)';
    var list = document.getElementById('todolist')
    for(var i=1;i<list.childElementCount;i++){
         list.children[i].style.display='inherit'
    }
}

function switchActivate(){
    console.log('active')
    var ele = document.querySelector('.all')
    ele.style.backgroundColor='rgba(218,165,32,0.3)';
    ele = document.querySelector('.activate')
    ele.style.backgroundColor='rgba(47,79,79,0.7)';
    ele = document.querySelector('.complete')
    ele.style.backgroundColor='rgba(128,0,0,0.3)';
    var list = document.getElementById('todolist')
    for(var i=1;i<list.childElementCount;i++){
        console.log(list.children[i])
        if(list.children[i].children[2].style.textDecoration==='line-through') {
            list.children[i].style.display='none'
        }
        else{
            list.children[i].style.display='inherit'
        }
    }
}

function switchFinish(){
    var ele = document.querySelector('.all')
    ele.style.backgroundColor='rgba(218,165,32,0.3)';
    ele = document.querySelector('.activate')
    ele.style.backgroundColor='rgba(47,79,79,0.3)';
    ele = document.querySelector('.complete')
    ele.style.backgroundColor='rgba(128,0,0,0.7)';
    var list = document.getElementById('todolist')
    for(var i=1;i<list.childElementCount;i++){
        if(list.children[i].children[2].style.textDecoration!=='line-through') {
            list.children[i].style.display='none'
        }
        else{
            list.children[i].style.display='inherit'
        }
    }
}

function updateCount(){
    var all = document.getElementById('allCount')
    all.innerText = allCount.toString()
    var active = document.getElementById('activeCount')
    active.innerText = activeCount.toString()
    var finished = document.getElementById('finishedCount')
    finished.innerText = finishedCount.toString()
}

function todoInputBlur(ele){
    var fatherNode = ele.parentNode
    var label = fatherNode.querySelector('.todoLabel')
    label.innerText=ele.value
    ele.style.display='none'
    label.style.display='inline-block'
}

function save(){
    console.log('save')
    var li = document.getElementById('todolist')
    localStorage.setItem('todolist', li.innerHTML)
    localStorage.setItem('allCount', allCount)
    localStorage.setItem('activeCount', activeCount)
    localStorage.setItem('finishedCount', finishedCount)
}
