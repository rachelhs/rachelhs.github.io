function startingPos(arrayOfDivs){

var cols = 2;
var rows = 6;
var spacing = 35;
var a = [];

//create array of numbers from 1 to 20 in random order
for (var i = 0; i < cols*rows; i++){
a[i] = i;
}
//then send for shufflin'
var newA = shuffle(a);

for (var i = 0; i < arrayOfDivs.length; i++){
var margLeft = document.getElementById(arrayOfDivs[i]);
var margTop = document.getElementById(arrayOfDivs[i]);
margLeft.style.marginLeft = String(a[i]%(rows+1)*(100+spacing)) + 'px';
margTop.style.marginTop = String((a[i]%(cols+1))*(140+spacing)) + 'px';
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
}


function myMove(img) {
    var elem = document.getElementById(img); 
    var pos1 = 0;
    var pos2 = 0;
    //setInterval(function, n) calls function every n frames
    var id = setInterval(meander, 225);
    function meander() {  
            //get a random number between -4 and 4
            var rand1 = ((Math.random())*8)-4;
            var rand2 = ((Math.random())*8)-4;
            pos1+=rand1;
            pos2+=rand2;
            elem.style.top = pos1 + 'px'; 
            elem.style.left = pos2 + 'px';
    
    }
}

 function mainTitle(width1, height1) {

    var c = document.getElementById("mainTitle");
    var ctx = c.getContext("2d");


   var colours = ["red", "lime", "blue", "yellow", "fuchsia", "cyan"];
   var img = document.getElementById("Cut_Out_Title");

   for (var i = 0; i <= (width1 / 2) - 2; i++) {
     for (var j = 0; j <= height1 / 2; j++) {
        ctx.beginPath();
        ctx.lineWidth = "2";
       var randCol = Math.floor(Math.random()*6);
       ctx.strokeStyle = (colours[randCol]);
       ctx.rect((i * 2),(j * 2), 2, 2);
       ctx.stroke();
     }
   }
   //auto resize to maintitle shape
   ctx.drawImage(img, 0, 0, 2283, 251,     // source rectangle
                   0, 0, width1, height1); // destination rectangle

 }

 function colourChanger(){

  var c = document.getElementById("footer");
  var e = document.getElementById("textbox");
  var colours = ["red", "lime", "blue", "yellow", "fuchsia", "cyan"];
  var randCol = Math.floor(Math.random()*6);
  c.style.borderTopColor = colours[randCol];
  e.style.borderBottomColor = colours[randCol];
 }

