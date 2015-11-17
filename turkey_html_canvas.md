---
layout: springboard
title: Make a Web 2.0 Turkey with HTML5 Canvas
---

#Intro
## The Hand Turkey
The Hand Turkey is a long fabled Thanksgiving tradition.  Elementary school students around the ~~ world ~~ United States trace their hands as part of an ~~ ancient pagan ceremony ~~ art class.  We decided to bring this age old tradition into the twenty first century by making the classic turkey with HTML5 canvas and javascript.

## What's HTML5 Canvas?
The * <canvas> * element is a special tag in HTML.  It creates a media object, similar to an image.  You can change the width and height properties, just like an * <img> * tag.  The canvas is special because of what it can do.  It is essentially a blank, well, canvas for you to draw on.  You can use Javascript to manipulate it to add stylized text, shapes, images, and much more.  In this tutorial we will use the canvas to draw shapes to make a turkey.

## Additional Resources
There are some very helpful resources on the HTML5 canvas on the world wide web:

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [W3 Schools](http://www.w3schools.com/html/html5_canvas.asp)
- [TutsPlus](http://code.tutsplus.com/series/canvas-from-scratch--net-19650)

#Part 1 - Setup
To start we're going to make a new folder.  You can call it "turkey" or something.  Inside that folder we will make two files - ** turkey.html ** and ** main.js ** .  turkey.html will be the main page of that will have a canvas element and the html markup.  Let's make the * canvas * element 500x500.  main.js will hold all the javascript, here we will write the code for creating the shapes on the canvas.  We will link main.js to turkey.html by adding a * script * tag to the head of turkey.html.  

Here's what the turkey.html should look like after you make the canvas element and link the main.js javascript file.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
	<title>Thanksgiving Turkey</title>
	<script type = "text/javascript" src = "./main.js"></script>
</head>
<body>
<canvas width = "500" height = "500">
Thanksgiving turkey goes here.
</canvas>
</body>
{% endhighlight %}

Now we turn our attention to main.js.  Before we can do anything with the canvas we need to import it into the javascript by using an id property.  We'll change the canvas element to include an id:

{% highlight html %}
<canvas id = "turkey" width = "500" height = "500">
Thanksgiving turkey goes here.
</canvas>
{% endhighlight %}

We can then use this id to select the element in the Javascript code.  First we'll make a new function that we'll do our drawing in.  Inside this function we'll use * document.getElementById() * to select the canvas element. When we select the canvas we also need to get it's * graphics context *.  This is the object that allows us to draw shapes and other fun stuff on the canvas.  In order to call the function when the web page loads we'll add it to the body tag's onload property.  

{% highlight javascript %}
function draw(){
	//first we use the id property of the canvas element to get it
	canvas = document.getElementById("turkey");
	if(canvas.getContext){
		//the graphics context is what allows us to draw cool
		//things on the html5 canvas
		var ctx = canvas.getContext("2d");
	}
}
{% endhighlight %}

{% highlight html %}
<body onload="draw()">
<canvas id = "turkey" width = "500" height = "500">
Thanksgiving turkey goes here.
</canvas>
</body>
{% endhighlight %}

Now that we have our canvas imported and got it's graphics context we can start the fun part, drawing stuff!

# Part 2 - Drawing 
## Drawing the Body

Turkeys are large, bulbous birds.  Their shape is almost, spherical.  In our highly accurate two dimensional representation of this majestic land fowl we will be making it's body a circle.  

Before we can draw the circle we need to set the fillStyle of the graphics context.  This variable allows us to the change the color of the insides of the shapes we draw.

{% highlight js %}
ctx.fillStyle = "rgb(127,108,56)";
{% endhighlight %}

Now we'll draw the circle.  To do that we'll use the [arc() function](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc).  After all, a circle is just a 360 degree angle arc right?  The function takes the angle in radians though, so we'll need to remember our high scshool algebra.  360 degrees is 2 PI in radians.  We'll draw our circle near the midde, setting it's center point at 100 x and 200 y.  We'll make the radius of the circle 50 so our turkey is nice and plump.  After we call arc() we need to call ** fill() ** to fill in the circle we drew with the color we specified in fillStyle earlier.  Here's what the code looks like:

{% highlight js %}
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
{% endhighlight %}

And voila! We have a nice turkey body (almost as good as dad bod).

## Drawing the feathers
Ok so we have a body, but what else to turkeys need? That's right, feathers!  

We'll draw two lines and with a half circle on top for the feathers.  

