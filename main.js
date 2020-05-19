
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
            
            return `<li>${item.body}</li><button onclick="deleteSomething(${i})">X</button></li><button onclick="toggle(${i})">UNDONE</button>`.strike()
           
        }else {
            // undoneList.push(item[i]);
            return `<li>${item.body}</li><button onclick="deleteSomething(${i})">X</button></li><button onclick="toggle(${i})">DONE</button>`
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
    if (document.getElementById("vehicle1").checked == true) {
        for (let i = 0; i < items.length; i++) {
            if (itemList[i].isDone == true) {document.getElementById(`item${i}`).style.display = "none"};
           
        }
    }
    else {
        for (let i = 0; i < items.length; i++) {
            if (itemList[i].isDone == true) {document.getElementById(`item${i}`).style.display = "block"};
        }
    }
}
