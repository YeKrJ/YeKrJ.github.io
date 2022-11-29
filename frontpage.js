function frontPage() {
  background(255);
  image(logo, 62, 68, 268, 47);
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
  textSize(15);
  textFont(fontm);
  text("터치 한 번이면,", 62, 149);
  text("당신의 운명을 확인하실 수 있습니다.", 62, 177);
  textFont(fontb);
  text("확인해보세요, 당신의 미래를.", 62, 205);
  
  //mode script display
  
  push();
  textFont(fontb, 9);
  text("→ 추천", 62, 300);
  text("→ 추천", 62, 387);
  text("→ 추천", 62, 475);  
  textFont(fontm, 9);
  text("오늘의 운세, 성공 확률, Yes or No 질문, 이번 달의 재물운...", 91, 300);
  text("커플 궁합, 친구 간 궁합,관계성...", 91, 387);
  text("식사메뉴 고르기, 이사 갈 집 고르기, 여러 과목의 성적운...", 91, 475);
  pop();
}