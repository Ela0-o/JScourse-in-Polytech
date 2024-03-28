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
	for(var i=0; i<N; i++){
		// дано: i[0,N-1]
		// задача: x[0,P*2*Math.PI]
		// получить экранные координаты sx [0,w]
		var x= P*2*Math.PI*i/(N-1);
		var y=Math.sin(x);
		
		var sx=w*i/(N-1)
		// var sy=y*h/2+h/2
	}
	ctx.stroke();
	
	
	var x=0;
	var vx=0;
	var ax=0.1;
	var y=h/2;
	var r=30;
	function mechanics(){
		vx+=ax;
		if (x>w+r){
			x=-r;
		}
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
	}
	function draw(){
		ctx.clearRect(0,0,w,h)
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI*2);
		ctx.stroke();
		
	}
	function control(){
		mechanics();
		draw();
	}
	setInterval(control, 1000/60);
}