// Huwag ninyo tong pakialamin
const arrayOfCards = [];

function main() {
    const cardNode = document.getElementById("childcontainer");
    const container = document.getElementById("container");
    connectEvents();

    addCards(cardNode, false);
    addCards(cardNode);
    addCards(cardNode);

    for (var i = 0; i < arrayOfCards.length; i++) {
        container.appendChild(arrayOfCards[i]);
        let text = arrayOfCards[i].childNodes[3];
        let cardTitleText = text.childNodes[0];
        let cardDescText = text.childNodes[3].childNodes[1];
        cardTitleText.nodeValue = cards[i].getTitle();
        cardDescText.nodeValue = cards[i].getDescription();
    }
}

function connectEvents() {
    const aclcButton = document.getElementById("0");
    aclcButton.onclick = openACLC;
}

function addCards(node, clone = true) {
    if (clone) {
        arrayOfCards.push(node.cloneNode(true));
        return;
    }
    arrayOfCards.push(node);
}

function openLink(url) {
    window.open(url);
}

function openACLC ()  {
    openLink("https://www.facebook.com/ACLCMalolosOfficial");
}

main();