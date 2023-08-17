function calculateReward(panels, betAmount) {
    if (panels[0].isMatched(panels[1], panels[2])) {
        // 3つのカードが一致した場合の報酬
        return betAmount * 3;
    } else if (
        panels[0].isMatched(panels[1], panels[2]) ||
        panels[1].isMatched(panels[0], panels[2]) ||
        panels[2].isMatched(panels[0], panels[1])
    ) {
        // 2つのカードが一致した場合の報酬
        return betAmount * 2;
    } else {
        // カードが一致しない場合の報酬
        return 0;
    }
}

module.exports = {
    calculateReward
};




























