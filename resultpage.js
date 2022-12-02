function resultPageOne() {
  image(cardJBg[resultOneNumber], 0, 0, width, height);
  image(yn[resultOneNumber], 53*wX, 197*wX, 77*wX, 33*wX);
  image(cardJ[resultOneNumber], 142*wX, 72*wX, 105*wX, 185*wX);
  image(oneResultBack, 52*wX, 222*wX, 279*wX, 70*wX);
  textSize(34*wX);
  textFont(fontg);
  text(tarotName[resultOneNumber], 70*wX, 268*wX);
  textSize(22*wX);
  push();
  fill(0, 25);
  textAlign(RIGHT);
  text(tarotEng[resultOneNumber], 310*wX, 270*wX);
  pop();
  textLeading(15*wX);
  textSize(9*wX);
  textFont(fontm);
  textWrap(WORD);
  text(tarotScript[13],61*wX,304*wX,268*wX,400*wX);
  image(oneResultMore,55*wX,497*wX,280*wX,81*wX);
  textFont(fontm, 6*wX);
  text(tarotLove[13], 95*wX,517*wX);
  text(tarotMoney[13], 95*wX,532*wX);
  text(tarotStudy[13], 95*wX,547*wX);
  text(tarotBus[13], 95*wX,562*wX);
}

function resultPageTwo() {
  if (rT > 50 && scoreWidth < tarotMScore[2][13]*1.35) {
    scoreWidth++;
  }
  fill(0);
  image(cardMBg[resultOneNumber], 0, 0, width, height);
  image(firstBar,128*wX,151*wX,137*wX,23*wX);
  textSize(17*wX);
  textFont(fontg);
  text('본인',142*wX,108*wX);
  text('상대',215*wX,232*wX);
  textAlign(CENTER);
  textSize(15*wX);
  text(tarotMScore[2][13]+'%',width/2,188*wX);
  rect(128*wX,165*wX,scoreWidth*wX,5*wX);

  image(cardM[resultTwoNumber1], 38*wX, 83*wX, 105*wX, 184*wX);
  image(cardM[resultTwoNumber2], 248*wX, 83*wX, 105*wX, 184*wX);

  image(twoDesMe, 37*wX, 232*wX, 160*wX, 142*wX);
  image(twoDesYou, 193*wX, 232*wX, 160*wX, 142*wX);
  image(meBack, 37*wX, 232*wX, 160*wX, 50*wX);
  image(youBack, 193*wX, 232*wX, 160*wX, 50*wX);
  
  textAlign(LEFT);
  if(resultTwoNumber1 < 4) {
  fill(250,100,0);
  } else if (resultTwoNumber1 < 8) {
    fill(220,200,0)
  } else if (resultTwoNumber1 < 12) {
    fill(50,200,0)
  } else {
    fill(10,150,220)
  }
  textSize(11*wX);
  textFont(fontg);
  text(tarotMName[resultTwoNumber1], 55*wX, 262*wX);
  textAlign(RIGHT);
  if(resultTwoNumber2 < 4) {
    fill(250,100,0);
    } else if (resultTwoNumber2 < 8) {
      fill(220,200,0)
    } else if (resultTwoNumber2 < 12) {
      fill(50,200,0)
    } else {
      fill(10,150,220)
    }
  text(tarotMName[resultTwoNumber2], 334*wX, 262*wX);

  fill(0);
  textSize(11.5*wX);
  textFont(fontgm);
  textAlign(LEFT);
  text(tarotMOne[2], 57*wX, 298*wX, 129*wX, 34*wX);
  text(tarotMTwo[2], 57*wX, 338*wX, 129*wX, 34*wX);
  textAlign(RIGHT);
  text(tarotMOne[15], 206*wX, 298*wX, 129*wX, 34*wX);
  text(tarotMTwo[15], 206*wX, 338*wX, 129*wX, 34*wX);

  textSize(20*wX);
  textFont(fontg);
  textAlign(CENTER);
  text(tarotMScriptSumm[2][13],width/2,406*wX);
  textLeading(14*wX);
  textSize(9*wX);
  textAlign(LEFT);
  textFont(fontm);
  textWrap(WORD);
  text(tarotMScript[2][13],48*wX,437*wX, 295*wX, 45*wX);
  image(twoResultMore,55*wX,490*wX,280*wX,80*wX);
  image(twoResultDefault,134*wX,497*wX,121*wX,60*wX);
}

