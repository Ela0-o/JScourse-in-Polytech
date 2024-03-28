//drag and drop 
//взаимодействие с мышью
window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	//класс шариков
	function Ball(x,y,r){
		this.x=x;
		this.y=y;
		this.r=r;
	}
	
	var B=[];
	var N=10;
	for(var i=0; i<N; i++){
		let b=new Ball(i/N*w, h/2, Math.random()*70);//локальная переменная, не сущ. вне цикла
		B.push(b);
	}
	
	// var x=w/2;
	// var y=h/2;
	// var r=100;
	
	var y_shift;
	var x_shift;
	var dNd;//тот шарик, на который мы tapнули
	
	//рисование шарика
	function draw(){
		ctx.clearRect(0,0,w,h);
		for(var i=0; i<N; i++){
			var b=B[i];
			ctx.beginPath();
			ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
			ctx.fill();
		}
	}
	draw();
	//то, что происходит при нажатии мыши
	my_canvas.onmousedown = function(e){
		var m=mouseCoords(e)
		for(var i=0; i<N; i++){
			var b=B[i];
			
			var rx = b.x-m.x;
			var ry = b.y-m.y;
			var l=Math.sqrt(rx**2+ry**2)
			console.log(l)
			//кликнули внутрь круга?
			if(b.r>l){
				dNd=b;
				x_shift=b.x-m.x;
				y_shift=b.y-m.y;
				console.log(true);
				// my_canvas.onmousemove=0;//когда кликнуть, круг остановится
				my_canvas.onmousemove=move;
				break;
			}
		}
	}
	my_canvas.onmouseup=function(e){
		// ctx.clearRect(0,0,w,h);
		my_canvas.onmousemove=0;//когда кликнуть, круг остановится
		console.log('Клавиша мыши опущена')
	}
	// my_canvas.onmousemove=move;
	
	//то, что происходит при движении мыши над канвасом
	// my_canvas.onmousemove=move

	function move(e){
		var m=mouseCoords(e)
		dNd.x = m.x+x_shift;
		dNd.y = m.y+y_shift;
		draw();
	}
	
	//функция достает координаты мыши из объекта 'е'
	function mouseCoords(e){
		var m={};
		var rect= my_canvas.getBoundingClientRect();
		m.x=e.clientX-rect.left;
		m.y=e.clientY-rect.top;
		return m;
	}	
}