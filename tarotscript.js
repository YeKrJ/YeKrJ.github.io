let tarotName = ['바보', '마법사', '여사제', '여제', '황제', '교황', '연인', '전차', '힘', '은둔자', '운명의 수레바퀴', '정의', '매달린 사람', '죽음', '절제', '악마', '탑', '별', '달', '태양', '심판', '세계'];
let tarotEng = ['Fool', 'Magician', 'High Priestess', 'Empress', 'Emperor', 'Hierophant', 'Lovers', 'Chariot', 'Strength', 'Hermit', 'Wheel of Fortune', 'Justice', 'Hanged Man', 'Death', 'Temperance', 'Devil', 'Tower', 'Star', 'Moon', 'Sun', 'Judgement', 'World'];
let tarotScript = [];
let tarotLove = [];
let tarotMoney = [];
let tarotStudy = [];
let tarotBus = [];

let tarotMName = ['Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands', 'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Pentacles'];
let tarotMOne = [];
let tarotMTwo = [];
let tarotMScript = [];
let tarotMScriptSumm = [];
let tarotMScore = [];
let tarotMSpecific = [];

function majorScript() {
  //13번 메이저
  tarotScript[13] = "끝과 새로운 시작을 의미하는 카드입니다. '죽음'이라는 키워드에 너무 겁먹을 필요가 없습니다. 항상 끝은 새로운 시작을 불러오기 때문입니다.\n \n 죽음을 은유하는 사신은 죽은 왕의 시체 위에 당당하게 걸어오고 있습니다. 여인은 체념한듯 무릎을 끓고 있으면 황급빛 옷을 입은 사제는 마지막 자비를 구하고 있습니다. 이토록 절망적인 상황 속에서도 뒤에 태망은 떠오르고 있으며, 천진난만한 아이는 이를 그렇게 절망적으로 보지 않습니다.절망적인 상황 속에서도 희망은 반드시 존재한다는 것입니다.\n \n 기대하는 것이 있다면, 생각보다 일이 꼬일 수 있습니다. 성공 가능성을 물어본다면 실패에 더 가깝습니다. 이 카드는 징조를 의미하지는 않습니다. 하지만 중요한 것은, 그 속에서도 그 일로 얻을 수 있는 것을 찾아야 한다는 것입니다. 아무 이유 없는 불행은 없습니다.";
  tarotLove[13] = "성사되기 어렵거나, 위기에 있습니다. 섣부른 판단은 금물입니다.";
  tarotMoney[13] = "예상치 못한 큰 손해가 있을 수 있습니다.대비가 필요합니다.";
  tarotStudy[13] = "노력한 것에 비해 크게 실망할 수 있습니다.";
  tarotBus[13] = "예상치 못한 변수가 발생하여 크게 방향을 바꾸어야 할 수 있습니다.";
}

function minorScript() {
  for(i=0;i<16;i++) {
    tarotMScript[i] = [];
    tarotMScriptSumm[i] = [];
    tarotMScore[i] = [];
    tarotMSpecific[i] = [];
  }

  //2번 마이너
  tarotMOne[2] = "미성숙하지만, 패기가 넘치는 소년";
  tarotMTwo[2] = "솔직하고, 꾸밈이 없는 순수한 사람";

  //15번 마이너
  tarotMOne[15] = "이해심이 깊고 깊이 공감하는 사람";
  tarotMTwo[15] = "타인의 감정에 잘 대응하는 사람";

  //2번-13번 조합 마이너
  tarotMScript[2][13] = "의욕이 넘치는 뜨거운 두 사람은 형제 같은 사이입니다. 라이벌 의식이 있어 서로 경쟁하기도 하지만, <Knight of Wands>가 <Page of Wands>를 잘 이끌어주면 부드러운 관계를 맺을 수 있을 것입니다.";
  tarotMScriptSumm[2][13] = "'소년과 어머니의 관계'"
  tarotMScore[2][13] = 50;
  tarotMSpecific[2][13] = twoResultDefault;
}