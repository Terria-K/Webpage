function connectEvents() {
    const aclcButton = document.getElementById("0");
    aclcButton.onclick = openACLC;
}

function openLink(url) {
    window.open(url);
}

function openACLC ()  {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}

connectEvents();