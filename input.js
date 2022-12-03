class InputBar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.result = 0;
    }

    display() {
        this.input = createInput('옵션');
        this.input.position(this.x*wX, this.y*wX)
        this.input.size(100*wX, 20*wX)
    }

    inputValue() {
        this.result = this.input.value();
        return this.result;
    }
}

