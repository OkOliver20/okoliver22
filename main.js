function preload() {
    img = loadImage("https://i.postimg.cc/59RVdfj5/mustache-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
noseX = "";
noseY = "";

function modelLoaded() {
    console.log('PoseNet Is Initialized.');
}

function draw() {
    image(video, 0, 0, 400, 350);
    image(img,noseX,noseY,60,60);
}

function take_snapshot() {
    save('myFilterImage.png')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}