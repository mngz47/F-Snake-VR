var body_left = [];
var body_top = [];

function show_body(x,y){

var s_body  = e('canvas').getElementsByClassName('s_body').length;

for(var a=0;a<(s_body-(15*points));a++){

if(a<(s_body-s_body*points/15)){

//shed skin - hide body trail

if(mode=="hard"){
e('canvas').getElementsByClassName('s_body')[a].style.display = 'none'; 
}else if(mode=="easy"){
if(a<(15*points)){
e('canvas').getElementsByClassName('s_body')[a].remove(); 
}
}

}
}

for(var a=0;a<(points-1);a++){

body_left[(a==0?0:a+1)] = (a==0?x:body_left[a]);
body_top[(a==0?0:a+1)] = (a==0?y:body_top[a]);

var s_b = ne('span');
s_b.innerHTML = 'O';
s_b.style.fontSize = '2.2em';

var color = Math.round(4*Math.random());

s_b.style.color = (color==1?'red':(color==2?'yellow':(color==3?'green':'purple')));

s_b.className = 's_body';

s_b.style.position = 'absolute';
s_b.style.left = body_left[a]+'px';
s_b.style.top = body_top[a]+'px';

e('canvas').appendChild(s_b);

}

}

function placeFood(){

var tt = Math.random()*(e('canvas').offsetHeight+e('canvas').offsetTop-20);
while(tt<e('canvas').offsetTop){
tt =  Math.random()*(e('canvas').offsetHeight+e('canvas').offsetTop-20);
}
var ll = Math.random()*(e('canvas').offsetWidth+e('canvas').offsetLeft-20);
while(ll<e('canvas').offsetLeft){
ll =  Math.random()*(e('canvas').offsetWidth+e('canvas').offsetLeft-20);
}

e('food').style.top = tt+"px";
e('food').style.left = ll+"px";


}

placeFood();

var sw = 1;

function placeStacle(){

var tt = Math.random()*(e('canvas').offsetHeight+e('canvas').offsetTop-20);
while(tt<e('canvas').offsetTop){
tt =  Math.random()*(e('canvas').offsetHeight+e('canvas').offsetTop-20);
}
var ll = Math.random()*(e('canvas').offsetWidth+e('canvas').offsetLeft-20);
while(ll<e('canvas').offsetLeft){
ll =  Math.random()*(e('canvas').offsetWidth+e('canvas').offsetLeft-20);
}

e('stacle').style.top = (sw?e('food').style.top:tt+"px");
e('stacle').style.left = (sw?ll+"px":e('food').style.left);

sw = (sw?0:1)
}

function prepareNextStage(){
stage+=1; 
points=0; //Resets points to prepare for new stage

e('stacle').style.color = (stage==2?'red':(stage==3?'yellow':(stage==4?'green':(stage==5?'orange':(stage==6?'blue':'purple'))))); //Changes color of obsatcle for new stage
setInterval(placeStacle,1000*(8-stage));//Changes speed of obstacle for new stage
}
