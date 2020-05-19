
let itemList =[];


let addItem= () =>{
    const newTask = {
        isDone: false,
        body: document.getElementById("text-input").value
      };
    itemList.push(newTask)
    

    console.log("is it fired")
   
   
    showList(itemList)
}

let showList = (list) =>{
    let message = list.map((item ,i)=> {
        if(item.isDone){
            
            return `<li id="item${i}">
            <input type="checkbox" class="" name="checkbox"  onchange="checkboxChange(event,${i})"
            checked>
            ${item.body}
            <button onclick="deleteSomething(${i})">X</button></li>`
           
        }else {
            // undoneList.push(item[i]);
            return `<li id="item${i}">
            <input type="checkbox" class="" name="checkbox"  onchange="checkboxChange(event,${i})"
            check>
            ${item.body}<button onclick="deleteSomething(${i})">X</button></li>`
        }
    }).join('')

    document.getElementById("resultArea").innerHTML = message
}

function deleteSomething(index) {
    //console.log("hehe")
    itemList.splice(index, 1);

    showList(itemList);
}

function toggle(i){
    itemList[i].isDone = !(itemList[i].isDone)
    if(itemList.isDone==false){
        console.log("Mark done")

    }
    else{
        console.log("Mark not done")
    }

    showList(itemList)
}
function showUndone(){
    console.log(undoneList)
    document.getElementById("showBtn").innerHTML=`<li>${undoneList}</li></button>`
    
}

let filterDone = () => {
    if (document.getElementById("box1").checked == true) {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].isDone == true) 
            {document.getElementById(`item${i}`).style.display = "none"};
           
        }
    }
    else {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].isDone == true) {document.getElementById(`item${i}`).style.display = "block"};
        }
    }
}
let checkboxChange = (e, index) => {
    let taskClassList = document.querySelectorAll("#resultArea li")

    if (e.target.checked) {
        itemList[index].isDone = true
        console.log(itemList[index])
        for (let i = 0; i < taskClassList.length; i++) {
            taskClassList[index].classList.add("stroke")
        }
    } else if (!e.target.checked) {
        itemList[index].isDone = false
        console.log(itemList[index])
        for (let i = 0; i < taskClassList.length; i++) {
            taskClassList[index].classList.remove("stroke")
        }
    }
    document.getElementById("tab-change").innerHTML = renderTabChange(taskList)

}