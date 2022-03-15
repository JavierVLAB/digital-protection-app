let originalImage;
let showOriginalImage;
let modifiedImage;
let showModifiedImage;
let imageIsLandscape = true;

function preload() {
  originalImage = loadImage('assets/bernd-dittrich-unsplash.jpg');
  originalImage.resize(800,600);
  modifiedImage = createImage(originalImage.width, originalImage.height);  
}

function setup () {
  createCanvas(1000,600);
  background(200);
    
  if(originalImage.width > originalImage.height){
    imageIsLandscape = true;
  }

  modifiedImage = ppp(originalImage);

  //protection(originalImage,modifiedImage);
  showImages(originalImage,modifiedImage);  
  
}

function draw() {
  
  //ellipse(mouseX,mouseY,20,20);
  noLoop();
}

function protection(imgIN, imgOUT) {
  imgIN.loadPixels();
  imgOUT.loadPixels();

  for(let i = 0; i < imgIN.pixels.length; i++){
    imgOUT.pixels[i] = imgIN.pixels[i];//imgIN.pixels[i];//purificationPixels(imgIN.pixels[i]);
  }

  imgOUT.updatePixels();
  imgIN.updatePixels(); 

}

function showImages(imgIN,imgOUT) {

  image(imgIN,
    50, 150, 400, 300,
    0, 0, imgIN.width, imgIN.height);

  image(imgOUT,
      550, 150, 400, 300,
      0, 0, imgOUT.width, imgOUT.height);
}

function purificationPixels(pixel){
  let spell = '';

  spell += 'Este pixel es limpiado de energía caotica, dañida y de la mala intención';
  spell += 'pero mantiene cualquier energía sana de los lugares, seres y obejtos presentes';
  spell += 'OM AH HUNG, para limpiar'
  spell += 'este pixel es activado magicamente para emanar buena energia';
  spell += 'reforzamos la buena energía, las buenas intenciones, los buenos deseos, el amor';
  spell += 'OM MANI PADME HUNG';
  spell += 'para el beneficio de todos los seres';

  return pixel;
}

function keyPressed() {
  console.log('key Pressed!!');
  //protection(originalImage,modifiedImage);
  showImages(originalImage,modifiedImage);
}

function ppp(imgIN) {
  let spell = '';

  spell += 'Este pixel es limpiado de energía caotica, dañida y de la mala intención';
  spell += 'pero mantiene cualquier energía sana de los lugares, seres y obejtos presentes';
  spell += 'OM AH HUNG, para limpiar'
  spell += 'este pixel es activado magicamente para emanar buena energia';
  spell += 'reforzamos la buena energía, las buenas intenciones, los buenos deseos, el amor';
  spell += 'OM MANI PADME HUNG';
  spell += 'para el beneficio de todos los seres';

  return imgIN;
}