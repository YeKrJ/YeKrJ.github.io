function resultRandom() {
    if (modeOne) resultOneNumber = int(random(21.4))
    if (modeTwo) {
      resultTwoNumber1 = int(random(15.4))
      resultTwoNumber2 = int(random(15.4))
      if (resultTwoNumber1 == resultTwoNumber2) {
        resultTwoNumber2 = int(random(15.4))
      }
    } 
    if (modeMulti) {
      for(let i = 0; i < nT[cardNumber]; i++) {
        resultMultiNumber[i] = int(random(21.4));
      }
      for(let i = 1; i < nT[cardNumber]; i++) {
        if (resultMultiNumber[i] == resultMultiNumber[i-1] || resultMultiNumber[i] == resultMultiNumber[i-2] || resultMultiNumber[i] == resultMultiNumber[i-3] || resultMultiNumber[i] == resultMultiNumber[i-4] || resultMultiNumber[i] == resultMultiNumber[i-5]) {
          resultMultiNumber[i] = int(random(21.4));
        }
      }
    }
    if (modeManual) {
      resultManualNumber1 = int(random(21.4))
      resultManualNumber2 = int(random(21.4))
      resultManualNumber3 = int(random(21.4))
      while (resultManualNumber1 == resultManualNumber2 || resultManualNumber2 == resultManualNumber3 || resultManualNumber1 == resultManualNumber3) {
        if (resultManualNumber1 == resultManualNumber2) {
          resultManualNumber2 = int(random(0,22))
        }
        if (resultManualNumber2 == resultManualNumber3) {
          resultManualNumber3 = int(random(0,22))
        }
        if (resultManualNumber3 == resultManualNumber1) {
          resultManualNumber1 = int(random(0,22))
        }
      }
    }
}