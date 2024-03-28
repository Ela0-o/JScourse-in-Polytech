window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h1 = my_canvas.height;
	console.log(w, h1);
		
	function HSVtoRGB(h, s, v) {                            // h, s, v: [0, 1]
		var r, g, b, i, f, p, q, t;
		i = Math.floor(h * 6);
		f = h * 6 - i;
		p = v * (1 - s);
		q = v * (1 - f * s);
		t = v * (1 - (1 - f) * s);
		switch (i % 6) {
			case 0: r = v, g = t, b = p; break;
			case 1: r = q, g = v, b = p; break;
			case 2: r = p, g = v, b = t; break;
			case 3: r = p, g = q, b = v; break;
			case 4: r = t, g = p, b = v; break;
			case 5: r = v, g = p, b = q; break;
		}
		return {
			r: Math.floor(r * 255),
			g: Math.floor(g * 255),
			b: Math.floor(b * 255)
		}
	}
	function RGBtoHEX(r, g, b) {                       // r, g, b: [0, 255]
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	//с массивами
	var X=[];
	var Y=[];
	var j=0;
	ctx.fillStyle=chex
	console.log(chex)
	for(var i=1;i<1000;i++){
		r=10+Math.random()*40
		X=r+Math.random()*(w-2*r)
		Y=r+Math.random()*(h1-2*r)
		while(j<i){
			var crgb=HSVtoRGB(X/(r+(w-2*r)), Y/(r+(w-2*r)), 1)
			var chex=RGBtoHEX(crgb.r, crgb.g, crgb.b)
			j++	
			ctx.fillStyle=chex
			ctx.beginPath()
			ctx.arc(X, Y, r,  0, 2*Math.PI)
			ctx.fill()
		}
	}	
}