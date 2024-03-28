var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
console.log(w, h);

var x0 = Math.floor(w / 2);
var y0 = Math.floor(h / 2);
var maxRadius = Math.min(x0, y0)/2;
var raysCount = 200;
//лучи солнца
function sun(){
	var i = 0
	while(i<raysCount){
		ctx.beginPath()
		ctx.lineWidth=7;
		ctx.strokeStyle='orange'
		var m1 = Math.random()*maxRadius+1
		var d1 = Math.random()*360
		var r1 = (d1/360) * 2 * Math.PI 
		x = Math.cos(r1) * m1 + 5
		y = Math.sin(r1) * m1 + 5
		ctx.moveTo(x0, y0)
		ctx.lineTo(x+x0, y+y0)
		ctx.stroke()
		i = i + 1
	}
	for(var u=0;u<w;u += 30){
		for(var j=0; j<h;j += 30){
			var k = 0
			while(k<100){
				ctx.beginPath()
				ctx.lineWidth=2; 
				ctx.strokeStyle='white'
				var m = Math.random()*30
				var d = Math.random()*360
				var r = (d/360) * 2 * Math.PI 
				z = Math.cos(r) * m + 5
				q = Math.sin(r) * m + 5
				ctx.moveTo(Math.floor(j/2),Math.floor(u/2))
				ctx.lineTo(z+Math.floor(j/2), q+Math.floor(u/2))
				ctx.stroke()
				k=k+1
			}
		}	
	}
}

function space(){
	//ядро солнца
	ctx.beginPath()	
	ctx.fillStyle='orange'
	ctx.strokeStyle='orange'
	ctx.arc(w/2, h/2, 100, 0, 2*Math.PI)
	ctx.fill()
	
	ctx.stroke()
}	
function clearCanvas() {
ctx.clearRect(0, 0, w, h);
}

function draw() {
clearCanvas();
space()
sun();
}
setInterval(draw, 200)