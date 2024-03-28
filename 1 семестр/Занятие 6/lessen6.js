window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	
	draw_button.onclick=function(){
		if (pnt1.checked){
			ctx.fillStyle='red'
		}
		else if(pnt2.checked){
			ctx.fillStyle='blue'
		}
		else if (pnt3.checked){
			ctx.fillStyle='green'
		}
		var X=[];
		var Y=[];
		var j=0;
		x=Math.random()*w
		y=Math.random()*h
		r=my_range.value
		ctx.clearRect(0,0,w,h)
		for(var i=1;i<1000;i++){
			while(j<i){
				col=Math.random()*1000000;
				c=col-(col%1);
				cul=Math.random()*1000000;
				c1=cul-(cul%1);
				j++	
				X[i]=Math.random()*w
				Y[i]=Math.random()*h
				// r=10+Math.random()*40
				// ctx.fillStyle='#'+c;
				// ctx.strokeStyle='#'+c1;
				ctx.beginPath()
				ctx.arc(X[i], Y[i], r,  0, 2*Math.PI)
				ctx.fill()
				ctx.stroke()
			}
		}
	}
}
//сделать поле для ввода числа - размер шарика, ползунок - тон шарика