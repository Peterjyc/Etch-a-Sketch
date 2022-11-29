for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        var div = document.createElement("div");
        div.style.width = "6.25%";
        div.style.height = "6.25%";
        div.style.background = "lightblue";
        div.style.border = "2px solid black"
        div.classList.add(i);
        document.getElementById("main").appendChild(div);
    }
}
