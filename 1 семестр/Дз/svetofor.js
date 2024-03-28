window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
//светофор
	ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 30;	
//пустой светофор	
	// ctx.strokeStyle='white'
	// ctx.beginPath()
	// ctx.rect(w/3, h/3, w/6, h/3);
	// ctx.stroke()
	// ctx.beginPath()
	// ctx.arc(750, 370, 50,  0, 2*Math.PI)
	// ctx.stroke()
    // ctx.beginPath()
	// ctx.arc(w/3, h/3, 50,  0, 2*Math.PI)
	// ctx.stroke()
    // ctx.beginPath()
	// ctx.arc(w*2/3, h*2/3, 50,  0, 2*Math.PI)
	// ctx.stroke()
//цветной светофор	
    // var gradient = ctx.createRadialGradient(60, 60, 15, 75, 75, 75);
    // ctx.fillStyle = gradient;
	// ctx.shadowColor = 'red';
	// gradient.addColorStop(0.0, 'red');
    // gradient.addColorStop(1.0, '#8B0000');
	// ctx.beginPath()
	// ctx.arc(750, 370, 50,  0, 2*Math.PI, false)
	// ctx.stroke()
	// ctx.fill();
	// var gradienta = ctx.createRadialGradient(60, 60, 15, 75, 75, 75);
    // ctx.fillStyle = gradienta;
	// ctx.shadowColor = 'yellow';
	// gradienta.addColorStop(0.0, 'yellow');
    // gradienta.addColorStop(1.0, 'orange');
	// ctx.beginPath()
	// ctx.arc(w/3, h/3, 50,  0, 2*Math.PI, false)
	// ctx.stroke()
	// ctx.fill();
	// var gradientb = ctx.createRadialGradient(60, 60, 15, 75, 75, 75);
    // ctx.fillStyle = gradientb;
	// ctx.shadowColor = 'green';
	// gradientb.addColorStop(0.0, 'green');
    // gradientb.addColorStop(1.0, '#0DA805');
	// ctx.beginPath()
	// ctx.arc(w*2/3, h*2/3, 50,  0, 2*Math.PI, false)
	// ctx.stroke()
	// ctx.fill();
	ctx.fillStyle='black'
	ctx.beginPath()
	ctx.fillRect(660, 120, 180, 160*3+20);
	ctx.stroke()
	ctx.fill()
	ctx.strokeStyle='gray'
	ctx.beginPath()
	ctx.arc(w/2, 530, 80,  0, 2*Math.PI)
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(w/2, h/2, 80,  0, 2*Math.PI)
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(w/2, 210, 80,  0, 2*Math.PI)
	ctx.stroke()
		
	var traffic_light='red';
	if (traffic_light=='red'){
		ctx.beginPath()
		var gradient = ctx.createRadialGradient(w/2, 530, 15, w/2, 530, 75);//x1,y1,x
		ctx.fillStyle = gradient;
		ctx.shadowColor = 'red';
		gradient.addColorStop(0.0, 'red');
		gradient.addColorStop(1.0, '#8B0000');
		ctx.arc(w/2, 530, 80,  0, 2*Math.PI, false)
		ctx.fill();
		console.log('Ждите')
	
	}
	else if (traffic_light=='yellow'){
		ctx.beginPath()	
		var gradienta = ctx.createRadialGradient(w/2, h/2, 15, w/2, h/2, 75);
		ctx.fillStyle = gradienta;
		ctx.shadowColor = 'yellow';
		gradienta.addColorStop(0.0, 'yellow');
		ctx.arc(w/2, h/2, 80,  0, 2*Math.PI, false)
		ctx.fill();
		console.log('Готовьтесь')
	}
	else if (traffic_light=='green'){
		ctx.beginPath()
		var gradientb = ctx.createRadialGradient(60, 60, 15, 75, 75, 75);
		ctx.fillStyle = gradientb;
		ctx.shadowColor = 'green';
		gradientb.addColorStop(0.0, 'green');
		gradientb.addColorStop(1.0, '#0DA805');
		ctx.arc(w/2, 210, 80,  0, 2*Math.PI, false)
		ctx.fill();
		console.log('Идите')
	}
	else{
		console.log('Светофор не работает')
	}
}