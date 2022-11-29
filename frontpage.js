function frontPage() {
  background(255);
  image(logo, 62, 68, 268*wX, 47*wX);
  button1 = new Button (61, 240, 270, 48, oneButtonA, oneButtonP);
  button2 = new Button (61, 327, 270, 48, twoButtonA, twoButtonP);
  button3 = new Button (61, 414, 270, 48, multiButtonA, multiButtonP);
  button4 = new Button (61, 502, 270, 48, manualButtonA, manualButtonP);
  button1.over();
  button2.over();
  button3.over();
  button4.over();
  button1.display();
  button2.display();
  button3.display();
  button4.display();
  // image(button1, 61, 250, 270, 48);
  // image(button2, 61, 337, 270, 48);
  // image(button3, 61, 424, 270, 48);
  // image(button4, 61, 512, 270, 48);
    //Mode script display
  fill(0);
  textSize(15*wX);
  textFont(fontm);
  text("터치 한 번이면,", 62*wX, 149*wX);
  text("당신의 운명을 확인하실 수 있습니다.", 62*wX, 177*wX);
  textFont(fontb);
  text("확인해보세요, 당신의 미래를.", 62*wX, 205*wX);
  
  //mode script display
  
  push();
  textFont(fontb, 9*wX);
  text("→ 추천", 62*wX, 300*wX);
  text("→ 추천", 62*wX, 387*wX);
  text("→ 추천", 62*wX, 475*wX);  
  textFont(fontm, 9*wX);
  text("오늘의 운세, 성공 확률, Yes or No 질문, 이번 달의 재물운...", 91*wX, 300*wX);
  text("커플 궁합, 친구 간 궁합,관계성...", 91*wX, 387*wX);
  text("식사메뉴 고르기, 이사 갈 집 고르기, 여러 과목의 성적운...", 91*wX, 475*wX);
  pop();
}