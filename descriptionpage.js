function description(i){
  image(logo,148*wX,59*wX,94*wX,16*wX);
  image(modeLogo[i],45*wX,99*wX,193*wX,88*wX);
  if (i < 3) {
  image(modeDes[i],45*wX,218*wX,299*wX,80*wX);
  } else {
    image(modeDes[i],45*wX,218*wX,299*wX,103*wX);
  }
  image(caution,59*wX,345*wX,265*wX,165*wX);
  if (mouseCheck) nextButtonDes.over();
  nextButtonDes.display();
  if (desCheck < 10) {
  desCheck++;
  }
}