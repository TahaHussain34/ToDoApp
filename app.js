var toDoList = document.getElementById("list");

function addToDo(){
    var todoItem = document.getElementById("todoItem");
    var li = document.createElement("li");
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    
    var delBtn = document.createElement("button");
    // var delText = document.createTextNode("DELETE");
    // delBtn.appendChild(delText)
    li.appendChild(delBtn)
    // delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("class", "fa fa-trash")
    delBtn.setAttribute("onclick", "delItem(this)")

    var editBtn = document.createElement("button");
    // var editText = document.createTextNode("EDIT");
    // editBtn.appendChild(editText)
    li.appendChild(editBtn)
    // editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("class", "fa fa-pencil-square")
    editBtn.setAttribute("onclick", "editItem(this)")


    toDoList.appendChild(li)
    todoItem.value = ""

}

function delItem(a){
    a.parentNode.remove();
}

function deleteAll(){
    toDoList.innerHTML = ""
}

function editItem(t){
    var itemToEdit = t.parentNode.firstChild;
    var editValue = document.createElement("input")
    var editValue = prompt("Enter to Edit", itemToEdit.nodeValue);
    itemToEdit.nodeValue = editValue
}