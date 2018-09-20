var FrontEndSkills = [5, 5, 4, 3],
	BackEndSkills  = [8, 8, 6, 6, 5, 5];
var FrontEndOverall = FrontEndSkills.reduce(Sum),
	BackEndOverall  = BackEndSkills.reduce(Sum);
console.log(FrontEndOverall)
console.log(BackEndOverall)







//  Checks each of the headers to see if it is in view. 
// Remembers the last previous one
function Sum(total, num){
	return total + num
}