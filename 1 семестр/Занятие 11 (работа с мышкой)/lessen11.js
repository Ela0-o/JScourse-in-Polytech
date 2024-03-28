//dragonDrop 
//взаимодействие с мышью
window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	
	var x=w/2;
	var y=h/2;
	var r=100;
	
	var y_shift;
	var x_shift;
	
	//рисование шарика
	function draw(){
		ctx.clearRect(0,0,w,h);
		ctx.beginPath();
		ctx.arc(x,y,r,0,Math.PI*2);
		ctx.fill();
	}
	draw();
	
	//то, что происходит при нажатии мыши
	my_canvas.onmousedown = function(e){
		var m=mouseCoords(e)
		var rx = x-m.x;
		var ry = y-m.y;
		var l=Math.sqrt(rx**2+ry**2)
		x_shift=x-m.x;
		y_shift=y-m.y;
		console.log(l)
		//кликнули внутрь круга?
		if(r>l){
			console.log(true);
			// my_canvas.onmousemove=0;//когда кликнуть, круг остановится
			my_canvas.onmousemove=move;
		}
		else{
			console.log(false);
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
		x = m.x+x_shift;
		y = m.y+y_shift;
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