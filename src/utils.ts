const openLink = (url: string): void => {
    window.open(url);
}

const openACLC = (): void => {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}

const getNodeElements = (className: string): HTMLCollectionOf<Element> => document.getElementsByClassName(className);
const getNodeElement = <T extends Element>(className: string, idx: number): T => <T>getNodeElements(className)[idx];
const getNodeByID = <T extends HTMLElement>(id: string): T => <T>document.getElementById(id);
const getChild = <NodeHTML extends ChildNode>(idx: number, node: Node): NodeHTML => <NodeHTML>node.childNodes[idx];
const visible = (target: string, active: boolean): void => {
    let x: HTMLElement = getNodeByID(target);
    x.style.display = active ? 'block' : 'none';
}
const loop = (iterations: number, block: (iter: number) => void): void => {
    for (let i:number = 0; i < iterations; i++) {
        block(i);
    }
}
const clamp = (value: number, min: number, max: number): number => 
    value > max ? max : value < min ? min : value;

