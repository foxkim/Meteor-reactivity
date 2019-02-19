A1 = new ReactiveVar(5);
B1 = new ReactiveVar(8);
console.log( "A1 : ", A1.get(), ", B1 : ", B1.get() );

C1 = function() {
	var sum = A1.get() + B1.get();
	console.log( "여기는 C1 함수 fx = A1 + B1 =>", sum);
	return sum;
};

Tracker.autorun(C1);

C2 = function() {
	var avg = C1() / 2;
	console.log( "여기는 C2 함수 fx = C1 / 2 =>", avg);
	return avg;
}

Tracker.autorun(C2);