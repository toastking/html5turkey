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
	//set the color to fill the feature
	ctx.fillStyle = "#B2130D";
	ctx.beginPath(); //we're going to draw a feather using a pen
	ctx.moveTo(80, 180);
	ctx.lineTo(60,80);
	ctx.arc(50, 80, 10, 0, Math.PI, true);
	ctx.lineTo(80,180);
	ctx.fill();

	var colors = ['#B2501E',"#32B0B2","#69B232","#B2B000"]

	//we're gonna save the canvas state since we're moving it around
	ctx.save();
	//now let's draw the next four using a loop
	for(var i = 1; i < 4; i++){
		ctx.fillStyle = colors[i]; //choose the color for the feather
		//rotate the feather to give it a cool effect
		ctx.rotate((Math.PI/180)*(10));
		ctx.translate(50,-(10+3*i));
		ctx.beginPath();
		ctx.moveTo(80, 180);
		ctx.lineTo(60,80);
		ctx.arc(50, 80, 10, 0, Math.PI, true);
		ctx.lineTo(80,180);
		ctx.fill();
	}

	//restore the canvas state after all those wacky transformations
	ctx.restore();

	//now let's draw the turkey's neck and stuff!
	

}