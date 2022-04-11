interface ICard {
    title: string
    description: string
    image: string
}

class Card  {

    private name: string
    private description: string
    private image: string

    constructor(attr: ICard) {
        this.name = attr.title;
        this.description = attr.description;
        this.image = attr.image;
    }

    public get Title() {
        return this.name;
    }

    public get Description() {
        return this.description;
    }

    public get Image() {
        return this.image;
    }
}
