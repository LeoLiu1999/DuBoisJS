var fibonacci = function(n){
    if (n < 2)
	return n;
    return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log("Testing fibonacci...");
console.log(fibonacci(0));
console.log("should be 0");
console.log(fibonacci(1));
console.log("should be 1");
console.log(fibonacci(2));
console.log("should be 1");
console.log(fibonacci(3));
console.log("should be 2");
console.log(fibonacci(4));
console.log("should be 3");

var gcd = function(a, b){
    if ( a % b  == 0)
	return b;
    return gcd(b, a%b);
}

console.log(" ");
console.log("Testing gcd...");
console.log(gcd(1234,340));
console.log("should be 2");
console.log(gcd(340,1234))
console.log("should be 2");;

var names = ["jasper", "leo", "eugene", "yuyang", "jen", "kelly", "helen", "queenie", "adam"];
var randomStudent = function(){
    var len = names.length;
    var randIndex = Math.floor((len) * Math.random());
    //console.log(randIndex);
    return names[randIndex];
}

console.log(" ");
console.log("Testing randomStudent...");
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());
