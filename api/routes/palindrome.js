var unidecode = require('unidecode');

exports.noParam = function(req, res) {
    res.status(400).send("A param is needed to validate it as palindrome. Example: /palindrome/foo");
};

exports.validate = function(req, res) {
    var text = req.params.text;
    var isPalindrome = _isPalindrome(text);
    if(isPalindrome){
        res.status(200).send("200");
    }else{
        res.status(400).send("400");
    }
};

function _isPalindrome(text){
    text = _removeAccents(text.toLowerCase());
    text = _removeUnwantedCharacters(text);
    return text === _reverseText(text);
}

function _removeAccents(text){
    return unidecode(text);
}

function _removeUnwantedCharacters(text){
    var regExp = /[\W_]/g;
    return text.replace(regExp, '');
}

function _reverseText(text){
    return text.split('').reverse().join('');
}

exports.utils = {
    isPalindrome: _isPalindrome,
    removeAccents: _removeAccents,
    removeUnwantedCharacters: _removeUnwantedCharacters,
    reverseText: _reverseText
};
