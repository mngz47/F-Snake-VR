function f_detect(){

  if(((e('food').offsetTop+20)>e('head').offsetTop && (e('food').offsetTop-20)<e('head').offsetTop) && 
((e('food').offsetLeft+20)>e('head').offsetLeft && (e('food').offsetLeft-20)<e('head').offsetLeft)){ //Detects if the head of the snake overlaps with food

points+=1; // Gives the player a point for getting the food

if(points>=14){ // Detects if user has gained enough points to move to next stage

  if(stage==7){ // Detects completion of game if user finishes stage 7
//alert('Congradulations Game Complete');

	  show_score(points,stage,game_seconds,moves,"Congradulations Game Complete");
	  
    // Alert and Confirm currently don't work on facebook games
}else if(transport(stage+1)){ // Confirms if user is ready for next stage


}else{ // If user is not ready to go to next stage
location.reload();
}
  
}

e('points').innerHTML = 'POINTS('+points+')'; //Shows recent points to user
placeFood(); //Places food onto recent randomised position



}

if(((e('stacle').offsetTop+20)>e('head').offsetTop && (e('stacle').offsetTop-20)<e('head').offsetTop) && 
((e('stacle').offsetLeft+20)>e('head').offsetLeft && (e('stacle').offsetLeft-20)<e('head').offsetLeft)){ // Detects snake head overlap with obstacle

if(activeChallenge){
gameEnd();
}

gameOver();
game_over = true;


}

}
