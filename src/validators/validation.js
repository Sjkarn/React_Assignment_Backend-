const mongoose= require('mongoose');

const isValid = function (valid) {
    const validRegex = /^[a-zA-Z ]+$/;
    return validRegex.test(valid);
};

const isValidEmail = function (email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    return emailRegex.test(email);
};

const isValidRoll = function (roll) {
    const rollRegex = /^[A-Za-z0-9-]*$/;
    return rollRegex.test(roll);
};

module.exports= {isValid,isValidEmail,isValidRoll}