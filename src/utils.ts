type display = "block" | "none";

function openLink(url: string): void {
    window.open(url);
}

function openACLC(): void {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}

function getNodeElements(className: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(className);
}

function getNodeElement<T extends Element>(className: string, idx: number): T {
    return <T>getNodeElements(className)[idx];
}


function getNodeByID<T extends HTMLElement>(id: string): T {
    return <T>document.getElementById(id);
}

function getChild<NodeHTML extends ChildNode>(idx: number, node: Node): NodeHTML {
    return <NodeHTML>node.childNodes[idx];
}

function visible(target: string, active: display): void {
    let x: HTMLElement = getNodeByID(target);
    x.style.display = active;
}

function loop(iterations: number, block: (iter: number) => void): void {
    for (let i:number = 0; i < iterations; i++) {
        block(i);
    }
}

function clamp(value: number, min: number, max: number): number {
    return value > max ? max : value < min ? min : value;
} 

