function resultPageOne() {
  image(cardMBg[resultOneNumber], 0, 0, width, height);
  image(yn[resultOneNumber], 53*wX, 197*wX, 77*wX, 33*wX);
  image(cardM[resultOneNumber], 142*wX, 72*wX, 105*wX, 185*wX);
  image(oneResultBack, 52*wX, 222*wX, 279*wX, 70*wX);
  textSize(34*wX);
  textFont(fontg);
  text(tarotName[resultOneNumber], 70*wX, 268*wX);
  textSize(22*wX);
  push();
  fill(0, 25);
  textAlign(RIGHT)
  text(tarotEng[resultOneNumber], 310*wX, 270*wX);
  pop();
  textLeading(15*wX);
  textSize(9*wX);
  textFont(fontm);
  textWrap(WORD);
  text(tarotScript[13],61*wX,304*wX,268*wX,400*wX);
  image(oneResultMore,55*wX,497*wX,280*wX,81*wX);
  textFont(fontm, 6*wX);
  text("성사되기 어렵거나, 위기에 있습니다. 섣부른 판단은 금물입니다.", 95*wX,517*wX);
  text("예상치 못한 큰 손해가 있을 수 있습니다.대비가 필요합니다.", 95*wX,532*wX);
  text("노력한 것에 비해 크게 실망할 수 있습니다.", 95*wX,547*wX);
  text("예상치 못한 변수가 발생하여 크게 방향을 바꾸어야 할 수 있습니다.", 95*wX,562*wX);
}

function resultPageTwo() {
  image(cardMBg[resultOneNumber], 0, 0, width, height);
  image(yn[resultOneNumber], 139*wX, 37*wX, 109*wX, 26*wX);
  image(cardM[resultOneNumber], 38*wX, 83*wX, 105*wX, 184*wX);
  image(cardM[resultOneNumber], 248*wX, 83*wX, 105*wX, 184*wX);
  
  image(firstBar,128*wX,151*wX,137*wX,23*wX);
  image(twoGuide,145*wX,83*wX,100*wX,174*wX);
  text(fontb,17*wX);
  text("80%",70*wX,239*wX);
  Rect(128,165,x,7);

  image(meBack, 39*wX, 252*wX, 153*wX, 42*wX);
  image(meBack, 199*wX, 252*wX, 153*wX, 42*wX);
  
  fill(255,0,0,150);
  textSize(13*wX);
  textFont(fontg);
  text(tarotName[resultOneNumber], 50*wX, 279*wX);

  fill(0,0,255,150);
  text(tarotName[resultOneNumber], 231*wX, 279*wX);

  fill(0);
  textSize(20*wX);
  textFont(fontg);
  text("'소년과 어머니의 관계'",width/2-textWidth(),320*wX);
  
  textLeading(14*wX);
  textSize(9*wX);
  textFont(fontm);
  textWrap(WORD);
  text(tarotScript[13],48*wX,338*wX,295*wX);
  image(twoResultMore,55*wX,497*wX,280*wX,81*wX);
  image(twoResultDefault,134*wX,484*wX,121*wX,80*wX);
}