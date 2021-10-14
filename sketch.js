
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let minkX = canvasWidth/2
let minkY = canvasHeight/2
let minkWidth = canvasWidth/10
let minkHeight = canvasWidth/10
const minkSpeed = 30

let minkImgs =[]
let specterImgs = []
let imagecounter = 0
let score = 0

let specterWidth = canvasWidth/10
let specterHeight = canvasWidth/10
let specterX = 900
let specterY = 400

let CarioWidth = canvasWidth/4
let CarioHeight = canvasWidth/4
let CarioX = 800
let CarioY = 300

let jortsWidth = canvasWidth/4
let jortsHeight = canvasWidth/4
let jortsX = 300
let jortsY = 200

let birdWidth = canvasWidth/4
let birdHeight = canvasWidth/4
let birdX = 40
let birdY = 270

let ballX = 15
let ballY = 50
let ballWidth = canvasWidth/4
let ballHeight = canvasWidth/4

let apeX = 200
let apeY = 10
let apeWidth = canvasWidth/4
let apeHeight = canvasWidth/4

let dinoX = 200
let dinoY = 10

let watX = 200
let watY = 10
let watWidth = canvasWidth
let watHeight = canvasWidth

let poopX = 200
let poopY = 10
let poopWidth = canvasWidth/2
let poopHeight = canvasWidth/2


let ele;

let minkImg, specterImg, CarioImg, coinSound, pressImg

function preload (){
    for (let i=0; i<=3; i++){
        specterImgs[i] = loadImage(`assets/Specter${i}.png`)
    }
    
    for (let i=0; i<=7; i++){
        minkImgs[i] = loadImage(`assets/Mink${i}.png`)
    }

  CarioImg = loadImage(`assets/Cario.png`)
  pressImg = loadImage(`assets/pressx.png`)
  jortsImg = loadImage(`assets/Jorts.png`)
  birdImg = loadImage(`assets/bbbirdie.png`)
  ballImg =loadImage(`assets/ballonman.png`)
  apeImg = loadImage(`assets/scary ape.png`)
  //poopImg = loadImage(`assets/poop.png`)
  //dinoImg = loadImage(`assets/dino.png`)
  //watImg = loadImage(`assets/effortlesswaste.png`)
  
}



function setup(){
    createCanvas(canvasWidth, canvasHeight)
   // pressImg = loadImage(`assets/pressx.png`)

    getAudioContext().suspend();


 ele = createAudio('assets/echo.mp3');

 
 ele.autoplay(true);
}



function draw(){
    background(pressImg)
    
    const specterGot = checkSpecter(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)
    image(minkImgs[imagecounter], minkX, minkY, minkWidth, minkHeight)

    if(!specterGot){
       image(specterImgs[0], specterX, specterY, specterWidth, specterHeight)
        
    }
    if(specterGot){
        image(CarioImg, CarioX, CarioY, CarioWidth, CarioHeight)
        specterX = 300
        specterY = 300
    }
    const specterGot2 = checkSpecter2(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)
    if (specterGot2) {
       image(jortsImg, jortsX, jortsY, jortsWidth, jortsHeight)
        specterX = 100
        specterY = 400
 }
 const specterGot3 = checkSpecter3(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)
    if (specterGot3) {
       image(birdImg, birdX, birdY, birdWidth, birdHeight)
        specterX = 50
        specterY = 100
 }
 const specterGot4 = checkSpecter4(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)
    if (specterGot4) {
       image(ballImg, ballX, ballY, ballWidth, ballHeight)
        specterX = 350
        specterY = 150
 }
 const specterGot5 = checkSpecter5(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)
 if (specterGot5) {
    image(apeImg, apeX, apeY, apeWidth, apeHeight)
     specterX = 400
     specterY = 10

//const specterGot6 = checkSpecter6(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)
    // if (specterGot6) {
     //   image(dinoImg, dinoX, dinoY, apeWidth, apeHeight)
      //   specterX = 600
       //  specterY = 25


//}
 
}



        


    



function keyPressed(){
    console.log(key)
    if(key === 'd'){
        minkX+=minkSpeed
        console.log(1231241243123)
    }
    if(key === 'a'){
        minkX-=minkSpeed
    }
    if(key === 'w'){
        minkY-=minkSpeed
    }
    if(key === 's'){
        minkY+=minkSpeed
    }
    if(key === 'x'){
        imagecounter++
        score++
        console.log(score)
    }
    if(imagecounter >= 7){
        imagecounter = 0
    }
    
}

function drawSpecter(img,x,y,w,h){
    image(img,x,y,w,h)
}

function drawMink(img,x,y,w,h){
    image(img,x,y,w,h)
}

function drawScoreboard(score){
    fill(10)
    textSize(50)
    
}



function checkSpecter(x1,y1,w1,h1,x2,y2,w2,h2){
    if(x1 + w1 > 900 &&
        x1 -w1 < 900 + w2 &&
        y1 + h1 > 400 &&
        y1 - h1 < 400 + h2){
        return true
    }
    else()=>{
        return false
    }
}

function checkSpecter2(x1,y1,w1,h1,x2,y2,w2,h2){
    if(x1 + w1 > 300 &&
        x1 -w1 < 300 + w2 &&
        y1 + h1 > 300 &&
        y1 - h1 < 300 + h2){
        return true
    }
    else()=>{
        return false
    }
}

function checkSpecter3(x1,y1,w1,h1,x2,y2,w2,h2){
    if(x1 + w1 > 100 &&
        x1 -w1 < 100 + w2 &&
        y1 + h1 > 400 &&
        y1 - h1 < 400 + h2){
        return true
    }
    else()=>{
        return false
    }
}

function checkSpecter4(x1,y1,w1,h1,x2,y2,w2,h2){
    if(x1 + w1 > 50 &&
        x1 -w1 < 50 + w2 &&
        y1 + h1 > 100 &&
        y1 - h1 < 100 + h2){
        return true
    }
    else()=>{
        return false
    }
}
function checkSpecter5(x1,y1,w1,h1,x2,y2,w2,h2){
    if(x1 + w1 > 350 &&
        x1 -w1 <  350+ w2 &&
        y1 + h1 > 150 &&
        y1 - h1 < 150+ h2){
        return true
    }
    else()=>{
        return false
    }
}

//function checkSpecter6(x1,y1,w1,h1,x2,y2,w2,h2){
  //  if(x1 + w1 > 400 &&
  //      x1 -w1 <  400+ w2 &&
  //      y1 + h1 > 10 &&
  //      y1 - h1 < 10+ h2){
  //      return true
  //  }
  //  else()=>{
  //      return false
  //  }
//} 

}