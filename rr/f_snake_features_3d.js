
//https://stackoverflow.com/questions/49807779/drawing-square-using-canvas-javascript


function show_surface(){

for(var a=0;a<e('canvas_dimension_2').offsetWidth;a+=10){


var x = e('canvas_dimension_2').offsetWidth/2-a;
var y = e('canvas_dimension_2').offsetHeight/2-a;

e('canvas_dimension_2').fillRect(x,y,a,a);


}
}


// change background when direction changes
// left - right - top - bottom


function show_surface_object(object){

e('canvas_dimension_2').appendChild(object);

object_expand(object);

}

var expand_index = 0;

function object_expand(object){

if(expand_index<e('canvas_dimension_2').offsetWidth){

	var x = e('canvas_dimension_2').offsetWidth/2-expand_index;
var y = e('canvas_dimension_2').offsetHeight/2-expand_index;

		object.style.left = x+"px";
		object.style.top = y+"px";
		object.style.width = expand_index+"px";
		object.style.height = expand_index+"px";


 		expand_index+=150;


var expanding = function(){
	
	object_expand(object);

    
};

setTimeout(expanding, 500);

}else{
	
	//if(expand_index>e('canvas_dimension_2').offsetWidth){
		expand_index = 0;
		e('canvas_dimension_2').removeChild(object);
		e('canvas_3d_log').value += " object removed <br>";
	//}
	
}



}


// change background when direction changes
// left - right - top - bottom





function new_object(text,gbImg){
var object = ne("span");
object.innerHTML = text;
object.style.backgroundImage = gbImg;
object.style.color = "red";
object.style.width = "wrap";
object.style.backgroundColor = "black";
object.style.display = "block";
object.style.border = "solid black 2px";
object.style.fontSize = "2.2em";
object.style.position = "relative";
return object;
}



function show_surface_direction(direction){

if(direction=="l"){

e('canvas_dimension_2').style.backgroundImage = "none";
e('canvas_dimension_2').style.backgroundColor = "green";


if (e('food').offsetLeft-20 < e('head').offsetLeft && e('food').offsetLeft+20 > e('head').offsetLeft){


e('canvas_3d_log').value += "showing food direction left";

show_surface_object(new_object("O","url(images/flower.jpg)"));

e('gift_sound').play();


}

if (e('stacle').offsetLeft-20 < e('head').offsetLeft && e('stacle').offsetLeft+20 > e('head').offsetLeft){

e('canvas_3d_log').value += "showing stacle direction left";

show_surface_object(new_object("X","url(images/dragon.jpg)"));

e('dog_bark_sound').play();


}

}else if(direction=="r"){

e('canvas_dimension_2').style.backgroundImage = "none";
e('canvas_dimension_2').style.backgroundColor = "blue";

if (e('food').offsetLeft-20 < e('head').offsetLeft && e('food').offsetLeft+20 > e('head').offsetLeft){

	e('canvas_3d_log').value += "showing food direction right";
	
	show_surface_object(new_object("O","url(images/flower.jpg)"));

	e('gift_sound').play();

}

if (e('stacle').offsetLeft-20 < e('head').offsetLeft && e('stacle').offsetLeft+20 > e('head').offsetLeft){

	e('canvas_3d_log').value += "showing stacle direction right";

	show_surface_object(new_object("X","url(images/dragon.jpg)"));

	e('dog_bark_sound').play();

}


}else if(direction=="t"){

//e('canvas_dimension_2').style.backgroundImage = "none";
e('canvas_dimension_2').style.backgroundColor = "red";


if (e('food').offsetTop-20 < e('head').offsetTop && e('food').offsetTop+20 > e('head').offsetTop){

	e('canvas_3d_log').value += "showing food direction top";
	
	show_surface_object(new_object("O","url(images/flower.jpg)"));

	e('gift_sound').play();


}

if (e('stacle').offsetTop-20 < e('head').offsetTop && e('stacle').offsetTop+20 > e('head').offsetTop){

	e('canvas_3d_log').value += "showing stacle direction top";

	show_surface_object(new_object("X","url(images/dragon.jpg)"));

	e('dog_bark_sound').play();
}

}else if(direction=="b"){

//e('canvas_dimension_2').style.backgroundImage = "none";
e('canvas_dimension_2').style.backgroundColor = "purple";


if (e('food').offsetTop-20 < e('head').offsetTop && e('food').offsetTop+20 > e('head').offsetTop){

	e('canvas_3d_log').value += "showing food direction bottom";
	
	show_surface_object(new_object("O","url(images/flower.jpg)"));

	e('gift_sound').play();

}

if (e('stacle').offsetTop-20 < e('head').offsetTop && e('stacle').offsetTop+20 > e('head').offsetTop){

	e('canvas_3d_log').value += "showing stacle direction bottom";

	show_surface_object(new_object("X","url(images/dragon.jpg)"));

	e('dog_bark_sound').play();
}



}


if((e('canvas_dimension_2').offsetWidth*0.9)>e('head').offsetLeft){

	e('canvas_dimension_2').style.backgroundImage = "url(images/tokyo.PNG)";

}else if((e('canvas_dimension_2').offsetWidth*0.6)<e('head').offsetLeft){

	e('canvas_dimension_2').style.backgroundImage = "url(images/london.jpg)";

}else if((e('canvas_dimension_2').offsetWidth*0.3)<e('head').offsetLeft){

	e('canvas_dimension_2').style.backgroundImage = "url(images/newyork.jpg)";

}else{

	e('canvas_dimension_2').style.backgroundImage = "url(images/newyork.jpg)";
}



}

