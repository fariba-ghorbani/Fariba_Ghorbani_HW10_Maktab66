const oClass = "fill-o";
const xClass = "fill-x";
let xTurn = true;
let winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener('click', clickOnTile, {once: true})
});

function clickOnTile (e) {
    const clickedTile = e.target;
    let currentClass = xTurn ? xClass : oClass;
    clickedTile.classList.add(currentClass);
    console.log(winOrNot(currentClass))
    // if (winOrNot(currentClass)) {
        
    // }
    xTurn = !xTurn;
}

function winOrNot(currentClass) {
    return winnings.filter(senario => {
        return senario.every(index => {
            return tiles[index].classList.contains(currentClass)
        })
    })
}