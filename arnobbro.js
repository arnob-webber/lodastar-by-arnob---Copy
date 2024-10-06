let coinCount = 120;
let clickCount = 0;

document.getElementById('earnCoins').addEventListener('click', function() {
    clickCount++;
    let message = '';

    if (clickCount === 5) {
        coinCount += 1;
        message = 'You earned 1 coin!';
        showCustomAlert(message); 
    } else if (clickCount === 10) {
        let randomCoins = Math.random() > 0.5 ? 2 : 1;
        coinCount += randomCoins;
        message = `Lucky! You earned ${randomCoins} coins!`;
        showCustomAlert(message); 
    } else if (clickCount === 15) {
        let randomCoins = Math.random() > 0.5 ? 3 : 2;
        coinCount += randomCoins;
        message = `Wow! You earned ${randomCoins} coins!`;
        showCustomAlert(message); 
    } else if (clickCount === 20) {
        let jackpotCoins = Math.floor(Math.random() * 3) + 3; 
        coinCount += jackpotCoins;
        message = `Jackpot!! You earned ${jackpotCoins} coins!`;
        showCustomAlert(message); 
        clickCount = 0; 
    }

    document.getElementById('coinCount').textContent = coinCount;
});

function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');

    alertMessage.textContent = message;
    alertBox.classList.remove('hidden'); 

    document.getElementById('closeAlert').addEventListener('click', function() {
        alertBox.classList.add('hidden'); 
    });
}
