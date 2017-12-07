var fibonacciH = function(n){
    if (n < 2)
	return n;
    return fibonacciH(n - 2) + fibonacciH(n - 1)
}

var fibonacci = function(){
    console.log(fibonacciH(6));
}

var gcdH = function(a, b){
    if ( a % b  == 0)
	return b;
    return gcdH(b, a%b);
}

var gcd = function(){
    console.log(gcdH(36, 40));
}

var names = ["jasper", "leo", "eugene", "yuyang", "jen", "kelly", "helen", "queenie", "adam"];
var randomStudent = function(){
    var len = names.length;
    var randIndex = Math.floor((len) * Math.random());
    console.log(names[randIndex]);
    return names[randIndex];
}

var buttonCallback = function(e){
    console.log("\n\nhere comes e...");
    console.log(e);
    console.log("\n\nhere comes 'this'...");
    console.log(this);
}
var b = document.getElementById('b');
b.addEventListener("click", buttonCallback);

var fib = document.getElementById('fib');
fib.addEventListener("click", fibonacci);

var gcdA = document.getElementById('gcd'); //gcdA because naming conflicts...
gcdA.addEventListener("click", gcd);       //Will otherwise overwrite gcd() the function

var randStu = document.getElementById('randStu');
randStu.addEventListener("click", randomStudent);

/*
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
console.log("should be 3");console.log(" ");

console.log("Testing gcd...");
console.log(gcd(1234,340));
console.log("should be 2");
console.log(gcd(340,1234))
console.log("should be 2");

console.log("Testing randomStudent...");
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());
*/
