window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	
	var x=w/2;
	var y=h/2;
	var r=200;

	var vx=0;
	var vy=1;
	var ax=0.1;
	var ay=0.1;
	
	var t=10;
	var m=3;
	var k=3;
	var g=9.8;
	
	//рассчеты
	function calculation(){
		vx+=ax;
		vy+=ay;
		//x+=vx;
		y+=vy;
		// if (x>w+r){
			// x=-r;
		// }
		// if(vx>10||vx<-2){
			// ax=-ax;
		// }
		//закон гука
		var dy=m*(g+ay)/k;
		console.log(dy);
		if(y>dy+y||y<-dy+y){
			ay=-ay
		}
	}
	
	//рисование
	function draw(){
		ctx.clearRect(0,0,w,h)
		ctx.beginPath();
		ctx.arc(x,y,r,0, Math.PI*2);
		ctx.stroke();
		ctx.moveTo(w/2, 0)
		ctx.lineTo(x, y)
		ctx.stroke()
	}
	
	//запуск остальных функций
	function control(){
		calculation();
		draw()
	}
	setInterval(control,t);
}