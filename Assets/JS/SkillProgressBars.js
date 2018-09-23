var FrontEndSkills = [
		["LanguageProgressCSS",        6.0],
		["LanguageProgressHTML",       5.0],
		["LanguageProgressJavaScript", 6.5],
		["LanguageProgressJQuery",     2.5]
	],
	BackEndSkills = [
		["LanguageProgressJava",      8.0],
		["LanguageProgressPython",    8.5],
		["LanguageProgressMySQL",     6.5],
		["LanguageProgressCsharp",    6.5],
		["LanguageProgressCplusplus", 5.0],
		["LanguageProgressC",         4.5]
	]
	FrontEndLength = FrontEndSkills.length,
	BackEndLength = BackEndSkills.length;

var FrontEndOverall = 0,
	BackEndOverall = 0;

for(i=0; i<FrontEndLength;++i){
	var ID = FrontEndSkills[i][0];
	var Value = FrontEndSkills[i][1];
	var Percentage = (25 * Value) / 10.0;
	var ProgressBar = document.getElementById(ID);
	var SkillID = ID+"P";
	var SkillP = document.getElementById(SkillID);
	SkillP.innerHTML = Value;
	ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
	FrontEndOverall += Value;
}

var SkillID = "OverallProgressFrontEndP";
var SkillP = document.getElementById(SkillID);
var ProgressBar = document.getElementById("OverallProgressFrontEnd");
var Percentage = (35 * FrontEndOverall) / (10 * FrontEndLength);
ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
SkillP.innerHTML = FrontEndOverall + "/" + (10 * FrontEndLength);

for(i=0; i<BackEndLength;++i){
	var ID = BackEndSkills[i][0];
	var Value = BackEndSkills[i][1];
	var Percentage = (25 * Value) / 10.0;
	var ProgressBar = document.getElementById(ID);
	var SkillID = ID+"P";
	var SkillP = document.getElementById(SkillID);
	SkillP.innerHTML = Value;
	ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
	BackEndOverall += Value;
	console.log(ID,":",Value)
}

var SkillID = "OverallProgressBackEndP";
var SkillP = document.getElementById(SkillID);
var ProgressBar = document.getElementById("OverallProgressBackEnd");
var Percentage = (35 * BackEndOverall) / (10 * BackEndLength);
ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
SkillP.innerHTML = BackEndOverall+ "/" + (10 * BackEndLength);