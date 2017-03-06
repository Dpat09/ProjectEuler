function fib() {
	var x = 0, x1=-1, x2=1
	var sum = 0
	while (x < 4000000){
		x=x1+x2
		x1=x2
		x2=x
		if (x%2===0){		
			sum+=x
			//console.log(sum)
		}
	}
	console.log(sum)
}

fib()
