function multiInputBox() {
    if (cardNumber == 1) {
        ix = 20;
        iy = 20;
        inputOne = new InputBar(ix, iy);
        inputOne.display();
      }
      if (cardNumber == 3) {
        inputTwo = new InputBar(80, 20);
        inputTwo.display();
      }
      if (cardNumber > 5) {
          inputTwo.display();
      }
      if (cardNumber > 9) {
          inputTwo.display();
      }
      if (cardNumber > 14) {
          inputTwo.display();
      }
      if (cardNumber == 21) {
          inputTwo.display();
      }
}