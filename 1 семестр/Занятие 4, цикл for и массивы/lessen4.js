window.addEventListener('load', program_code)

function program_code() {
	//вывод четных от 50 до 0
	// for(var i=50; i!=0; i-=2){
		// console.log(i)
	// }
	//вывод всех значений у(х) х[0,pi]
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	//нарисовать по траектории синуса кружки
	for (var x=0; x<=500*Math.PI; x++){
		var y=100*Math.sin(x)
		console.log(y)
		ctx.beginPath()
		ctx.arc(x, y+h/2, 50,  0, 2*Math.PI)
		ctx.stroke()
	}
}