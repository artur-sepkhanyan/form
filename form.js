let mainDiv = document.getElementById("background");
let inp = document.getElementById("name-input");

function create(){
    let createDiv = document.createElement("div");
    let createSpan = document.createElement("span");
    let createButton = document.createElement("button");
    if(inp.value){
        createDiv.className = "createDiv";
        createSpan.className = "createSpan";
        createButton.className = "but";
        createSpan.innerHTML = inp.value;
        createButton.innerHTML = "x";
        createDiv.appendChild(createSpan);
        createDiv.appendChild(createButton);
        mainDiv.appendChild(createDiv);
        inp.value = '';
        createButton.addEventListener("click",function del(){
            this.parentNode.remove(this.parentNode);
        });
        createDiv.addEventListener("click", function(){
            createDiv.style.backgroundColor = "lime"
        });
        inp.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
             event.preventDefault();
            }
          });
    }
    
}





