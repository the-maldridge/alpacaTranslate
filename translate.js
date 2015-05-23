function translate() {
    var name = document.getElementById("tForm").user.value;
    var text = document.getElementById("tForm").question.value;
    message = text;
    document.getElementById("interact").innerHTML = alpacify(message);
}

function alpacify(s) {
    for(var i = 0; i < s.length; i++) {
	s.replaceAt(i, String.fromCharCode(s.charCodeAt(i) + Math.floor((Math.random() * 1000) + 1)));
    }
    return s;
}

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
