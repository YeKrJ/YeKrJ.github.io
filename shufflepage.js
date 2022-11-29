function shufflePage() {
  push()
  translate(0, 20)
  if (clickCheck < 2) {
    push()
    translate(0, -20)
    for (n=1;n<12;n++) {
    rot[n] = rotOut[n];
    pos[n] = posC[n];
    cards[n] = new Card(cardImg[n], cardImgA[n], cardImgS[n]);
    cards[n].move(rot[n], pos[n], 0, 0);
    }
    pop()
  }
  if (clickCheck == 2) {
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    cardNumber = 0;
    push()
    translate(0, -20)
    if (i0 < 30) {
      i0++;
    }
    if (j0 < 58) {
      j0+=2
    }
    for (n=1;n<12;n++) {
      rot[n] = rotOut[n];
      pos[n] = posC[n];
      cards[n].move(rot[n], pos[n], i0, j0);
    }
    pop()
    if (i0 >= 30 && j0 >= 58) {
      clickCheck++;
      i = 0;
    }
  }
  if (clickCheck >= 3 && clickNext == 0) {
    i0 = 0;
    j0 = 0;
    i2 = 0;
    j2 = 0;
    push();
    translate(0, -20);
    if (i < 29) {
      i++;
    } 
    if (j < 80) {
      j+=2
    }
    for (n=1;n<12;n++) {
      rot[n] = rotIn[n];
      pos[n] = posIn[n];
      cards[n].move(rot[n], pos[n], i, j);
      cards[n].over(pos[n], j);
    }
    pop()
    for(n2=1;n2<12;n2++) {
      if (selected[n2] == true) {
        cards[n2+2].click();
      }
    }
  } 
  if (clickNext > 0) {
    i = 0;
    j = 0;
    push();
    translate(0, -10);
    if (i2 < 30) {
      i2++;
    } 
    if (j2 < 120) {
      j2+=2
    }
    for (n=1;n<12;n++) {
    rot[n] = rotOut[n];
    pos[n] = posOut[n];
    cards[n].move(rot[n], pos[n], i2, j2);
    }
    pop();
  }
  pop();
  if (clickCheck >= 1) {
    buttonH.over();
    buttonH.display();
  }
  if (clickCheck > 1 && clickNext == 0) {
    buttonNextS.over();
    buttonResetS.over();
    buttonNextS.display();
    buttonResetS.display();
  }
  // image(card, 200, 200, 105*a, 185*a);
  if (clickNext == 1) {
    resultOneNumber = int(random(21.4))
  }
  if (clickNext > 0 && modeOne == true) {
    push();
    if (rT < 69) {
    rT++;
    }
    translate(0,posPage[rT]-330)
    resultPageOne();
    pop()
    clickNext = 2;
  }
}

function shuffleSelect() {
    if (modeOne) {
      if (cardNumber < 1) {
        for(i=1;i<12;i++) {
        cardClickPX[i] = (width/10*i)
        if (mouseX > cardClickPX[i] && mouseX < cardClickPX[i]+40*wX && mouseY > 276*wX && mouseY < (276+150)*wX) {
          cardSelected[i]++;
        }
        if (cardSelected[i] % 2 == 1) {
          selected[i] = true;
        }
        if (selected[i]) {
          cardNumber++;
        }
        }
      }
    } 
}