
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let minkX = canvasWidth/2
let minkY = canvasHeight/2
let minkWidth = canvasWidth/30
let minkHeight = canvasWidth/30
let //minkColor = [220, 0, 220]
const minkSpeed = 10


let specterWidth = canvasWidth/20
let specterHeight = canvasWidth/20
let specterX = canvasWidth - canvasWidth/10
let specterY = canvasHeight/2 - specterHeight/2
//let goalColor = [220,220,0]


let minkImg, specterImg

function preload (){
    minkImg = loadImage('./assets/main charater.png')
    specterImg = loadImage('./assets/Spectre.png')

}

function setup(){
    createCanvas(canvasWidth, canvasHeight)

}

function draw(){
    background(30)
    const specterGot = checkSpecter(minkX, minkY, minkWidth/2, minkHeight/2, specterX, specterY, specterWidth, specterHeight)

    if(!specterGot){
        drawSpecter(specterImg, specterX, specterY, specterWidth, specterHeight)
    
}
    drawMink(minkImg, minkX, minkY, minkWidth, minkHeight)
    

}


function keyPressed(){
    console.log(key)
    if(key === 'd'){
        minkX+=minkSpeed
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
    
}

function drawSpecter(img,x,y,w,h){
    image(img,x,y,w,h)
}

function drawMink(img,x,y,w,h){
    image(img,x,y,w,h)
}

function checkSpecter(x1,y1,w1,h1,x2,y2,w2,h2){
    if(x1 + w1 > x2 &&
        x1 -w1 < x2 + w2 &&
        y1 + h1 > y2 &&
        y1 - h1 < y2 + h2){
        return true
    }
    else()=>{
        return false
    }
}
