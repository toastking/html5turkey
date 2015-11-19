//This is our main Javascript file, it's where we will draw the turkey
function draw(){
	//first we use the id property of the canvas element to get it
	canvas = document.getElementById("turkey");
	if(canvas.getContext){
		//the graphics context is what allows us to draw cool
		//things on the html5 canvas
		var ctx = canvas.getContext("2d");
	}

	//once we set up our canvas and graphics context object we can start drawing!
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

	var colors = ['#B2501E',"#14B274","#32B0B2","#69B232","#FFF000","#D51EFF","#96FF00","#FF0500","#FF3500"]

	//we're gonna save the canvas state since we're moving it around
	ctx.save();
	//now let's draw the next four using a loop
	for(var i = 1; i < 9; i++){
		ctx.fillStyle = colors[i]; //choose the color for the feather
		//rotate the feather to give it a cool effect
		ctx.rotate((Math.PI/180)*(5));
		ctx.translate(25,-5);
		ctx.beginPath();
		ctx.moveTo(80, 180);
		ctx.lineTo(60,80);
		ctx.arc(50, 80, 10, 0, Math.PI, true);
		ctx.lineTo(80,180);
		ctx.fill();
	}

	//restore the canvas state after all those wacky transformations
	ctx.restore();

	//now let's draw the turkey's neck and eyes!
	//we're going to use two lines and arc
	//the arc is a Bezier curve
	ctx.fillStyle = "rgb(127,108,56)";
	ctx.beginPath();
	//we did some fancy trig to get these numbers
	ctx.moveTo(65,185);
	ctx.lineTo(34, 100);
	//let's make the head of the turkey an arc
	ctx.save();
	//rotate the canvas
	var k = Math.sin((Math.PI/180) * 45) *10; // the constant value we are using
	var x = 34 - k;
	var y = 100 + k;
	ctx.arc(x, y, 10, (Math.PI/180)*-45, (Math.PI/180)*135, true);
	//now we draw the other line to finish the neck
	k = Math.sin((Math.PI/180) * 45) *20;
	ctx.translate(-k,k); //use translate so the line is the same
	//do this little trick to get the right coordinates without calculating them
	ctx.lineTo(65,185);
	ctx.restore();

	//fun fact, fill can automatically close the path!
	ctx.fill();

	//now we will draw the gizzard 
	ctx.fillStyle = "#B22003";
	ctx.beginPath();
	ctx.moveTo(19,113);
	ctx.lineTo(19,124);
	ctx.arc(22,124,2.5, Math.PI, Math.PI*2, true);
	ctx.fill();

	//let's draw the beak!
	ctx.fillStyle = "#FFDE00";
	ctx.beginPath();
	ctx.moveTo(17,110);
	ctx.lineTo(10,118);
	ctx.lineTo(25,118);
	ctx.fill();

	//to finish it off let's draw the eyes!
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.arc(29,107,2,0,Math.PI*2,false);
	ctx.fill();
}