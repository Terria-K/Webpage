// Huwag ninyo tong pakialamin
///<reference path="src/utils.ts"/>
///<reference path="src/classes/CardBase.ts" />
///<reference path="src/classes/ImageCard.ts"/>
///<reference path="src/writeable/cardtext.ts"/>
///<reference path="src/writeable/contentrandom.ts"/>

namespace ACLC {
    type Configure = {
        readonly buttonName: string
        readonly onClick: () => void
    }    
    
    enum Destinations {
        Contact = "Contact",
        Home = "Home",
        About = "About"
    }
    
    const content: HTMLElement = getNodeByID('content-id');
    const destinations: Map<string, Destinations> = new Map<string, Destinations>([
        ['contact', Destinations.Contact],
        ['home', Destinations.Home],
        ['about', Destinations.About],
        ['homelogo', Destinations.Home]
    ])
    
    
    export function main(): void {
        const cardNode: HTMLElement = getNodeByID('childcontainer');
    
        connectButtonEvents([{
            buttonName: 'enrollbutton',
            onClick: () => { visible('log', true) }
        },
        {
            buttonName: 'exitenrollbutton',
            onClick: () => { visible('log', false) }
        }])
    
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
    
    function connectButtonEvents(config: Configure[]): void {
        for (let i = 0; i < config.length; i++) {
            const button: HTMLButtonElement = getNodeByID(config[i].buttonName);
            button.onclick = config[i].onClick;
        }
    
        for (let entry of destinations.entries()) {
            addHoverScroller(entry[0], entry[1]);
        }   
    
        const toggle: Element = getNodeByID('toggle');
        const navbarLinks: Element = getNodeByID('nvlink');
    
        toggle.addEventListener('click', (): void => {
            navbarLinks.classList.toggle('active');
        });
    }
    
    
    function addHoverScroller(button: string, dest: Destinations): void {
        getNodeByID(button).addEventListener('click', (): void => {
            getNodeByID(`Dest_${dest}`).scrollIntoView({ behavior: 'smooth'})
        })
    }    
}

ACLC.main();