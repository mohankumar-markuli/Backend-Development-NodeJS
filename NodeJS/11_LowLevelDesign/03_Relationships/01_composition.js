class Heart {
    beat() {
        console.log("This heart is beating");
    }
}


class Human {
    #heart;
    constructor() {
        this.#heart = new Heart();
    }
}