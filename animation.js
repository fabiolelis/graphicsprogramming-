  
        //Constants, flags and global variables 
        var LEFT = 0, MIDDLE = 1, RIGHT = 2; 
        var LEFT_ARROW = 37, RIGHT_ARROW = 39, DOWN_ARROW = 40, UP_ARROW = 38, SPACEBAR = 32;
        var NUM_PHASE = 10, NUM_CARS_PHASE = 3, MIN_DISTANCE = 100;
        var turbo = false, speed = 2, phase = 1, life=3, pause = true;


                        
        function initPhase(){
            
            //Put the cars on random colours and positions       
            posX = Math.floor((Math.random() * 395) + 105);
            posY = -200;
            colourIndex = Math.floor(Math.random() * 6);
            cars = new Array();

            cars.push(new Car(posX, posY, speed, colours[colourIndex]));

            for(var i = 1; i < NUM_CARS_PHASE; i++){
                posX = Math.floor((Math.random() * 395) + 105);
                posY = cars[i-1].positionY - Math.floor((Math.random() * 500) + MIN_DISTANCE);
                colourIndex = Math.floor(Math.random() * 6);

                cars.push(new Car(posX, posY, speed, colours[colourIndex]));
            }

            //draw the cars up to the screen (negative Y)
            ctx.clearRect (0, 0, c.width, c.height);
            reDrawn();
            drawMyCar(currentPos);
            drawCars();
        }
        
        function carsDown() {
            //animation
            ctx.clearRect(0, 0, c.width, c.height);
            reDrawn();
            drawMyCar(currentPos);
            drawCars();
            if(!toDrawGameOver && !pause){
                goDownCars();
                //check new phase
                if(cars[cars.length-1].positionY > c.height){
                    phase++;
                    speed = (toDrawGameOver ?  0 : phase*2);
                    toDrawNewPhase = true;
                    initPhase();
                }
                if(cars[0].positionY > 0){
                    toDrawNewPhase = false;
                }
            }
            
            window.requestAnimationFrame(carsDown);
        }
        
        function goDownCars(){
            //move the cars down
            cars.forEach(
                function(car, i){
                    if(!turbo)    
                        car.positionY += car.speed;
                    else
                        car.positionY += (car.speed > 10 ? car.speed*2 : 10);
                    
                    if(car.positionY >  c.height && !car.gone){
                        points += phase;
                        car.gone = true;
                    }
                    
                }
            );
        }

        function drawCars(){
            
            cars.forEach(function(car, i){
                    drawCar(car.positionX, car.positionY, car.colour);    
                    if(checkCollision(car)){
                        if(!toDrawGameOver)life--;
                        if(life < 0)
                            toDrawGameOver = true;
                        else
                            initPhase();
                    }
                }
            );
            drawMyCar(currentPos);
            drawGameOver();

            
        }

       
        //events
        window.addEventListener("keydown",
            function(event) { 
            
                switch(event.keyCode)
                {
                    case LEFT_ARROW:
                      currentPos = Math.max(--currentPos,0);
                      break;
                    
                    case RIGHT_ARROW:
                      currentPos = Math.min(++currentPos,9);
                      break;
                        
                    case UP_ARROW:
                      turbo = true;
                      break;
                                        
                                            
                }
            }
                
            
        );
        
         window.addEventListener("keyup",
             function(event) { 
                switch(event.keyCode)
                {
                    case UP_ARROW:     
                      turbo = false;
                      break;

                }
            }
        );

        window.addEventListener("keypress",
             function(event) { 
                switch(event.keyCode)
                {
                    case SPACEBAR:
                      if(!toDrawGameOver)
                        pause = !pause;
                      else{
                        //restart
                          phase = 1;
                          speed = 2;
                          toDrawGameOver = false;
                          points = 0;
                          life = 3;
                          initPhase();
                      }
                      break;
                }
            }
        );

