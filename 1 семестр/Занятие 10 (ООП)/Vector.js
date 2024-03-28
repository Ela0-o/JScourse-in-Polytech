function Vector(x1,y1,x2,y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	
	var incapsule = false; //Инкапсуляция
	
	this.len= function(x1,y1,x2,y2){
		if (incapsule==false){
			Len();
		}
		console.log(Math.sqrt(((x2-x1)**2)+((y2-y1)**2)))
	}
	function Len(){
		incapsule=true;
		console.log('Search lengh of vector')
	}
}