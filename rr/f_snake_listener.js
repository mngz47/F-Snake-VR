function f_listen(){

document.body.onkeydown = function(e){ // Detect keys pressed on keyboard to change the direction of movement of the snake head F

if(e.key=="a" | e.key=="ArrowLeft"){
d="l";
	moves+=1;
}else if(e.key=="d" | e.key=="ArrowRight"){
d="r";
	moves+=1;
}else if(e.key=="w" | e.key=="ArrowUp"){
d="t";
	moves+=1;
}else if(e.key=="s" | e.key=="ArrowDown"){
d="b";
	moves+=1;
}

 show_surface_direction(d);

};
}
