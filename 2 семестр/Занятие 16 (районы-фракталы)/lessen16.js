window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	
	function circle(x, y, r, hue){
		
		var rgb= HSVtoRGB(hue/360,1,1)
		var color = RGBtoHEX(rgb.r, rgb.g, rgb.b)
		
		ctx.fillStyle=color;
		
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
	
	function fract(n, x, y, r, hue){ //параметризация
		if(n<1) return; //база рекурсии
		//
		fract(n-1, x+r, y, r/2, hue+60)
		fract(n-1, x, y+r, r/2, hue+60)
		fract(n-1, x-r, y, r/2, hue+60)
		fract(n-1, x, y-r, r/2, hue+60)
		circle(x,y,r, hue)
	}
	fract(4, w/2, h/2, 100, 0)
	

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
    };
}
function RGBtoHEX(r, g, b) {                       // r, g, b: [0, 255]
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}	
	// function rect(x, y, l, s){
		// ctx.fillStyle='#fff';
		// ctx.beginPath();
		// ctx.rect(x, y, l, s);
		// ctx.stroke();
		// ctx.fill();
	// }
	
	// function fract(n, x, y, l, s){
		// if(n<1) return;
		// fract(n-1, x+l/2, y, l, s)
		// fract(n-1, x, y+s/2, l, s)
		// fract(n-1, x-l/2, y, l, s)
		// fract(n-1, x, y-s/2, l, s)
		// rect(x, y, l, s)
	// }
	// fract(4, w/2-l/2, h/2-s/2, w/2+l/2, h/2+s/2 )
}