function resultPageManual() {
  resultCheck = true;
  image(cardJ[resultManualNumber1], 38*wX, 93*wX, 105*wX*0.9, 184*wX*0.9);
  textAlign(CENTER);
  textSize(13*wX);
  text(tarotStar[13], 86*wX, 270*wX);
  image(cardJ[resultManualNumber2], 147*wX, 93*wX, 105*wX*0.9, 184*wX*0.9);
  text(tarotStar[13], 195*wX, 270*wX);
  image(cardJ[resultManualNumber3], 256*wX, 93*wX, 105*wX*0.9, 184*wX*0.9);
  text(tarotStar[13], 304*wX, 270*wX);
  image(manualUI, 0, 0, width, height);
  fill(0);
  textSize(25*wX);
  textFont(fontg);
  textAlign(LEFT);
  text(tarotName[resultManualNumber1], 108*wX, 328*wX);
  text(tarotName[resultManualNumber2], 108*wX, 407*wX);
  text(tarotName[resultManualNumber3], 108*wX, 486*wX);
  textSize(20*wX);
  fill(0, 15);
  textAlign(RIGHT);
  text(tarotEng[resultManualNumber1], 333*wX, 326*wX);
  text(tarotEng[resultManualNumber2], 333*wX, 405*wX);
  text(tarotEng[resultManualNumber3], 333*wX, 484*wX);
  manualButton1.over();
  manualButton1.display();
  manualButton2.over();
  manualButton2.display();
  manualButton3.over();
  manualButton3.display();
  if (manualOne) {
    image(manualDesOne, 51*wX, 292*wX, 289*wX, 252*wX);
    tint(255, 20)
    image(cardJ[resultManualNumber1], 243*wX, 352*wX, 105*wX*0.8, 184*wX*0.8);
    tint(255, 255)
    fill(0);
    textSize(25*wX);
    textFont(fontg);
    textAlign(LEFT);
    text(tarotName[resultManualNumber1], 71*wX, 330*wX);
    textLeading(11*wX);
    textSize(8*wX);
    textFont(fontm);
    textWrap(WORD);
    text(tarotScript[13],73*wX,352*wX,250*wX,400*wX);
  } else if (manualTwo) {
    image(manualDesTwo, 51*wX, 292*wX, 289*wX, 252*wX);
    tint(255, 20)
    image(cardJ[resultManualNumber2], 243*wX, 352*wX, 105*wX*0.8, 184*wX*0.8);
    tint(255, 255)
    fill(0);
    textSize(25*wX);
    textFont(fontg);
    textAlign(LEFT);
    text(tarotName[resultManualNumber2], 71*wX, 330*wX);
    textLeading(11*wX);
    textSize(8*wX);
    textFont(fontm);
    textWrap(WORD);
    text(tarotScript[13],73*wX,352*wX,250*wX,400*wX);
  } else if (manualThree) {
    image(manualDesThree, 51*wX, 292*wX, 289*wX, 252*wX);
    tint(255, 20)
    image(cardJ[resultManualNumber3], 243*wX, 352*wX, 105*wX*0.8, 184*wX*0.8);
    tint(255, 255)
    fill(0);
    textSize(25*wX);
    textFont(fontg);
    textAlign(LEFT);
    text(tarotName[resultManualNumber3], 71*wX, 330*wX);
    textLeading(11*wX);
    textSize(8*wX);
    textFont(fontm);
    textWrap(WORD);
    text(tarotScript[13],73*wX,352*wX,250*wX,400*wX);
  }
  if (manualOne || manualTwo || manualThree) {
    closeButton.over();
    closeButton.display();
  }
 }
