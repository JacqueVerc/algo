var predictionsBourse = JSON.parse(process.argv[2]);
function moneyForNothing(predictions) {
    var res = [];
    var tmp = null;
    for (var i = 0; i < predictions.length - 1; i++) {
        if (!tmp && predictions[i] < predictions[i + 1]) {
            tmp = i;
        }
        else if (tmp && predictions[i] > predictions[i + 1]) {
            res.push(tmp, i);
            tmp = null;
        }
    }
    if (tmp) {
        res.push(tmp, predictions.length - 1);
    }
    return res;
}
console.log(moneyForNothing(predictionsBourse));
