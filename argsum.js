var numArray = process.argv;
var len = numArray.length;
var sum = 0;
for (i = 2; i < len; i++) {
	sum += Number(numArray[i]);
}
console.log(sum);
