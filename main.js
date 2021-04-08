const playerOne = {
    name: `AngulaR`,
    hp: 50,
    img: `http://reactmarathon-api.herokuapp.com/assets/subzero.gif`,
    weapon: [`axe`],
    attack() {
        console.log(`${playerOne.name} fight`);
    }

};
const playerTwo = {
    name: `ReacT`,
    hp: 50,
    img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
    weapon: [`axe`],
    attack() {
        console.log(`${playerOne.name} fight`);
    }

};

function createPlayer(player, obj) {
    const divPlayer = document.createElement('div');
    const divProgress = document.createElement('div');
    const divCharecter = document.createElement('div');
    const divLife = document.createElement('div');
    const divName = document.createElement('div');
    const img = document.createElement(`img`);
    const arena = document.querySelector(`.arenas`);
    img.src = obj.img;


    divPlayer.classList.add(player);
    divProgress.classList.add(`progressbar`);
    divCharecter.classList.add(`character`);
    divLife.classList.add(`life`);
    divName.classList.add(`name`);

    divLife.style.width = `${obj.hp}%`;
    divName.insertAdjacentText(`afterbegin`, obj.name);

    divPlayer.append(divProgress);
    divPlayer.append(divCharecter);
    divProgress.append(divLife);
    divProgress.append(divName);
    divCharecter.append(img);
    arena.append(divPlayer);

}

createPlayer(`player1`, playerOne);
createPlayer(`player2`, playerTwo);