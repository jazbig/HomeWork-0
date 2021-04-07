const playerOne = {
    name: `Angular`,
    hp: 50,
    img: `http://reactmarathon-api.herokuapp.com/assets/subzero.gif`,
    weapon: [`axe`],
    attack() {
        console.log(`${playerOne.name} fight`);
    }

};
const playerTwo = {
    name: `React`,
    hp: 50,
    img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
    weapon: [`axe`],
    attack() {
        console.log(`${playerOne.name} fight`);
    }

};
function createPlayer(player, obj) {
    let divPlayer = document.createElement('div'),
        divProgress = document.createElement('div'),
        divCharecter = document.createElement('div'),
        divLife = document.createElement('div'),
        divName = document.createElement('div'),
        img = document.createElement(`img`);
    const arena = document.querySelector(`.arenas`);
        img.src = obj.img;


    divPlayer.classList.add(player);
    divProgress.classList.add(`progressbar`);
    divCharecter.classList.add(`character`);
    divLife.classList.add(`life`);
    divLife.style.width= `${obj.hp}%`;
    divName.classList.add(`name`);
    divName.insertAdjacentText(`afterbegin`, obj.name);
    divPlayer.append(divProgress);
    divPlayer.append(divCharecter);
    divProgress.append(divLife);
    divProgress.append(divName);
    divCharecter.append(img);

    arena.append(divPlayer);
    console.log(divPlayer);

}

createPlayer(`player1`, playerOne);
createPlayer(`player2`, playerTwo);