window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	
	for(var j=0; j<=w; j+=10){
		for(var i=0; i<=h;i+=10){
			ctx.beginPath()	
			if (i%20==0 & j%20==0){
				ctx.fillStyle='red'
				ctx.strokeStyle='black'
				ctx.arc(j, i, 5, 0, 2*Math.PI)
				ctx.fill()
			}	
			else{
				ctx.fillStyle='orange'
				ctx.strokeStyle='black'
				ctx.arc(j, i, 5, 0, 2*Math.PI)
				ctx.fill()
			}
			ctx.stroke()
		}
	}
}