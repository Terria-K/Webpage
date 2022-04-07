class Card {
    constructor(attr) {
        this.name = attr['title'];
        this.description = attr['description'];
    }

    getTitle() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }
}