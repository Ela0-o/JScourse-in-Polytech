window.addEventListener('load', program_code)

function program_code() {
	some_span.innerHTML='zsrxdtcfvgbhjnkm;,'
	my_button.onclick=function(){
		some_span.innerHTML='Run mode'
	}
	my_number.oninput=function(){
		some_span.innerHTML=parseInt(my_number.value);
	}
	//parseInt(), parseFloat()
	my_checkbox.onchange=function(){
		some_span.innerHTML=my_checkbox.checked;
	}
	my_range.oninput=function(){
		some_span.innerHTML=parseInt(my_range.value);
	}
}
// заполнение транзитной визы на другую планету: дз ввести имя, пол, тип визы, сделать интерфейс, рассмотреть элемент дифф