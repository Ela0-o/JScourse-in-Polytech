window.addEventListener('load', program_code)

function program_code() {
	// var a=4;
	// var b=5;
	// var c='London is the capital of GB'
	// var t=true
	// var f=false
	
	//пропуск на аттракцион
	// var min_height=160
	// var my_height=159
	// if(min_height<=my_height){
		// console.log('Проходите')
	// }
	// else{
		// console.log("Приходите, когда подрастете на "+ (min_height-my_height)+" см")
	//}
	
	//светофор
	var traffic_light='green'
	if (traffic_light=='red'){
		console.log('Ждите')
	}
	else if (traffic_light=='yellow'){
		console.log('Готовьтесь')
	}
	else if (traffic_light='green'){
		console.log('Идите')
	}
	else{
		console.log('Светофор не работает')
	}
}