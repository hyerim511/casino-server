function calculateReward(panels) {
    if (panels[0].isMatched(panels[1], panels[2])) {
        return 3;
    } else if (
        panels[0].isMatched(panels[1], panels[2]) ||
        panels[1].isMatched(panels[0], panels[2]) ||
        panels[2].isMatched(panels[0], panels[1])
    ) {
        return 2;
    }
    return 0;
}

function handleBetClick() {
    const betAmount = parseInt(betInput.value);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > coins) {
        return;
    }

    coins -= betAmount;
    coinsDisplay.textContent = `Coins: ${coins}`;

    const reward = calculateReward(panels);
    coins += reward * betAmount;
    coinsDisplay.textContent = `Coins: ${coins}`;

    resultDisplay.textContent = reward > 0 ? `You won ${reward * betAmount} coins!` : "Try again!";
}



module.exports = {
    calculateReward,
    handleBetClick
};






























