for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        var div = document.createElement("div");
        div.style.background = "lightblue";
        div.classList.add("cell");
        document.getElementById("container").appendChild(div);
    }
}

let grid = document.querySelectorAll('.cell');

console.log(grid);

for (let i = 0; i < grid.length; i++){
    grid[i].addEventListener('mouseover', (event) => {
        grid[i].style.backgroundColor = "black";
    });
    grid[i].addEventListener('mouseout', (event) => {
        grid[i].style.backgroundColor = "blue";
    });
}

function resetFunc(){
    for (let i = 0; i < grid.length; i++){
        grid[i].style.backgroundColor = "lightblue";
    }
}
