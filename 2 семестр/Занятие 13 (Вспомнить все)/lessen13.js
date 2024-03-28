window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	
	console.log(222);
	
	button_act.onclick=function(){
		span_act.innerHTML='Hi!';
	}
	
	// for (var i=10; i>=5; i--){
		// console.log(i);
	// }
	
	// function first_letter(s){
		// return s[0];
	// }
	// console.log(first_letter('Wake up'))
	
	// function shar(x,y,r){
		// ctx.beginPath();
		// ctx.fillStyle='blue'
		// ctx.arc(x,y,r, 0, 2*Math.PI)
		// ctx.fill();
	// }
	// shar(w/2, h/2, 50);
	
	for(var i=0; i<=5; i++){
		if(i==3){
			//continue; //вывело 0 1 2 4 5
			break;//завершает цикл полностью, вывело 0 1 2
		}
		console.log(i)
	}
}