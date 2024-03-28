//Рекурсия: обращение к самой себе(ф-я вызывает сама себя)
window.addEventListener('load', program_code)

function program_code() {
	var ctx = my_canvas.getContext('2d');
	var w = my_canvas.width;
	var h = my_canvas.height;
	
	// арифметическая прогрессия
	var a1=-2.5;
	var d= 0.4;
	//(a(n)=a(n-1)+d)
	function arifm(n, a1, d){
		if (n==1) return a1;
		return arifm(n-1, a1, d)+d;
	}
	var rez=arifm(5, a1, d);
	console.log(rez);
	//факториал
	// f(n)=f(n-1)*n
	function factor(a){
		if (a==1) return 1;
		return factor(a-1)*a;
	}
	var rez1=factor(3);
	console.log(rez1);
}