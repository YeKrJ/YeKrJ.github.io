let i0 = 0;
let j0 = 0;
let ir = 0;
let i = 0;
let j = 0;
let i2 = 0;
let j2 = 0;
let clickCheck = 0;
let cardNumber = 0;

let resultOneNumber = 0;

let resultTwoNumber1 = 0;
let resultTwoNumber2 = 0;

let resultManualNumber1 = 0;
let resultManualNumber2 = 0;
let resultManualNumber3 = 0;

let rotIn = [];
let posIn = [];
let rotOut = [];
let posOut = [];
let posC = [];
let posPage = [];

let rot = [];
let pos = [];

let cards = [];
let cardImg = [];
let cardImgA = [];
let cardImgS = [];
let cardClickPX = [];

let cardM = [];
let cardMBg = [];
let cardJ = [];
let cardJBg = [];

let modeLogo = [];
let modeDes = [];

let selected = [];
let cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let wX = 1.2;

let clickNext = 0;
let rT = 0;

let modeOne = false;
let modeTwo = false;
let modeMulti = false;
let modeManual = false;

let resultCheck = false;
let manualOne = false;
let manualTwo = false;
let manualThree = false;

let desCheck = 0;
let aniCheck = 0;

let scoreWidth = 0;

function preload() {
  if(windowWidth > 425) {
    fontb = loadFont("assets/AppleSDGothicNeoB.ttf");
    fontm = loadFont("assets/AppleSDGothicNeoM.ttf");
    fontg = loadFont("assets/GmarketSansTTFBold.ttf");
    fontgm = loadFont("assets/GmarketSansTTFMedium.ttf");
    interfaceTest = loadImage("interfacetest.png");
    for (i = 1; i < 12; i++) {
      cardImg[i] = loadImage("assets/cardEx.png");
      cardImgA[i] = loadImage("assets/cardExA.png");
      cardImgS[i] = loadImage("assets/cardExS.png");
    }
    logo = loadImage("assets/ui/logo.png");
    oneButtonA = loadImage("assets/ui/oneButtonA.png");
    twoButtonA = loadImage("assets/ui/twoButtonA.png");
    multiButtonA = loadImage("assets/ui/multiButtonA.png");
    manualButtonA = loadImage("assets/ui/manualButtonA.png");
    homeButtonA = loadImage("assets/ui/homeButtonA.png");
    oneButtonP = loadImage("assets/ui/oneButtonP.png");
    twoButtonP = loadImage("assets/ui/twoButtonP.png");
    multiButtonP = loadImage("assets/ui/multiButtonP.png");
    manualButtonP = loadImage("assets/ui/manualButtonP.png");
    homeButtonP = loadImage("assets/ui/homeButtonP.png");
    nextButtonA = loadImage("assets/ui/nextButtonA.png");
    nextButtonP = loadImage("assets/ui/nextButtonP.png");
    shuffleResetA = loadImage("assets/ui/shuffleResetA.png");
    shuffleResetP = loadImage("assets/ui/shuffleResetP.png");
    modeLogo[1] = loadImage("assets/ui/oneCardDescriptionLogo.png");
    modeLogo[2] = loadImage("assets/ui/twoCardDescriptionLogo.png");
    modeLogo[3] = loadImage("assets/ui/multiCardDescriptionLogo.png");
    modeLogo[4] = loadImage("assets/ui/manualDescriptionLogo.png");
    modeDes[1] = loadImage("assets/ui/oneCardDescription.png");
    modeDes[2] = loadImage("assets/ui/twoCardDescription.png");
    modeDes[3] = loadImage("assets/ui/multiCardDescription.png");
    modeDes[4] = loadImage("assets/ui/manualDescription.png");
    caution = loadImage("assets/ui/caution.png");
    startDes = loadImage("assets/ui/startDescription.png");
    startButtonA = loadImage("assets/ui/startButtonA.png");
    startButtonP = loadImage("assets/ui/startButtonP.png");
    currentOne = loadImage("assets/ui/currentOneA.png");
    currentTwo = loadImage("assets/ui/currentTwoA.png");
    currentMulti = loadImage("assets/ui/currentMultiA.png");
    currentManual = loadImage("assets/ui/currentManualA.png");
    for(i=0;i<22;i++) {
    cardJ[i] = loadImage("assets/cards/cardMEX.png");
    cardM[i] = loadImage("assets/cards/cardMEX.png");
    cardJBg[i] = loadImage("assets/cards/cardbackMEX.png");
    cardMBg[i] = loadImage("assets/cards/cardbackMEX.png");
    }
    ynY = loadImage("assets/ui/ynY.png");
    ynN = loadImage("assets/ui/ynN.png");
    ynS = loadImage("assets/ui/ynS.png");
    oneResultBack = loadImage("assets/ui/oneResultBack.png");
    oneResultMore = loadImage("assets/ui/oneResultMoreDes.png");
    resetButtonA = loadImage("assets/ui/resetButtonA.png");
    resetButtonP = loadImage("assets/ui/resetButtonP.png");
    shareButtonA = loadImage("assets/ui/shareButtonA.png");
    shareButtonP = loadImage("assets/ui/shareButtonP.png");
    twoGuide = loadImage("assets/ui/twoGuide.png");
    firstBar = loadImage("assets/ui/twoFirstBar.png");
    meBack = loadImage("assets/ui/twoResultMeBack.png");
    youBack = loadImage("assets/ui/twoResultYouBack.png");
    twoResultMore = loadImage("assets/ui/twoResultMoreDes.png");
    twoResultLove = loadImage("assets/ui/twoResultLove.png");
    twoResultDefault = loadImage("assets/ui/twoResultDefault.png");
    twoResultFriend = loadImage("assets/ui/twoResultFriend.png");
    twoResultLove = loadImage("assets/ui/twoResultWar.png");
    twoResultWork = loadImage("assets/ui/twoResultWork.png");
    twoDesMe = loadImage("assets/ui/twoDesMe.png");
    twoDesYou = loadImage("assets/ui/twoDesYou.png");
    manualUI = loadImage("assets/ui/manualUI.png");
    manualOneButtonA = loadImage("assets/ui/manualOneButtonA.png")
    manualOneButtonP = loadImage("assets/ui/manualOneButtonP.png")
    manualTwoButtonA = loadImage("assets/ui/manualTwoButtonA.png")
    manualTwoButtonP = loadImage("assets/ui/manualTwoButtonP.png")
    manualThreeButtonA = loadImage("assets/ui/manualThreeButtonA.png")
    manualThreeButtonP = loadImage("assets/ui/manualThreeButtonP.png")
    closeButtonA = loadImage("assets/ui/closeButtonA.png")
    closeButtonP = loadImage("assets/ui/closeButtonP.png")
    manualDesOne = loadImage("assets/ui/manualDesOne.png")
    manualDesTwo = loadImage("assets/ui/manualDesTwo.png")
    manualDesThree = loadImage("assets/ui/manualDesThree.png")
  } else {
    fontb = loadFont("assets/AppleSDGothicNeoB.ttf");
    fontm = loadFont("assets/AppleSDGothicNeoM.ttf");
    fontg = loadFont("assets/AppleSDGothicNeoB.ttf");
    fontgm = loadFont("assets/AppleSDGothicNeoM.ttf");
    for (i = 1; i < 12; i++) {
      cardImg[i] = loadImage("assetsMobile/cardEx.png");
      cardImgA[i] = loadImage("assetsMobile/cardExA.png");
      cardImgS[i] = loadImage("assetsMobile/cardExS.png");
    }
    logo = loadImage("assetsMobile/ui/logo.png");
    oneButtonA = loadImage("assetsMobile/ui/oneButtonA.png");
    twoButtonA = loadImage("assetsMobile/ui/twoButtonA.png");
    multiButtonA = loadImage("assetsMobile/ui/multiButtonA.png");
    manualButtonA = loadImage("assetsMobile/ui/manualButtonA.png");
    homeButtonA = loadImage("assetsMobile/ui/homeButtonA.png");
    oneButtonP = loadImage("assetsMobile/ui/oneButtonP.png");
    twoButtonP = loadImage("assetsMobile/ui/twoButtonP.png");
    multiButtonP = loadImage("assetsMobile/ui/multiButtonP.png");
    manualButtonP = loadImage("assetsMobile/ui/manualButtonP.png");
    homeButtonP = loadImage("assetsMobile/ui/homeButtonP.png");
    nextButtonA = loadImage("assetsMobile/ui/nextButtonA.png");
    nextButtonP = loadImage("assetsMobile/ui/nextButtonP.png");
    shuffleResetA = loadImage("assetsMobile/ui/shuffleResetA.png");
    shuffleResetP = loadImage("assetsMobile/ui/shuffleResetP.png");
    modeLogo[1] = loadImage("assetsMobile/ui/oneCardDescriptionLogo.png");
    modeLogo[2] = loadImage("assetsMobile/ui/twoCardDescriptionLogo.png");
    modeLogo[3] = loadImage("assetsMobile/ui/multiCardDescriptionLogo.png");
    modeLogo[4] = loadImage("assetsMobile/ui/manualDescriptionLogo.png");
    modeDes[1] = loadImage("assetsMobile/ui/oneCardDescription.png");
    modeDes[2] = loadImage("assetsMobile/ui/twoCardDescription.png");
    modeDes[3] = loadImage("assetsMobile/ui/multiCardDescription.png");
    modeDes[4] = loadImage("assetsMobile/ui/manualDescription.png");
    caution = loadImage("assetsMobile/ui/caution.png");
    startDes = loadImage("assetsMobile/ui/startDescription.png");
    startButtonA = loadImage("assetsMobile/ui/startButtonA.png");
    startButtonP = loadImage("assetsMobile/ui/startButtonP.png");
    currentOne = loadImage("assetsMobile/ui/currentOneA.png");
    currentTwo = loadImage("assetsMobile/ui/currentTwoA.png");
    currentMulti = loadImage("assetsMobile/ui/currentMultiA.png");
    currentManual = loadImage("assetsMobile/ui/currentManualA.png");
    for(i=0;i<22;i++) {
    cardJ[i] = loadImage("assetsMobile/cards/cardMEX.png");
    cardM[i] = loadImage("assetsMobile/cards/cardMEX.png");
    cardJBg[i] = loadImage("assetsMobile/cards/cardbackMEX.png");
    cardMBg[i] = loadImage("assetsMobile/cards/cardbackMEX.png");
    }
    ynY = loadImage("assetsMobile/ui/ynY.png");
    ynN = loadImage("assetsMobile/ui/ynN.png");
    ynS = loadImage("assetsMobile/ui/ynS.png");
    oneResultBack = loadImage("assetsMobile/ui/oneResultBack.png");
    oneResultMore = loadImage("assetsMobile/ui/oneResultMoreDes.png");
    resetButtonA = loadImage("assetsMobile/ui/resetButtonA.png");
    resetButtonP = loadImage("assetsMobile/ui/resetButtonP.png");
    shareButtonA = loadImage("assetsMobile/ui/shareButtonA.png");
    shareButtonP = loadImage("assetsMobile/ui/shareButtonP.png");
    twoGuide = loadImage("assetsMobile/ui/twoGuide.png");
    firstBar = loadImage("assetsMobile/ui/twoFirstBar.png");
    meBack = loadImage("assetsMobile/ui/twoResultMeBack.png");
    youBack = loadImage("assetsMobile/ui/twoResultYouBack.png");
    twoResultMore = loadImage("assetsMobile/ui/twoResultMoreDes.png");
    twoResultLove = loadImage("assetsMobile/ui/twoResultLove.png");
    twoResultDefault = loadImage("assetsMobile/ui/twoResultDefault.png");
    twoResultFriend = loadImage("assetsMobile/ui/twoResultFriend.png");
    twoResultLove = loadImage("assetsMobile/ui/twoResultWar.png");
    twoResultWork = loadImage("assetsMobile/ui/twoResultWork.png");
    twoDesMe = loadImage("assetsMobile/ui/twoDesMe.png");
    twoDesYou = loadImage("assetsMobile/ui/twoDesYou.png");
    manualUI = loadImage("assetsMobile/ui/manualUI.png");
    manualOneButtonA = loadImage("assetsMobile/ui/manualOneButtonA.png")
    manualOneButtonP = loadImage("assetsMobile/ui/manualOneButtonP.png")
    manualTwoButtonA = loadImage("assetsMobile/ui/manualTwoButtonA.png")
    manualTwoButtonP = loadImage("assetsMobile/ui/manualTwoButtonP.png")
    manualThreeButtonA = loadImage("assetsMobile/ui/manualThreeButtonA.png")
    manualThreeButtonP = loadImage("assetsMobile/ui/manualThreeButtonP.png")
    closeButtonA = loadImage("assetsMobile/ui/closeButtonA.png")
    closeButtonP = loadImage("assetsMobile/ui/closeButtonP.png")
    manualDesOne = loadImage("assetsMobile/ui/manualDesOne.png")
    manualDesTwo = loadImage("assetsMobile/ui/manualDesTwo.png")
    manualDesThree = loadImage("assetsMobile/ui/manualDesThree.png")
  }
}


