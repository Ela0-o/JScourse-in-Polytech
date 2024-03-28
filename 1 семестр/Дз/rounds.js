window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	console.log(w, h);
	
    //без массивов
	// for(var a=0;a<=100;a++){
		// while(k<a){
			// col=Math.random()*1000000;
			// c=col-(col%1);
			// k++	
			// x=Math.random()*w
			// y=Math.random()*h
			// r=10+Math.random()*40
			// ctx.beginPath()
			// ctx.arc(x, y, r,  0, 2*Math.PI)
			// ctx.stroke()
		//}
	//}
	
	
	//с массивами
	var X=[];
	var Y=[];
	var j=0;
	for(var i=1;i<1000;i++){
		while(j<i){
			col=Math.random()*1000000;
			c=col-(col%1);
			cul=Math.random()*1000000;
			c1=cul-(cul%1);
			j++	
			r=10+Math.random()*40
			X[i]=Math.random()*w
			Y[i]=Math.random()*h
			ctx.fillStyle='#'+c;
			ctx.strokeStyle='#'+c1;
			ctx.beginPath()
			ctx.arc(X[i], Y[i], r,  0, 2*Math.PI)
			ctx.fill()
			ctx.stroke()
		}
	}
	
}