const cardTextTile = [
    "First Title",
    "Second Title",
    "Third Title"
];

const cardTextDescription = [
    "First Description",
    "Second Description",
    "Third Description"
]



const arrayOfCards = [];

function main() {
    const cardNode = document.getElementById("childcontainer");
    const container = document.getElementById("container");
    const aclcButton = document.getElementById("0");
    aclcButton.onclick = openACLC;

    addCards(cardNode, false);
    addCards(cardNode);
    addCards(cardNode);

    for (var i = 0; i < arrayOfCards.length; i++) {
        container.appendChild(arrayOfCards[i]);
        let text = arrayOfCards[i].childNodes[3];
        let cardTitleText = text.childNodes[0];
        let cardDescText = text.childNodes[3].childNodes[1];
        cardTitleText.nodeValue = cardTextTile[i];
        cardDescText.nodeValue = cardTextDescription[i];
    }
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