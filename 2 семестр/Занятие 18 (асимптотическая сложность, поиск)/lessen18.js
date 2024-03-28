window.addEventListener('load', program_code)
//ассимптотическая сложность
function program_code() {
	 var M = [-3, -2, 0, 4, 6 , 2, 8, 14, 23];
	 
	 
	 function binarySearch(M, element){
		 var L = 0;
		 var R = M.length-1;
		 
		 while(L<=R){
			 i = Math.round((R+L)/2);//(L+(R-L)/2)
			 if (M[i]<element){
				 L = i+1;
			 }
			 else if(M[i]>element){
				 R = i-1;
			 }
			 else{
				 return i;
			 }
		 }
		 return false;
	}
	
	var index = binarySearch(M, 0);
	console log(index);
	
	
}