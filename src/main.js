function main() {
    let aclcButton = document.getElementById("0");
    aclcButton.onclick = openACLC;
}

function openLink(url) {
    window.open(url);
}

function openACLC ()  {
    openLink("https://www.facebook.com/ACLCMalolosOfficial");
}

main();