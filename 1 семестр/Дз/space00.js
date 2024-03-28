window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	
	ctx.lineWidth=10; //толщина линии
	ctx.strokeStyle='gray' //цвет линии
	ctx.fillStyle='pink'// цвет внутри //(ctx.fillStyle='#00ff00'(rgb) под каждый 2 цифры)
	
	
	/*Линия
	ctx.beginPath()
	ctx.moveTo(30,10)//туда ставится карандаш
	ctx.lineTo(380, 140)
	ctx.lineTo(150, 140)
	ctx.lineTo(250, 120)
	ctx.stroke()
	*/ctx.fill();
	
	// Круг
	ctx.beginPath()
	var gradient = ctx.createRadialGradient(5, 5, 50*h*1.3, 5 - 50*h/5, 5 + 50*h/5, 0);
            gradient.addColorStop(0, "#0000bb");
            gradient.addColorStop(1, "#44ddff");
            ctx.fillStyle = gradient;
	ctx.arc(750, 370, 50,  0, 2*Math.PI)
	ctx.stroke()
	ctx.fill();
	//точки-звезды
	for(var j=0; j<100;j++){
		var a=Math.random()*window.innerWidth
		var b=Math.random()*window.innerHeight
		var k = 0
		while(k<100){
			ctx.beginPath()
			ctx.lineWidth=2; 
			ctx.strokeStyle='white'
			var m = Math.random()*Math.min(a/2,b/2)+1
			var d = Math.random()*360
			var r = (d/360) * 2 * Math.PI 
			z = Math.cos(r) * m + 5
			q = Math.sin(r) * m + 5
			ctx.moveTo(Math.floor(a/2),Math.floor(b/2))
			ctx.lineTo(z+Math.floor(a/2), q+Math.floor(b/2))
			ctx.stroke()
			k=k+1
		}
	}	
/*точки-звезды
for(var u=0;u<100;u++){
a[u]= Math.random()*w
b[u]= Math.random()*h}
var a= Math.random()*w
var b= Math.random()*h
for(var u=0;u<100;u++){
ctx.translate(a,b)}
*/
	for(var j=0; j<100;j++){
		var k = 0
		while(k<100){
			ctx.beginPath()
			ctx.lineWidth=1; 
			ctx.strokeStyle='white'
			var m = Math.random()*Math.min(a/10,b/10)+1
			var d = Math.random()*360
			var r = (d/360) * 2 * Math.PI 
			z = Math.cos(r) * m + a
			q = Math.sin(r) * m + b
			ctx.moveTo(Math.floor(a),Math.floor(b))
			ctx.lineTo(z,q)
			ctx.stroke()
			k=k+1
		}
	}	
		for (var j=0; j<5; j++){
		var c=Math.random()*180;
		var d=Math.random()*0.2;
	ctx.lineTo(a-1*d*Math.cos(c), b-1*d*Math.sin(c), a+1*d*Math.cos(c), b+1*d*Math.sin(c))
	}
	//ctx.fillText('AAA',50,50) // рисование букв
	//ctx.strokeRect(400,20,50,100)//координаты левого верхнего, длина сторон
	// ! - это "не"
}
