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
  text("성사되기 어렵거나, 위기에 있습니다. 섣부른 판단은 금물입니다.", 95,517);
  text("예상치 못한 큰 손해가 있을 수 있습니다.대비가 필요합니다.", 95,532);
  text("노력한 것에 비해 크게 실망할 수 있습니다.", 95,547);
  text("예상치 못한 변수가 발생하여 크게 방향을 바꾸어야 할 수 있습니다.", 95,562);
}