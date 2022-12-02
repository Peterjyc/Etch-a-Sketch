for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        var div = document.createElement("div");
        div.style.background = "lightblue";
        div.style.height = "8px";
        div.style.width = "6px";
        div.classList.add(i);
        document.getElementById("main").appendChild(div);
    }
}
