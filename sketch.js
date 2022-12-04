function setup() {
  wX = windowHeight/660;
  createCanvas(390*wX, 660*wX);
  arrayData = new ArrayData();
  arrayData.In();
  arrayData.Out();
  arrayData.C();
  arrayData.PageIn();
  angleMode(DEGREES);
  button1 = new Button (61, 240, 270, 48, oneButtonA, oneButtonP);
  button2 = new Button (61, 327, 270, 48, twoButtonA, twoButtonP);
  button3 = new Button (61, 414, 270, 48, multiButtonA, multiButtonP);
  button4 = new Button (61, 502, 270, 48, manualButtonA, manualButtonP);
  buttonH = new Button (144, 595, 105, 25, homeButtonA, homeButtonP);
  buttonNextS = new Button (194, 469, 56, 60, nextButtonA, nextButtonP);
  buttonResetS = new Button (140, 469, 56, 60, shuffleResetA, shuffleResetP);
  nextButtonDes = new Button (140,524,113,50, startButtonA, startButtonP);
  resetButton = new Button (82,595,62,25,resetButtonA, resetButtonP);
  shareButton = new Button (249,595,62,25,shareButtonA, shareButtonP);
  manualButton1 = new Button(126, 541, 45, 45, manualOneButtonA, manualOneButtonP);
  manualButton2 = new Button(173, 541, 45, 45, manualTwoButtonA, manualTwoButtonP);
  manualButton3 = new Button(220, 541, 45, 45, manualThreeButtonA, manualThreeButtonP);
  closeButton = new Button(312, 304, 16, 16, closeButtonA, closeButtonP);
  yn = [ynS,ynY,ynS,ynY,ynY,ynY,ynY,ynY,ynY,ynN,ynY,ynS,ynN,ynN,ynN,ynN,ynN,ynN,ynN,ynN,ynN];
  selected = [false, false, false, false, false, false, false, false, false, false, false];
  cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  inp = [];
  inp[1] = new InputBar(width/2-100, 220, 50);
  inp[2] = new InputBar(width/2-25, 220, 50);
  inp[3] = new InputBar(width/2+50, 220, 50);
  inp[4] = new InputBar(width/2-100, 260, 50);
  inp[5] = new InputBar(width/2-25, 260, 50);
  inp[6] = new InputBar(width/2+50, 260, 50);
  inp[1].inp.hide();
  inp[2].inp.hide();
  inp[3].inp.hide();
  inp[4].inp.hide();
  inp[5].inp.hide();
  inp[6].inp.hide();
}

function draw() {
  background(255);
  frameRate(30);
  if (clickCheck == 0) frontPage();
  if (clickCheck == 1) {
    if (modeOne) {
      description(1);
    } else if (modeTwo) {
      description(2);
    } else if (modeMulti) {
      description(3);
    } else if (modeManual) {
      description(4);
    }
  }
  shufflePage();
  majorScript();
  minorScript();
  if (clickCheck > 1) {
    if (modeOne) image(currentOne, 139*wX, 37*wX, 109*wX, 26*wX);
    else if (modeTwo) image(currentTwo, 139*wX, 37*wX, 109*wX, 26*wX);
    else if (modeMulti) image(currentMulti, 139*wX, 37*wX, 109*wX, 26*wX);
    else if (modeManual) image(currentManual, 139*wX, 37*wX, 109*wX, 26*wX);
  }
  if (clickNext > 0) {
    resetButton.over();
    resetButton.display();
    shareButton.over();
    shareButton.display();
  }
}

function clickNtouch() {
  if (button1.click() && clickCheck == 0) {
  clickCheck++;
  modeOne = true;
  modeTwo = false;
  modeMulti = false;
  modeManual = false;
  }
  if (button2.click() && clickCheck == 0) {
  clickCheck++;
  modeTwo = true;
  modeOne = false;
  modeMulti = false;
  modeManual = false;
  }
  if (button3.click() && clickCheck == 0) {
  clickCheck++;
  modeMulti = true;
  modeOne = false;
  modeTwo = false;
  modeManual = false;
  }
  if (button4.click() && clickCheck == 0) {
  clickCheck++;
  modeManual = true;
  modeOne = false;
  modeTwo = false;
  modeMulti = false;
  }
  if (nextButtonDes.click() && desCheck == 10 && resultCheck == false) {
  clickCheck = 2;
  }
  if (buttonH.click() && clickCheck > 0) {
    cardNumber = 0;
    desCheck = 0;
    clickCheck = 0;
    clickNext = 0;
    scoreWidth = 0;
    i0 = 0;
    j0 = 0;
    ir = 0;
    j = 0;
    i2 = 0;
    j2 = 0;
    rT = 0;
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    modeOne = false;
    modeTwo = false;
    modeMulti = false;
    modeManual = false;
    resultCheck = false;
    manualOne = false;
    manualTwo = false;
    manualThree = false;
    for(let i=1; i<=6; i++) {
      inp[i].inp.hide();
    }
  }
  if (clickCheck > 1) {
  if (modeOne) {
    if (cardNumber > 0 && buttonNextS.click()) {
      clickNext++;
      }
  } else if (modeTwo) {
    if (cardNumber > 2 && buttonNextS.click()) {
      clickNext++;
      }
  } else if (modeMulti) {
    if (cardNumber > 2 && buttonNextS.click()) {
      clickNext++;
      }
  } else {
    if (cardNumber > 3 && buttonNextS.click()) {
      clickNext++;
      }
  }
}
  
  if (buttonResetS.click() && cardNumber > 0) {
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    clickNext = 0;
    clickCheck = 3;
    cardNumber = 0;
    rT = 0;
  }
  if (resetButton.click() && clickCheck > 2) {
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    i0 = 0;
    j0 = 0;
    ir = 0;
    j = 0;
    i2 = 0;
    j2 = 0;
    rT = 0;
    clickNext = 0;
    clickCheck = 3;
    cardNumber = 0;
    desCheck = 0;
    scoreWidth = 0;
    resultCheck = false;
    manualOne = false;
    manualTwo = false;
    manualThree = false;
    for(let i=1; i<=6; i++) {
      inp[i].inp.hide();
    }
  }
  if (shareButton.click() && clickCheck > 2) {
    save('TarotResult'+'_'+year()+'_'+month()+'_'+day()+'_'+hour()+'_'+minute()+'_'+second()+'.png');
  }
  if (clickCheck > 2 && resultCheck == false) {
  shuffleSelect();
  }
  if (resultCheck) {
    if (manualButton1.click()) {
      manualOne = true;
      manualTwo = false;
      manualThree = false;
    }
    if (manualButton2.click()) {
      manualOne = false;
      manualTwo = true;
      manualThree = false;
    }
    if (manualButton3.click()) {
      manualOne = false;
      manualTwo = false;
      manualThree = true;
    }
    if (closeButton.click()) {
      manualOne = false;
      manualTwo = false;
      manualThree = false;
    }
  }
}

function mousePressed() {
  clickNtouch();
}

function touchStarted() {
  clickNtouch();
}