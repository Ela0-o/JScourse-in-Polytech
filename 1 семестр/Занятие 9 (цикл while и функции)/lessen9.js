window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	
	var counter=10;
	while(counter>0){
		counter--;
		if (counter==5){
			continue;
		}
		console.log('Осталось'+counter+' секунд')
		// if (counter==5){
			// break;//вышел из цикла
		// }
	}
	function circle(X,Y,R){
		ctx.beginPath();
		ctx.arc(X,Y,R, 0, 2*Math.PI)
		ctx.stroke();
	}
	var i=0;
	while(i<900){
		i+=15;
		// if (i==45){
			// continue;
		// }
		circle(w/2,h/2,i);
	}
	//нарисовать лесенку из кружков(пирамиду)(1 круг, 2 круга, 3 круга итд)
}