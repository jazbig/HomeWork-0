const playerOne = {
    player: 1,
    name: `AngulaR`,
    hp: 100,
    img: `http://reactmarathon-api.herokuapp.com/assets/subzero.gif`,
    weapon: [`axe`],
    attack() {
        console.log(`${playerOne.name} fight`);
    }

};
const playerTwo = {
    player: 2,
    name: `ReacT`,
    hp: 100,
    img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
    weapon: [`axe`],
    attack() {
        console.log(`${playerOne.name} fight`);
    }

};

const randomButton = document.querySelector(`.button`);

function createPlayer(player, obj) {
    const divPlayer = document.createElement('div');
    const divProgress = document.createElement('div');
    const divCharecter = document.createElement('div');
    const divLife = document.createElement('div');
    const divName = document.createElement('div');
    const img = document.createElement(`img`);
    const arena = document.querySelector(`.arenas`);
    let hp;
    if (obj.hp < 0) {hp = 0;}
    else {hp = obj.hp;}
    img.src = obj.img;


    divPlayer.classList.add(player);
    divProgress.classList.add(`progressbar`);
    divCharecter.classList.add(`character`);
    divLife.classList.add(`life`);
    divName.classList.add(`name`);

    divLife.style.width = `${hp}%`;
    divName.insertAdjacentText(`afterbegin`, obj.name);

    divPlayer.append(divProgress);
    divPlayer.append(divCharecter);
    divProgress.append(divLife);
    divProgress.append(divName);
    divCharecter.append(img);
    arena.append(divPlayer);

    function random () {
        let ran = Math.trunc(Math.random()*10)+Math.trunc(Math.random()*10);
        if (ran < +divLife.style.width.slice(0,-1)) {return ran;}
        else {return +divLife.style.width.slice(0,-1);}
    }

    function winPlayer (name) {
        const winTitle = document.createElement(`div`);
        winTitle.classList.add(`loseTitle`);
        winTitle.textContent = name + ` win`;
        arena.append(winTitle);
    }

    randomButton.addEventListener('click', (e) => {
        let hitNumber = +divLife.style.width.slice(0,-1) - random();
        divLife.style.width = hitNumber + `%`;
        if (hitNumber == 0) {
            winPlayer(divLife.nextSibling.textContent);
            randomButton.disabled = true;
        }
        
    });

}

createPlayer(`player1`, playerOne);
createPlayer(`player2`, playerTwo);

