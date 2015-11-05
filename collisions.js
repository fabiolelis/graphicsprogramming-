//Get if the red car hits another one

 function checkCollision(car){
    var myCarX = getPosXfrom(currentPos);
    var myCarY = MYCAR_Y;

    if(myCarY > car.positionY + CAR_HEIGHT)
        return false;
    if(myCarY + CAR_HEIGHT < car.positionY)
        return false;
    if(myCarX > car.positionX + CAR_WIDTH)
        return false;
    if(myCarX + CAR_WIDTH < car.positionX)
        return false;
     
     
    return  true;
}
        
        