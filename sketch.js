 var prevX = 0;
 var imageMargin = 70;
 var Buttons = [];

 function preload() {
   title = loadImage("https://c1.staticflickr.com/5/4351/36429294853_fc6ec2048c_o.png");
 }

 function setup() {
   createCanvas(windowWidth, windowHeight);
   mainTitle(400, 50);
 }

 function draw() {


   var currX = mouseX;

   if (currX != prevX) {
     mainTitle(400, 50);
     prevX = currX;
   }

   //allign images
   var image1 = document.getElementById("image1");
   image1.style.left = str((windowWidth / 2) - 260 - 130 - 20 + "px");

   var image2 = document.getElementById("image2");
   image2.style.left = str((windowWidth / 2) - 130 + "px");

   var image3 = document.getElementById("image3");
   image3.style.left = str((windowWidth / 2) + 130 + 20 + "px");

   var image4 = document.getElementById("image4");
   image4.style.left = str((windowWidth / 2) - 260 - 130 - 20 + "px");

   var image5 = document.getElementById("image5");
   image5.style.left = str((windowWidth / 2) - 130 + "px");

   var image6 = document.getElementById("image6");
   image6.style.left = str((windowWidth / 2) + 130 + 20 + "px");

   var image7 = document.getElementById("image7");
   image7.style.left = str((windowWidth / 2) - 65 + "px");

 }

 function mainTitle(width1, height1) {

   var r = color(255, 0, 0);
   var g = color(0, 255, 0);
   var b = color(0, 0, 255);
   var y = color(0, 255, 255);
   var c = color(255, 255, 0);
   var f = color(255, 0, 255);

   var colours = [r, g, b, y, f, c];

   noStroke();

   for (var i = 0; i < (width1 / 2) - 2; i++) {
     for (var j = 0; j < height1 / 2; j++) {
       var randCol = floor(random(0, 6));
       fill(colours[randCol]);
       rect((windowWidth / 2 - width1 / 2) + (i * 2), 20 + (j * 2), 2, 2);
     }
   }
   image(title, (windowWidth / 2) - (width1 / 2), 20, width1, height1);
 }


 function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
   clear();
   mainTitle(400, 50);
 }