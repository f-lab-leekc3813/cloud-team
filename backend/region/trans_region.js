const jsonFile = require('./region.json');

function isAlphabet(str) {
    // 알파벳 패턴 검사
    const regex = /^[a-zA-Z]+$/;

    return regex.test(str);
}


function trans_region(data) {
    if (isAlphabet(data)){
        return data;
    } else {
        return jsonFile[data];
    }
}

module.exports = trans_region;