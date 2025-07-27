const banner = document.querySelector('.banner');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function spawnCoin() {
      const coin = document.createElement('div');
      coin.className = 'coin';
      coin.style.left = Math.random() * 270 + 'px';
      coin.style.animationDuration = (Math.random() * 2 + 2) + 's';

      coin.addEventListener('mouseenter', () => {
        score++;
        scoreDisplay.textContent = score;
        coin.remove();
      });

      banner.appendChild(coin);

      setTimeout(() => {
        if (coin.parentNode) coin.remove();
      }, 5000);
    }

    setInterval(spawnCoin, 1000);