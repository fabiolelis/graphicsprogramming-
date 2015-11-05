
        var toDrawNewPhase = false;
        var toDrawGameOver = false;
        var MYCAR_Y = 600;
        var ROADX = 105;
        var DESLOC = 45;
        var CAR_WIDTH = 50, CAR_HEIGHT = 100;
        var points = 0;


        function drawRoad()
        {

            //grass
            ctx.beginPath();
            var my_gradient=ctx.createLinearGradient(0,0,0,c.height);
            my_gradient.addColorStop(0,"#002200");
            my_gradient.addColorStop(1,"#00dd00");
            ctx.fillStyle= my_gradient;
            //ctx.fillStyle = "green";
            ctx.fillRect(0,0,c.width,c.height); 
            ctx.stroke();

            //road
            ctx.beginPath();
            ctx.fillStyle = "#bbbbbb";
            ctx.fillRect(100,0,450,c.height); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(100,0,5,c.height); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(545,0,5,c.height); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(250,0,5,c.height); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(400,0,5,c.height); 
            ctx.stroke();
            

        }
        
                
        //lanes: 101-250,251-400,401-550
        //car 125-225 275-375 425-525
        
        function drawMyCar(pos)
        {
            var x = getPosXfrom(pos);
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.fillRect(x,MYCAR_Y,CAR_WIDTH,CAR_HEIGHT); 
            ctx.stroke();
                        
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x,MYCAR_Y+30,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x+40,MYCAR_Y+30,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x,MYCAR_Y+70,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x+40,MYCAR_Y+70,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.fillRect(x,MYCAR_Y,15,5); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.fillRect(x+35,MYCAR_Y,15,5); 
            ctx.stroke();
        }


        function drawCar(posX, posY, colour) {
            
            //var x = getPosXfrom(posX);
            var x = posX;
            ctx.beginPath();
            ctx.fillStyle = colour;
            ctx.fillRect(x,posY,CAR_WIDTH,CAR_HEIGHT); 
            ctx.stroke();
            
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x,posY,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x+40,posY,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x,posY+40,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x+40,posY+40,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = (colour == "yellow" ? "red" : "yellow");
            ctx.fillRect(x,posY+95,15,5); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = (colour == "yellow" ? "red" : "yellow");
            ctx.fillRect(x+35,posY+95,15,5); 
            ctx.stroke();
            
            
        }
        
        function drawInstructions(){
            
            var xInstructions = c.width - 600;
            
            ctx.font="50px Georgia";
            ctx.fillText("Road Game!",xInstructions,250);
            ctx.fillStyle="#ffffff";
            ctx.font="20px Georgia";
            ctx.fillText("Use arrow keys to",xInstructions,280);
            ctx.fillText("move the car left and right",xInstructions,300);
            ctx.fillText("Use space to speed up",xInstructions,340);
            if(toDrawNewPhase)
                ctx.fillStyle="yellow";
            
            ctx.fillText("Phase: " + phase + " | Speed: " + speed,xInstructions,380);
            ctx.fillText("Points: " + points + " ",xInstructions,400);
            ctx.fillText("Life: " + life + " ",xInstructions,420);
            
            
            if(toDrawNewPhase){
                ctx.fillStyle="#ffffff";
                ctx.font="72px Georgia";
                ctx.fillText("Phase "+ phase +" !",c.width - 600,500);
            }
            
            
            
        }
        function drawGameOver()
        {
            if(toDrawGameOver){
                ctx.fillStyle="red";
                ctx.font="50px Georgia";
                ctx.fillText("Game Over",c.width - 600,480);

                ctx.beginPath();
                ctx.arc(getPosXfrom(currentPos), MYCAR_Y, 100, 0, 2 * Math.PI, false);
                var my_gradient=ctx.createRadialGradient(getPosXfrom(currentPos),MYCAR_Y,5,getPosXfrom(currentPos),MYCAR_Y,100);
                my_gradient.addColorStop(0,"red");
                my_gradient.addColorStop(1,"yellow");
                ctx.fillStyle= my_gradient;
                ctx.fill();
                ctx.stroke();

            }
        }
        
        function reDrawn()
        {
            drawRoad();
            drawInstructions();
            drawGameOver();
            
        }
        
        
         //lanes: 101-250,251-400,401-550
        //car 150-200 300-350 450-500
        //pos 
        function getPosXfrom(pos)
        {
            return (currentPos*DESLOC)+ROADX;
        }
        