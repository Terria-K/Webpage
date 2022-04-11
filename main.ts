// Huwag ninyo tong pakialamin
const arrayOfCards: HTMLElement[] = [];
const content: HTMLElement = getNodeByID('content-id');

enum Destinations {
    Contact = "Contact",
    Home = "Home",
    About = "About"
}

function main(): void {
    
    const cardNode: HTMLElement = getNodeByID('childcontainer');
    const container: HTMLElement = getNodeByID('container');

    addHoverScroller('contact', Destinations.Contact);
    addHoverScroller('home', Destinations.Home);
    addHoverScroller('about', Destinations.About);
    addHoverScroller('homelogo', Destinations.Home);
    toggleButton();

    for (let i: number = 0; i < cards.length; i++) {
        addCards(cardNode);
        container.appendChild(arrayOfCards[i]);
        let text: ChildNode = getChild(3, arrayOfCards[i]);
        let cardTitleText: HTMLElement = getChild(0, text);
        let cardDescText: ChildNode = getChild(3, text).childNodes[1];
        cardTitleText.nodeValue = cards[i].Title;
        cardDescText.nodeValue = cards[i].Description;
        if (cards[i]['image'] === "null") {
            delete cards[i];
            continue;
        }
        let image: HTMLElement = getChild(1, arrayOfCards[i]);
        image.style.backgroundImage = `url(${cards[i].Image})`;
        delete cards[i];
    }

    cardNode.remove();
    refreshText();
}

function refreshText(): void {
    let contentChild: ChildNode = content.childNodes[3].childNodes[0];
    contentChild.nodeValue = randomText[Math.ceil(Math.random() * 3)];
}


function addCards(node: HTMLElement): void {
    arrayOfCards.push(<HTMLElement>node.cloneNode(true));
}


function toggleButton(): void {
    const toggle: Element = getNodeElement('togglebutton', 0);
    const navbarLinks: Element = getNodeElement('navbar-links', 0);

    toggle.addEventListener('click', (): void => {
        navbarLinks.classList.toggle('active');
    });
}


function addHoverScroller(button: string, dest: Destinations): void {
    getNodeByID(button).addEventListener('click', (): void => {
        getNodeByID(`Dest_${dest}`).scrollIntoView({ behavior: 'smooth'})
    })
}

main();