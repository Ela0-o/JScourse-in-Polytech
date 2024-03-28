window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	ctx.strokeStyle='white'
	ctx.beginPath()
	ctx.strokeRect(670, 130, 160, 160*3);
	ctx.stroke()
	ctx.strokeStyle='white'
	ctx.beginPath()
	ctx.arc(w/2, 530, 80,  0, 2*Math.PI)
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(w/2, h/2, 80,  0, 2*Math.PI)
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(w/2, 210, 80,  0, 2*Math.PI)
	ctx.stroke()
		
	var traffic_light='green';
	if (traffic_light=='red'){
		ctx.fillStyle = 'red';
		ctx.beginPath()
		ctx.arc(w/2, 210, 80,  0, 2*Math.PI)
		ctx.stroke()
		ctx.fill();
		console.log('Ждите')
	}
	else if (traffic_light=='yellow'){
		ctx.fillStyle = 'yellow';
		ctx.beginPath()
		ctx.arc(w/2, h/2, 80,  0, 2*Math.PI)
		ctx.stroke()
		ctx.fill();
		console.log('Готовьтесь')
	}
	else if (traffic_light=='green'){
		ctx.fillStyle = 'green';
		ctx.beginPath()
		ctx.arc(w/2, 530, 80,  0, 2*Math.PI)
		ctx.stroke()
		ctx.fill();
		console.log('Идите')
	}
	else{
		console.log('Светофор не работает')
	}
}	