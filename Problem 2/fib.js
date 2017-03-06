function fib (x, sum, temp) {
    if (x === 0 || x == 1)
       return x;
    if (x > 4000000)
       return temp;
    if (x%2 ===0){
       temp = sum
       sum+=x
       //if (sum > 4000000)
	//  return temp;
       return fib(x-1,sum, temp)+fib(x-2,sum, temp)
    }
    else
       return fib(x-1, sum, temp)+fib(x-2, sum, temp)
}
var fibb = function (x,x1,x2,sum) {
	if (x < 4000000){
		x=x1+x2
		x1=x2
		x2=x
		if(x%2===0)
		  sum+=x
		return fibb(x,x1,x2,sum)
		//console.log('Hello')	
	}
	else
		return sum;
}

//var sum = 0

console.log('Recursion '+fibb(0,-1,1,0))
//console.log(fib(34))
