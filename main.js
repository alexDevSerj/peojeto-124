function setup(){
    video = createCapture(VIDEO)
    video.size(500,500)
    video.position(100,100)
    canvas = createCanvas(500,500)
    canvas.position(900,100)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
    background("black")
}

function modelLoaded(){
    console.log("poseNet foi carregado")
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results)
    }
}