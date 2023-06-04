export class Game {
    public players: string[] = ['Test1', 'Test2', 'Test3'];
    public stack: string[] = [];
    public played_cards: string[] = [];
    public current_player: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push(i + '_of_clubs.png')
            this.stack.push(i + '_of_diamonds.png')
            this.stack.push(i + '_of_hearts.png')
            this.stack.push(i + '_of_spades.png')
        }
        this.shuffle(this.stack)
        console.log(this.stack)
    }

    shuffle(array: any[]) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
}