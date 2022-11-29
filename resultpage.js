function resultPageOne() {
  image(cardMBg[resultOneNumber], 0, 0, width, height);
  image(yn[resultOneNumber], 53, 197, 77, 33);
  image(cardM[resultOneNumber], 142, 72, 105, 185);
  image(oneResultBack, 52, 222, 279, 70);
  textSize(34);
  textFont(fontg);
  text(tarotName[resultOneNumber], 70, 268);
  textSize(22);
  push();
  fill(0, 25);
  textAlign(RIGHT)
  text(tarotEng[resultOneNumber], 310, 270);
  pop();
  textLeading(15);
  textSize(9);
  textFont(fontm);
  textWrap(WORD);
  text(tarotScript[13],61,304,268,400);
  image(oneResultMore,55,497,280,81);
  textFont(fontm, 6);
  text("성사되기 어렵거나, 위기에 있습니다. 섣부른 판단은 금물입니다.", 95,517);
  text("예상치 못한 큰 손해가 있을 수 있습니다.대비가 필요합니다.", 95,532);
  text("노력한 것에 비해 크게 실망할 수 있습니다.", 95,547);
  text("예상치 못한 변수가 발생하여 크게 방향을 바꾸어야 할 수 있습니다.", 95,562);
}