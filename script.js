for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        var div = document.createElement("div");
        div.style.background = "lightblue";
        div.classList.add("cell");
        document.getElementById("container").appendChild(div);
    }
}
