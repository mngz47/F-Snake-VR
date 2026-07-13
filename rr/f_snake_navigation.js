function f_navigate(){

if(d=="r"){ //Moves snake head to the right

  if(e('head').offsetLeft>=(e('canvas').offsetWidth+e('canvas').offsetLeft-20)){ // Detect the bound of the canvas towards the right
    e('head').style.left= e('canvas').offsetLeft+"px"; // move the snake head to the beginning of the canvas on the left
  }else{ // If snake head hasn't reached canvas bound toward the right 
    e('head').style.left= (e('head').offsetLeft+3)+"px"; // Move the snake by 3px to the right
  }
  
}else if(d=="l"){ //Moves the snake head to the left 

  if(e('head').offsetLeft<=e('canvas').offsetLeft){ // Detect the bound of the canvas towards the left
    e('head').style.left = (e('canvas').offsetWidth+e('canvas').offsetLeft)+"px"; // move the snake head to the end of the canvas on the right
  }else{ // If snake head hasn't reached canvas bound toward the left 
    e('head').style.left = (e('head').offsetLeft-3)+"px"; // Move the snake by -3px to the left 
  }
  
  
}else if(d=="t"){ //Moves the snake head to the top
  
  if(e('head').offsetTop<=e('canvas').offsetTop){
    e('head').style.top = (e('canvas').offsetHeight+e('canvas').offsetTop-20)+"px";
  }else{
    e('head').style.top = (e('head').offsetTop-3)+"px";
  }
  
}else{ //Moves the snake head to the bottom
  
  if(e('head').offsetTop>=(e('canvas').offsetHeight+e('canvas').offsetTop-20)){
    e('head').style.top = e('canvas').offsetTop+"px";
  }else{
    e('head').style.top = (e('head').offsetTop+3)+"px";
  }
  
}
}
