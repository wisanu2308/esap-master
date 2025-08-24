var numeral = require("numeral");

let exports = {};

exports.getCurrencyFormat = (value) => {
    return numeral(value).format("0,0.00000");
};

exports.getUnitFormat = (value) => {
    return numeral(value).format("0,0.000");
};

exports.getNumberFormat = (value) => {
    return numeral(value).format("0,0.00");
};

exports.getPackageFormat = (value) => {
    return numeral(value).format("0,0");
};

exports.getNonDigitNumFormat = (value) => {
    return numeral(value).format("0,0");
};

export default exports;