Peter_pan_song = "";
Harry_potter_theme_song ="";
leftWrist_x =0;
leftWrist_y =0;
RightWrist_x =0;
RightWrist_y =0;
scoreleftWrist =0;
scorerightWrist =0;
songPeterpan ="";
function preLoad(){
    Peter_pan_song = loadSound("music.mp3");
    Harry_potter_theme_song = loadSound("music2.mp3");
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
  console.log("poseNet is initialized");
}
function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    songPeterpan = Peter_pan_song.isPlaying();
    console.log(songPeterpan);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Harry_potter_theme_song.stop();
        if(songPeterpan == false){
            Peter_pan_song.play();
            
        }
    }
}
function gotPoses(results){
if(results.length>0){
    console.log(results);

    scoreleftWrist = results[0].pose.keypoints[9].score;
    console.log(results);

leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX = "+leftWristX+" leftWrist_y = "+leftWrist_y);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("RightWrist_x = "+RightWrist_x+" RightWrist_y = "+RightWrist_y);

}
}




