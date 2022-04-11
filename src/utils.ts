const openLink = (url: string): void => {
    window.open(url);
}

const openACLC = (): void => {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}

const getNodeElements = (className: string): HTMLCollectionOf<Element> => document.getElementsByClassName(className);
const getNodeElement = (className: string, idx: number): Element => getNodeElements(className)[idx];
const getNodeByID = (id: string): HTMLElement => <HTMLElement>document.getElementById(id);
const getChild = <NodeHTML extends ChildNode>(idx: number, node: Node): NodeHTML => <NodeHTML>node.childNodes[idx];
const visible = (target: string, active: boolean): void => {
    let x: HTMLElement = getNodeByID(target);
    x.style.display = active ? 'block' : 'none';
}

