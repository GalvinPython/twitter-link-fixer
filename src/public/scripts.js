//#region Cookies
// Note that cookies are currently not being used at the moment
// however they will be used to store the user's latest embed link
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // 24 hours
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}
//#endregion
function copyToClipboard() {
    const outputBox = document.getElementById("outputBox");
    outputBox.select();
    document.execCommand("copy");
}

document.getElementById("inputField").addEventListener("input", function () {
    forceUpdate();
});

document.getElementById("dropdownMenu").addEventListener("change", function () {
    forceUpdate();
});

function forceUpdate() {
    const inputText = document.getElementById("inputField").value;
    let outputText = "";

    if (inputText.includes("twitter.com") || inputText.includes("x.com")) {
        outputText = "https://" + document.getElementById("dropdownMenu").value + "/" + inputText.split(".com/")[1].split("?")[0];
    }

    document.getElementById('outputBox').value = outputText;
}