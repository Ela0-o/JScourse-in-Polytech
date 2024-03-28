window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	var n=1500;
	ctx.beginPath();
	for (var i=0; i<n;i++){
		//синусоида
		// var x=i/(n-1)*w;
		// var y=h/2*Math.sin(2*Math.PI*i/(n-1))+h/2;
		//просто левая прикольная хрень, не отсносится к паре
		// var x=i/(n-1)*w;
		// var y=h-(x*x)*h/1000000*(i/(n-1));
		//парабола(почти сделанная)
		var x=i/(n-1)*w;
		var y=h-Math.pow(x-w/2,2)/n*2;
		console.log(x,y);
		ctx.lineTo(x,y);
		// ctx.lineTo(x,-y);
	}
	ctx.stroke();
}
//дз: доделать прошлое(сделать поле для ввода числа - размер шарика, ползунок - тон шарика), доделать параболу