
function transport(stage){

  e("start").style.display = "";
  e("start").innerHTML = ("<span style='text-align:center;font-size:2em;display:block;margin-top:150px;' >Stage "+stage+"...</span>"
         +"<img src=images/wormhole.gif width=100% />");

	
  setTimeout(seeBehindCanvas, 2000);

  return true;
 }


function gameOver(){

	e("start").style.display = "";
	e("start").innerHTML = (show_score(points,stage,game_seconds,moves,"<h2>Game Over</h2><a href=# onclick='location.reload();return false;' >Reload</a>"));
  
	
}
	
function hideStart(){
 e('start').style.display='none';
}

function seeBehindCanvas(){

    e('canvas').style.opacity = "0.4";
  e('start').style.opacity = "0.4";
setTimeout(hideBehindCanvas, 2000);
 
}

function hideBehindCanvas(){
 
e('canvas').style.opacity = "1";
    e('start').style.opacity = "1";
   e('start').style.display='none';

   prepareNextStage();
}

function main_menu(){

  return '<div id=main_menu style="margin:auto;text-align:center;width:400px;margin-top:300px;padding:20px;" >'+
      	'<p>Avoid the obstacle and make it through the seven stages.</p>'+
  	'<a href=# onclick="hideStart();start();return false;" class="btn fall space" >Start</a>'+
	'<a href=# onclick="showChallenge();toggle(e(\'challenge\'));return false;" class="btn space" >Challenge</a>'+
	'<a href=# onclick="start();hideStart();iniPlayer(null,0,2);return false;" class="btn space" >Watch Player</a>'+
  '<div id=challenge style="display:none;" ></div></div>';

}

function footer_menu(){

 return '<div id=footer_menu style="display:block;float:right;" >'+
  	'<a href=https://github.com/mngz47/F-Snake/tree/main class="fall space" style="display:inline-block;" >Contribute</a>'+
	'<a href=https://github.com/mngz47/F-Snake/releases/tag/snake%2Chtml5%2Cgame class="fall space" style="display:inline-block;" >Releases</a>'+
	'<a href=https://www.instagram.com/mongezisibongakonke class="fall space" style="display:inline-block;" >Follow on IG</a>'+
	'<a href=privacy_policy.html class="fall space" style="display:inline-block;" >Privacy Policy</a>'+
  '</div>';
  
}

function show_challenge_winner(p1points,p1stage,p1seconds,p1moves,p2points,p2stage,p2seconds,p2moves,winner){

var st1 = (p1stage/p1seconds);
  var st2 = (p2stage/p2seconds);
  
return "<div class=row style='background-size: 100% auto;background-repeat:none;background-image:url(\"images/celebrate.gif\");font-size:1.6em;margin-top:150px;' >"+
    "<div  class='col-sm-2' >"+
"<img src='images/trophy.jpg' width=150px />"+
   "</div>"+
  "<div  class='col-sm-5' >"+
   "<div class='block' >"+
     "<h3 >Machine</h3>"+
    "<span style='display:block;' >Points :"+p1points+"</span>"+
     "<span style='display:block;' >Stage :"+p1stage+"</span>"+
     "<span style='display:block;'  >Time :"+p1seconds+"</span>"+
     "<span  style='display:block;'  >Speed :"+st1.toFixed(4)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p1moves+"</span>"+
  "</div>"+
    "</div>"+

    "<div class='col-sm-5' >"+
  "<div class='block' >"+
     "<h3 >You</h3>"+
     "<span style='display:block;' >Points :"+p2points+"</span>"+
     "<span style='display:block;' >Stage :"+p2stage+"</span>"+
     "<span style='display:block;'  >Time(s) :"+p2seconds+"</span>"+
     "<span  style='display:block;' >Speed(s/t) :"+st2.toFixed(4)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p2moves+"</span>"+
    "</div>"+
   "</div>"+
     main_menu()+
	"<div  class='block' style='text-align:center;' >"+
	"<h4>"+winner+" WON</h4>"+
	"</div>"+
    "</div>";
}

function show_score(p1points,p1stage,p1seconds,p1moves,winner){

  var st = (p1stage/p1seconds);
  
return "<div class='row' style='font-size:2em;margin-top:150px;font-color:white;' >"+
    "<div  class='col-sm-6' >"+
    "<img src='images/trophy.jpg' width=100px />"+
    "<h4>"+winner+"</h4>"+
  "</div>"+
    "<div class='col-sm-6' >"+
       "<span style='display:block;' >Points :"+p1points+"</span>"+
     "<span style='display:block;' >Stage :"+p1stage+"</span>"+
     "<span style='display:block;'  >Time(s) :"+p1seconds+"</span>"+
     "<span  style='display:block;'  >Speed(s/t) :"+st.toFixed(4)+"</span>"+
     "<span  style='display:block;'  >Moves :"+p1moves+"</span>"+
    "</div>"+
    "</div>";

}
