canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;
    car1_imageTag=new Image();
    car1_imageTag.onload=uploadcar;
    car1_imageTag.src=car1_image;
    car2_imageTag=new Image();
    car2_imageTag.onload=uploadcar;
    car2_imageTag.src=car2_image;
}
function uploadbackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height)
}
function uploadcar(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height)
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38'){
        up();
        console.log("up");
    }
    if (keyPressed=='40'){
        down();
        console.log("down")
    }
    if (keyPressed=='37'){
        left();
        console.log("left")
    }
    if (keyPressed=='39'){
        right();
        console.log("right")
    }
    if (keyPressed=='65'){
        aleft();
        console.log("aleft")
    }
    if (keyPressed=='68'){
        dright();
        console.log("dright")
    }
    if (keyPressed=='87'){
        wup();
        console.log("wup")
    }
    if (keyPressed=='83'){
        sdown();
        console.log("sdown")
    }
}
function up(){
    if (car1_y>=0){
        car1_y = car1_y-10;
        console.log("When up arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar();
    }
    
}
function down(){
    if (car1_y<=500){
        car1_y = car1_y+10;
        console.log("When down arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar();
    }
    
}
function left(){
    if (car1_x>=0){
        car1_x = car1_x-10;
        console.log("When left arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar();
    }
    
}
function right(){
    if (car1_x<=700){
        car1_x = car1_x+10;
        console.log("When right arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar();
    }
    
}
function wup(){
    if (car2_y>=0){
        car2_y = car2_y-10;
        console.log("When w is pressed, x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar();
    }
}
function sdown(){
    if (car2_y<=500){
        car2_y = car2_y+10;
        console.log("When s is pressed, x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar();
    }
}
function aleft(){
    if (car2_x>=0){
        car2_x = car2_x-10;
        console.log("When a is pressed, x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar();
    }
}
function dright(){
    if (car2_x<=700){
        car2_x = car2_x+10;
        console.log("When d is pressed, x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar();
    }
}