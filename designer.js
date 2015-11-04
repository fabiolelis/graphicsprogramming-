
        function drawRoad()
        {
            
            /*var w = $(window).width();
            var h = $(window).height();
            $("#gamecanvas").css("width", w + "px");
            $("#gamecanvas").css("height", h + "px"); */

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
            ctx.fillRect(x,600,50,100); 
            ctx.stroke();
            
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x,630,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x+40,630,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x,670,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(x+40,670,10,30); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.fillRect(x,600,15,5); 
            ctx.stroke();
            
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.fillRect(x+35,600,15,5); 
            ctx.stroke();
        }


        function drawCar(posX, posY, colour) {
            
            //var x = getPosXfrom(posX);
            var x = posX;
            ctx.beginPath();
            ctx.fillStyle = colour;
            ctx.fillRect(x,posY,50,100); 
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
            ctx.fillText("Phase: " + phase + " | Speed: " + speed,xInstructions,380);


            
            

        }
        
        function reDrawn()
        {
            drawRoad();
            drawInstructions();
        }
        
        
         //lanes: 101-250,251-400,401-550
        //car 150-200 300-350 450-500
        //pos 
        function getPosXfrom(pos)
        {
            return (pos*45)+105;
        }
        