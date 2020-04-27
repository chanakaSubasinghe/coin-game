const player = document.querySelector('#player');
const coin = document.querySelector('#coin')

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

moveCoin()

window.addEventListener('keydown', function(e){
    const currTop = player.y;
    const currLeft = player.x;

    switch (e.key) {
        case 'ArrowDown' || 'Down':
            player.style.top = `${currTop + 25}px`;
            break;

        case 'ArrowUp' || 'Up':
            if(currTop > 0)
            player.style.top = `${currTop - 25}px`;
            break;

        case 'ArrowLeft' || 'Left':
            if(currLeft > 0)
            player.style.left = `${currLeft - 25}px`;
            player.style.transform = 'scale(-1,1)'
            break;

        case 'ArrowRight' || 'Right':
            player.style.left = `${currLeft + 25}px`;
            player.style.transform = 'scale(1,1)'
            break;
        default: break;    
    }

    if(isTouching(player,coin)) moveCoin();
})





