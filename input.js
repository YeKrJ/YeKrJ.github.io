class InputBar {
    constructor(x, y, s, h, name) {
      this.x = x;
      this.y = y;
      this.size = s*wX;
      this.height = h*wX;
      this.initial = name;
      this.inp = createInput(this.initial);
      this.inp.position(this.x, this.y);
      this.inp.size(this.size, this.height);
      this.inp.input(this.myInputEvent);
    }
    
    show() {
     if (this.inp.elt.style.display == "none") {
      this.inp.elt.value = "";
      this.inp.show();
     }
    }

    value() {
    return this.inp.elt.value;
    }

    myInputEvent() {
        // console.log("you are typing: ", this.value());
      }
}


