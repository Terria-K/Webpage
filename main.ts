// Huwag ninyo tong pakialamin
enum Destinations {
    Contact = "Contact",
    Home = "Home",
    About = "About"
}

const arrayOfCards: HTMLElement[] = [];
const content: HTMLElement = getNodeByID('content-id');
const destinations: string[][] = [
    ['contact', Destinations.Contact],
    ['home', Destinations.Home],
    ['about', Destinations.About],
    ['homelogo', Destinations.Home]
]

function main(): void {
    const cardNode: HTMLElement = getNodeByID('childcontainer');

    connectButtonEvents();

    loop(cards.length, i => {
        cards[i].addCards(<HTMLElement>cardNode.cloneNode(true));
        delete cards[i];
    });

    cardNode.remove();
    refreshText();
}

function refreshText(): void {
    let contentChild: ChildNode = content.childNodes[3].childNodes[0];
    contentChild.nodeValue = randomText[Math.ceil(Math.random() * 3 - 1)];
}


function addCards(node: HTMLElement): void {
    arrayOfCards.push(<HTMLElement>node.cloneNode(true));
}


function connectButtonEvents(): void {
    const enrollButton: HTMLButtonElement = getNodeByID<HTMLButtonElement>('enrollbutton');
    const exitenrollButton: HTMLButtonElement = getNodeByID<HTMLButtonElement>('exitenrollbutton');
    enrollButton.onclick = (): void => visible('log', true);
    exitenrollButton.onclick = (): void => visible('log', false);
    
    const arrowLeftButton: HTMLButtonElement = getNodeElement<HTMLButtonElement>('arrowleft', 0);
    const arrowRightButton: HTMLButtonElement = getNodeElement<HTMLButtonElement>('arrowright', 0);

    loop(destinations.length, i => {
        addHoverScroller(destinations[i][0], <Destinations>destinations[i][1]);
    })
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
