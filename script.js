function makeRows(rowNum){
    for (let i = 1; i <= rowNum; i++){
        for (let j = 1; j <= rowNum; j++){
            var div = document.createElement("div");
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.background = "lightblue";
            div.classList.add("cell");
            document.getElementById("main").appendChild(div);
        }
    }

}

makeRows(16);
