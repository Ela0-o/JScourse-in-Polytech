//основы ООП
function Car(len, model, color){
	this.len = len;
	this.model = model;
	this.color = color;
	this.wheels = 4;
	
	var engine_started=false; //Инкапсуляция
	
	this.move= function(x){
		if (engine_started==false){
			start_engine();
		}
		console.log(this.model,'Едет со скоростью', x, 'км/ч');
	}
	function start_engine(){
		engine_started=true;
		console.log('Engine started! whroom');
	}
}