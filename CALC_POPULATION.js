//! population in statistics =>

let para = [0, 2, 10];
function POPULATION(parametarsArray) {
    let parametars = new Set(parametarsArray);
    let params = [];
    for (const param of parametars) {
        params[params.length] = param;
    }
    let f = params.length;
    let RF = 0;
    let MEAN = 0;
    let VARIANCE = 0;
    let STANDARD_DEVIATION = 0;
    for (let i = 0; i < f; i++) {
        MEAN += params[i];
        VARIANCE += Math.pow(params[i], 2);
        RF += 1 / f;
    }
    MEAN = MEAN / f;
    VARIANCE = (VARIANCE / f) - Math.pow(MEAN, 2);
    STANDARD_DEVIATION = Math.sqrt(VARIANCE);
    let result = new Map();
    result.set("MEAN", MEAN);
    result.set("VARIANCE", VARIANCE);
    result.set("STANDARD_DEVIATION", STANDARD_DEVIATION);
    let final = {
        "MEAN": result.get("MEAN"),
        "VARIANCE": result.get("VARIANCE"),
        "STANDARD_DEVIATION": result.get("STANDARD_DEVIATION").toFixed(2),
    };
    return final;
}
console.log(POPULATION(para));