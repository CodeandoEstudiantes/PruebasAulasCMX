var array = [];	
	
	function closest(array,num){
	var i=0;
	var minDiff=1000;
	var ans;
	for(i in array){
	var m=Math.abs(num-array[i]);
	if(m<minDiff){ 
	minDiff=m; 
	ans=array[i]; 
	}
	}
	return ans;
	}
	
	console.log(closest(array,88));



function selectionSort (sortMe)
{
    
    var i, j, tmp, tmp2;
    for (i = 0; i < sortMe.length - 1; i++)
    {
        tmp = i;
        for (j = i + 1; j < sortMe.length; j++)
            if (sortMe[j] < sortMe[tmp])
                tmp = j;
 
        tmp2 = sortMe[tmp];
        sortMe[tmp] = sortMe[i];
        sortMe[i] = tmp2;
    }
    
    console.log (sortMe);    
    
}


numArray = [0,-1,-2,3,-9,15];
selectionSort(numArray);

numArray = [0,-2,3,-9,15];
selectionSort(numArray);
