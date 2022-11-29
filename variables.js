let i0 = 0;
let j0 = 0;
let i = 0;
let j = 0;
let i2 = 0;
let j2 = 0;
let clickCheck = 0;
let cardNumber = 0;
let resultOneNumber = 0;

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

let selected = [];
let cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let wX = 1.2;

let clickNext = 0;
let rT = 0;

let modeOne = false;
let modeTwo = false;

function preload() {
  fontb = loadFont("assets/AppleSDGothicNeoB.ttf");
  fontm = loadFont("assets/AppleSDGothicNeoM.ttf");
  interfaceTest = loadImage("interfacetest.png");
  for (i = 1; i < 12; i++) {
    cardImg[i] = loadImage("assets/cardEx.png");
    cardImgA[i] = loadImage("assets/cardExA.png");
    cardImgS[i] = loadImage("assets/cardExS.png");
  }
  fontb = loadFont("assets/AppleSDGothicNeoB.ttf");
  fontm = loadFont("assets/AppleSDGothicNeoM.ttf");
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
  modeLogo1 = loadImage("assets/ui/oneCardDescriptionLogo.png");
  modeLogo2 = loadImage("assets/ui/twoCardDescriptionLogo.png");
  modeLogo3 = loadImage("assets/ui/multiCardDescriptionLogo.png");
  modeLogo4 = loadImage("assets/ui/manualDescriptionLogo.png");
  modeDes1 = loadImage("assets/ui/oneCardDescription.png");
  modeDes2 = loadImage("assets/ui/twoCardDescription.png");
  modeDes3 = loadImage("assets/ui/multiCardDescription.png");
  modeDes4 = loadImage("assets/ui/manualDescription.png");
  caution = loadImage("assets/ui/caution.png");
  startDes = loadImage("assets/ui/startDescription.png");
  startButtonA = loadImage("assets/ui/startButtonA.png");
  startButtonP = loadImage("assets/ui/startButtonP.png");
  fontg = loadFont("assets/GmarketSansTTFBold.ttf");
  currentOne = loadImage("assets/ui/currentOneA.png");
  for(i=0;i<22;i++) {
  cardM[i] = loadImage("assets/cards/cardMEX.png");
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
}


