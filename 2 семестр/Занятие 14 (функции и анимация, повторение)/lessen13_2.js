window.addEventListener('load', program_code)

function program_code() {
	var ctx = canvas_example.getContext('2d');
	var w = canvas_example.width;
	var h = canvas_example.height;
	
	var ctx_plot = canvas_plot.getContext('2d');
	var wp = canvas_plot.width;
	var hp = canvas_plot.height;

	var P=1.5; //сколько периодов
	var N=100;
	
	var x=0;
	var xp=0;
	var vx=0;
	var ax=0.1;
	var y=h/2;
	var yp=hp/2;
	var r=30;
	
	var V_data=[];
	function mechanics(){
		vx+=ax;
		if(vx>3){
			ax=-0.1;
		}
		if(vx<0){
			ax=0.1;
		}
		x+=vx;
		if(x>w+r){
			x=-r
		}
		V_data.push(vx);
		if (V_data.length>100){
			V_data.shift();
		}
	}
	
	function draw(){
		ctx.clearRect(0,0,w,h)
		ctx.beginPath();
		ctx.fillStyle='red'
		ctx.arc(x, y, r, 0, Math.PI*2);
		ctx.fill();
		
		ctx_plot.clearRect(0,0,w,h)
		ctx_plot.beginPath();
		// ctx.fillStyle='green'
		// ctx_plot.arc(x, y, r, 0, Math.PI*2);
		// ctx_plot.fill();
		for (var i=0; i < V_data.length; i++){
			ctx_plot.lineTo(i/(V_data.length-1)*,yp-10*V_data[i])
			
		}
		ctx_plot.stroke();
	}
	function control(){
		mechanics();
		draw();
	}
	setInterval(control, 1000/60);
}
//дз: изменение ускорения графиком a(t)
