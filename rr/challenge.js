
function showChallenge(){

e('challenge').innerHTML = 
  "<a href=# class=block onclick='setCookie(\"price\", null, 30);setCookie(\"payment\", 1, 30);location.reload();return false;' ><img src=images/trophy.jpg width=50px />1 round (FREE)</a>"+
  "<a href=# class=block onclick='purchase(100);return false;' ><img src=images/trophy.jpg width=50px />5 rounds (R100)</a>"+
  "<a href=# class=block onclick='purchase(300);return false;' ><img src=images/trophy.jpg width=50px />10 rounds (R300)</a>"+
  "<a href=# class=block onclick='purchase(500);return false;' ><img src=images/trophy.jpg width=50px />15 rounds (R500)</a>";
  
}

var HOME = "https://mngz47.github.io/F-Snake/index3.html";

function purchase(price){
this.price = price;
this.product = "Flower Snake Challenge";
this.return_url = HOME+"?pp=1";
this.cancel_url =  HOME+"?pp=0";

setCookie("price", price, 30);
  
payfast2();

}

function checkChallenge(){
const urlParams = new URLSearchParams(window.location.search);
const payment = urlParams.get('pp');

    if(getCookie("price")!=null){
  if(payment!=null){
if(payment==1){
  setCookie("payment", 1, 30);
  startChallenge();
}else if(payment==0){
  setCookie("payment", 0, 30);
alert('Payment Cancelled');
}
}
  }
}

var activeChallenge = false;
         
function confirmChallenge(){
  activeChallenge = getCookie("payment")==1;

  if(activeChallenge){
if(getCookie("game_index")){
 game_index =  parseInt(getCookie("game_index"));
}else{
  setCookie("game_index", 1, 30);
  game_index = 1;
}

    startChallenge();
  }

return activeChallenge;
}

/*

if(activeChallenge){
gameEnd();
}

*/

var game_index = 1;
var game_seconds = 0;

var timerId;

function startChallenge(){
  
var rounds = getRounds(getCookie("price"));

var current_round = Math.round(game_index/2);

var game_index_length = rounds*2;
  
 if(game_index<=game_index_length){

  if(game_index%2==0){ // && game_index!=1 && game_index!=0
    alert("Active challenge : your turn to play : round "+ current_round +" of "+rounds);
    e('start').style.display='none';
    start();
  }else{
   // toggle(e("controls"));
    alert("Active challenge : machine turn to play : round "+ current_round+" of "+rounds);
    e('start').style.display='none';
    start();
    iniPlayer(null,0,2);
  }
   
timerId = setInterval(gameTimer,1000);
}else{

   var p1seconds = 0;
   var p1points = 0;
   var p1moves = 0;

   var p2seconds = 0;
   var p2points = 0;
   var p2moves = 0;
   
   for(var b=1;b<game_index;b++){

 if(b%2==0){//human turn
   p2seconds += parseInt(getCookie("game_seconds_"+b));
   p2points += parseInt(getCookie("game_points_"+b));
   p2moves += parseInt(getCookie("game_moves_"+b));
   
 }else{//machine turn
  p1seconds += parseInt(getCookie("game_seconds_"+b));
  p1points += parseInt(getCookie("game_points_"+b));
  p1moves += parseInt(getCookie("game_moves_"+b));
   
  }

    // alert(b+" ("+getCookie("game_seconds_"+b)+","+getCookie("game_points_"+b)+")");
  }  

 if(p2moves<p1moves && p2points>p1points){
p2points+=10;
 }else if(p2moves>p1moves && p2points<p1points){
  p1points+=10;
 }

   e("start").style.display = "";
    e("start").innerHTML = (show_challenge_winner(p1points,Math.round(p1points/14),p1seconds,p1moves,p2points,Math.round(p1points/14),p1seconds,p2moves,(p2points>p1points?"You":"Machine")));

  //  toggle("start");
   
  //  alert(document.cookie);
    deleteAllCookies()
 }
}
  
function getRounds(price){

  return (price=="null"?1:(price=="100"?5:(price=="300"?10:15)));
  
}

function gameTimer(){
game_seconds+=1;
}

function gameEnd(){

  clearInterval(timerId);

var next_game_index = game_index+1;
            
  setCookie("game_index", next_game_index , 30);
   setCookie("game_seconds_"+game_index, game_seconds, 30);
  setCookie("game_moves_"+game_index, this.moves, 30);
  setCookie("game_points_"+game_index,  this.points, 30);
  
}
