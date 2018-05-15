export class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    foo() {
        const self = this;
        function callback() {
            return self.id * 10;
        }

        const callback2 = () => this.id * 100;

        console.log(callback2());

        const city = 'Leipzig';
        const text = 'Hallo\n' + city + '!';

        const text2 = `Hallo
        ${city}!`;
        console.log(text2);
    }
}
