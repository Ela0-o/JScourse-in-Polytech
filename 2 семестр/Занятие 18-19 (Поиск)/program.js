window.addEventListener("load", program_code, false);
function program_code() {
	// Считывание файла
	function readSingleFile(e) {
		var f = e.target.files[0]; //
		
		if (f) {
			var r = new FileReader();
			r.onload = function(env) {
				var content = env.target.result;
				process_file(content)
			}
			r.readAsText(f);
		} else {
			console.log("ERROR READING FILE")
		}
	}
	fileinput.addEventListener('change', readSingleFile, false);

		function binarySearch(M, element){
		 var L = 0;
		 var R = M.length-1;
		 
		 var moves = 0;
		 while(L<=R){
			 i = Math.round((R+L)/2);//(L+(R-L)/2)
			 if (M[i]<element){
				 L = i+1;
			 }
			 else if(M[i]>element){
				 R = i-1;
			 }
			 else{
				 console.log('операций:', moves);
				 return i;
			 }
		 }
		 console.log(moves);
		 return false;
	}
	
	function bruteForce(M, element){
		var moves = 0;
		for(var i=0; i<M.length; i++){
			moves++;
			if(M[i]==element){
				console.log('операций:', moves);
				return i;
			}
		console.log(moves);
		return false;
		}
	}
	
	function hashSearch(H, element){
		return H[element];
	}
	// Работа с содержимым файла
	function process_file(content) {	
		var strings = content.split('\n');

		
		for(var i=0; i<strings.length; i++){
			strings[i]=strings[i].trim();
		}
		
		var H ={};
		for(var i=0; i< strings.length; i++){
			var surname = strings[i];
			H[surname] = i;
		}
		
		var N = 10;
		
		var t1 = performance.now();
		for (var i =0; i<N; i++){
			var indexBf = bruteForce(strings, 'Новиков');
		}
		var t2 = performance.now();
		console.log('bruteForce took: ' + (t2-t1)/N+'ms')
		
		var t1 = performance.now();
		for (var i =0; i<N; i++){
			var indexBs = binarySearch(strings, 'Новиков');
		}
		var t2 = performance.now();
		console.log('binarySearch took: ' + (t2-t1)/N+'ms')
		
		var t1 = performance.now();
		for (var i =0; i<N; i++){
			var indexHs = hashSearch(strings, 'Новиков');
		}
		var t2 = performance.now();
		console.log('hashSearch took: ' + (t2-t1)+'ms')
		
		//применить бинарный поиск к файлу с фамилиями(найти свою)
		//рассчитать количество операций
	}
}