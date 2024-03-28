window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	
	//делим число на 2(нацело)
	function half(x){
		return x/2;
	}
	var s=half(7)
	console.log(s);
	
	//четность
	function chet(y){
		var rez=((y%2)==0);
		return rez;
	}
	var r=chet(7)
	console.log(r);
	
	//рисуем круг
	function circle(X,Y,R){
		ctx.beginPath();
		ctx.arc(X,Y,R, 0, 2*Math.PI)
		ctx.stroke();
	}
	circle(w/2,h/2,30);
	//два круга, соединенные отрезком двигаются вместе
	function pic(x1,y1){
		circle(x1,y1,50);
		circle(x1+150,y1,30);
		ctx.beginPath();
		ctx.moveTo(x1+150,y1);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	pic(700,100)
	//сделать зависимость от угла
}