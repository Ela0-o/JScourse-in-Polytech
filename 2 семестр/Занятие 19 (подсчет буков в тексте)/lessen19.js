window.addEventListener("load", program_code, false);
//хэш-таблица
function program_code() {
	var text = 'Ясно, что линия, как множество точек на плоскости, не меняется при выборе другой системы координат. Зато меняется её уравнение. Проследим, как это происходит.';
	text = text.toLowerCase();
	var H = {};
	for(var i = 0; i < text.length; i++){
		var ch = text[i];
		if((ch in H)==false) H[ch]=1;
		else H[ch]++;	
	}
	console.log(H);
}