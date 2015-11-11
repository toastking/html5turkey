//This is our main Javascript file, it's where we will draw the turkey
function draw(){
	//first we use the id property of the canvas element to get it
	canvas = document.getElementById("turkey");
	if(canvas.getContext){
		//the graphics context is what allows us to draw cool
		//things on the html5 canvas
		var ctx = canvas.getContext("2d");
	}

	//once we set up our canvas and graphics context objext we can start drawing!
	//first we'll draw the body of the turkey
	ctx.fillStyle = "rgb(127,108,56)";
	var x = 100; // x coordinate
    var y = 200; // y coordinate
    var radius = 50; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI * 2; // End point on circle
    var anticlockwise = true; // clockwise or anticlockwise

    //draw a circle by making a 360 degree arc
	ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

	ctx.fill();

	//now lets draw a feather!
	ctx.beginPath();
	ctx.moveTo(80, 180);
	ctx.lineTo(60,80);
	ctx.arc(50, 80, 10, 0, Math.PI, true);
	ctx.lineTo(80,180);
	ctx.stroke();

	//now let's draw the next four using a loop
	for(var i = 1; i < 4; i++){
		ctx.beginPath();
		ctx.moveTo(80 + 20*i, 180);
		ctx.lineTo(60 + 20*i,80);
		ctx.arc(50 + 20*i, 80, 10, 0, Math.PI, true);
		ctx.lineTo(80 + 20*i,180);
		ctx.stroke();
	}


}