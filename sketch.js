function setup() {
  wX = windowHeight/660;
  createCanvas(390*wX, 660*wX);
  arrayData = new ArrayData();
  arrayData.In();
  arrayData.Out();
  arrayData.C();
  arrayData.PageIn();
  angleMode(DEGREES);
  buttonH = new Button (144, 595, 105, 25, homeButtonA, homeButtonP);
  buttonNextS = new Button (194, 469, 56, 60, nextButtonA, nextButtonP);
  buttonResetS = new Button (140, 469, 56, 60, shuffleResetA, shuffleResetP);
  nextButtonDes = new Button (139,534,113,50, startButtonA, startButtonP);
  resetButton = new Button (82,595,62,25,resetButtonA, resetButtonP)
  shareButton = new Button (249,595,62,25,shareButtonA, shareButtonP)
  yn = [ynS,ynY,ynS,ynY,ynY,ynY,ynY,ynY,ynY,ynN,ynY,ynS,ynN,ynN,ynN,ynN,ynN,ynN,ynN,ynN,ynN];
  selected = [false, false, false, false, false, false, false, false, false, false, false];
  cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function draw() {
  background(255);
  frameRate(30);
  if (clickCheck == 0) frontPage();
  if (clickCheck == 1) {
    if (modeOne) description(1);
    if (modeTwo) description(2);
  }
  shufflePage();
  script();
  if (clickCheck > 1) {
    if (modeOne) image(currentOne, 139*wX, 37*wX, 109*wX, 26*wX);
  }
  if (clickNext > 0) {
    resetButton.over();
    resetButton.display();
    shareButton.over();
    shareButton.display();
  }
}

function clickNtouch() {
  if (button1.click()) {
    clickCheck++;
    if (clickCheck == 0) {
      modeOne = true;
    }
  }
  if (button2.click()) {
    clickCheck++;
    if (clickCheck == 0) {
      modeTwo = true;
    }
  }
  if (button3.click()) {
  clickCheck++;
  }
  if (button4.click()) {
  clickCheck++;
  }
  if (nextButtonDes.click()) {
  clickCheck++;
  }
  if (buttonH.click() && clickCheck >= 1) {
    cardNumber = 0;
    clickCheck = 0;
    i0 = 0;
    j0 = 0;
    i = 0;
    j = 0;
    i2 = 0;
    j2 = 0;
    rT = 0;
    clickNext = 0;
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    selected = [];
  }
  if (cardNumber > 0 && buttonNextS.click()) {
  clickNext++;
  }
  if (buttonResetS.click()) {
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    cardNumber = 0;
    rT = 0;
  }
  if (resetButton.click()) {
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    i0 = 0;
    j0 = 0;
    i = 0;
    j = 0;
    i2 = 0;
    j2 = 0;
    rT = 0;
    clickNext = 0;
    clickCheck = 3;
    cardNumber = 0;
  }
  if (shareButton.click()) {
    save('TarotResult'+'_'+year()+'_'+month()+'_'+day()+'_'+hour()+'_'+minute()+'_'+second()+'.png');
  }
  shuffleSelect();
}

function mousePressed() {
  clickNtouch();
}

function touchStarted() {
  clickNtouch();
}