function duckDuckGoose(player, turn) {
    if (player.length >= turn) {
        return player[turn - 1];
    } else if (turn % player.length === 0) {
        return player[player.length - 1];
    } else {
        let yourTurn = turn % player.length;
        return player[yourTurn - 1];
    }
};