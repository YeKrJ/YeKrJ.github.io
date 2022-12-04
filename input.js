class InputBar {
    constructor(x, y, s) {
      this.x = x;
      this.y = y;
      this.size = s;
      this.inp = createInput("옵션");
      this.inp.position(this.x, this.y);
      this.inp.size(this.size);
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


