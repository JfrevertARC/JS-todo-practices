var inputButton = document.getElementsByClassName("enter")[0]
var ul = document.querySelector("ul")
var input = document.querySelector("input")
var listItem = document.querySelectorAll("li");

function appendListItem() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", finishToDoItem);
  ul.appendChild(li);
  listItem = document.querySelectorAll("li");
}

function inputLength () {
  return input.value.length;
}

function finishToDoItem(event) {
  //get css class for click event of clicked <li>, toggle strikethrough on or off
    var liClick = event.target;
    var listItemButton = document.createElement("button");

    if(liClick.classList[0] !== "done"){
      liClick.classList.add("done");
      // if there's already a button, don't add one
      if (liClick.childNodes.length === 1) {
        listItemButton.appendChild(document.createTextNode("delete"));
        listItemButton.addEventListener("click", function () {
          //on click, delete parent li + button
          this.parentElement.parentElement.removeChild(this.parentElement)
        })
        liClick.appendChild(listItemButton);
      }
    } else if (liClick.classList[0] === "done") {
      liClick.classList.remove("done");
      liClick.children = "";
    }
}

function addListAfterClick(){
      if (inputLength() > 0 && input.value !== null){
        appendListItem();
    }
    input.value=""
}

function addListAfterEnter(event) {
    if (inputLength() > 0 &&  event.keyCode === 13) {
      appendListItem();
      input.value = "";
    }
}

inputButton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter)
