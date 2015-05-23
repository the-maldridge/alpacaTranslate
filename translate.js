function translate() {
    var name = document.getElementById("tForm").user.value;
    var text = document.getElementById("tForm").question.value;
    message = "Unfortunately it has been detected that your network is not using IPv6.  Alpaca Address Translation (AAT) is not backwards compatible with IPv4 at this time.";
    document.getElementById("interact").innerHTML = message;
}
