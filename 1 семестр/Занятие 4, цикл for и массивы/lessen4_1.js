window.addEventListener('load', program_code)

function program_code() {
	//вывод массива поэлементно
	// var drinks=['water','tea','coffe','beer']
	// console.log(drinks[2])
	// console.log(drinks.length)
	// for (var i=0; i<drinks.length;i++){
		// console.log(drinks[i])
	// }
	//добавление в пустой массив элементов
	// var names=[]
	// names.push('Alex')
	// names.push('Elena')
	// console.log(names)
	var T=[];
	for(var i=0;i<30;i++){
		T[i]=(5+4*Math.random())
	}
	console.log(T)
	var sumT=0;
	for (var i=0; i<30; i++){
		sumT+=T[i]
	}
	console.log(sumT/30)
	
	//DZ
	for(var i=0;i<10;i++)
	a=30+10*Math.random();//от 30 до 40
	console.log()
	//Домашнее задание: создать 2 массива х и у со случайными значениями, нарисовать на экране 20 кружков в случайных местах, (* разноцветные, разного размера)
}