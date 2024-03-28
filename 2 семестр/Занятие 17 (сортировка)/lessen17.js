window.addEventListener('load', program_code)

function program_code() {
	//сортировка пузырьком
	var M1=[3, 5, 4 ,7, 1, 9, 2, 6, 8];
	var M2=[9, 8, 7, 6, 5, 4, 3, 2, 1];
	
	// var a=4;
	// var b=2;
	// var c=a;
	// var a=b;
	// var b=c;
	// //[a,b]=[b,a]; //то же самое
	//console.log(a,b);
	
	function sort_bubble(M){
		var if_n=0;
		for(var j=0; j<M.length-1;j++){
			for(var i=0; i<M.length-1;i++){
				if_n++
				if(M[i]>M[i+1]){
					
					var temp=M[i];
					M[i]=M[i+1];
					M[i+1]=temp;
				}
			}
		}	
		console_log('сортровка пузырьком простая заняла %i if-ов', if_n)
	}
	//чтобы не сортировала те числа, которые уже отсортированы
	function sort_bubble_s(M){
		for(var j=0; j<M.length-1;j++){
			for(var i=0; i<M.length-j-1;i++){
				if(M[i]>M[i+1]){
					var temp=M[i];
					M[i]=M[i+1];
					M[i+1]=temp;
				}
			}
		}
	}

	function sort_bubble_c(M){
		var swamp=false;
		var if_n=0; 
		for(var j=0; j<M.length-1;j++){
			for(var i=0; i<M.length-j-1;i++){
				if(M[i]>M[i+1]){
					var temp=M[i];
					M[i]=M[i+1];
					M[i+1]=temp;
					swap=true;
				}
			}
			if (swamp==false) break;
		}
		console.log('сортровка пузырьком сложная заняла %i if-ов', if_n)
	}
	
	function stupid_sort(M){
		var i=0;
		var if_n=0;
		while(i<M.length-1){
			if_n++
			if(M[i]>M[i+1]){
				var temp=M[i];
				M[i]=M[i+1];
				M[i+1]=temp;
				i=0;
			} 
			else{
				i++;
			}
		}
		console.log('тупая сортровка заняла %i if-ов', if_n)
	}
	
	function gnom_sort(M){
		var i=0;
		var if_n=0;
		while(i<M.length-1){
			if_n++
			if(M[i]>M[i+1]){
				var temp=M[i];
				M[i]=M[i+1];
				M[i+1]=temp;
				if(i>0){
					i--;
				}
			} 
			else{
				i++;
			}
		}
		console.log('гномья сортровка заняла %i if-ов', if_n)
	}
	function sort_insert_1(M){
		var i=0;
		var if_n=0;
		var i_sorted=0;
		while(i<M.length-1){
			if_n++
			if(M[i]>M[i+1]){
				var temp=M[i];
				M[i]=M[i+1];
				M[i+1]=temp;
				if(i>0){
					i--;
				}
			} 
			else{
				i++;
				if (i_sorted<i) i_sorted=i;
				if (i_sorted>i) i=i_sorted;
			}
		}
		console.log( 'сортровка вставками заняла %i if-ов', if_n)
	}
	function shake_sort(M){
		
	}
	console.log(M1);
	stupid_sort(M1);
	console.log(M1);
	
}