//  My self-proclaimed proficiencies. 
// This way i only have to change them here based off of my confidence.
var FrontEndSkills = [
["LanguageProgressCSS",        6],
["LanguageProgressHTML",       5],
["LanguageProgressJavaScript", 8],
["LanguageProgressJQuery",     2]
],
BackEndSkills = [
["LanguageProgressJava",      8],
["LanguageProgressPython",    9],
["LanguageProgressMySQL",     7],
["LanguageProgressCsharp",    6],
["LanguageProgressCplusplus", 5],
["LanguageProgressC",         4]
]
FrontEndLength = FrontEndSkills.length,
BackEndLength = BackEndSkills.length,
FrontEndOverall = 0,
BackEndOverall = 0;

// Loop Through Front End Skills
for(i=0; i<FrontEndLength;++i){
	var ID = FrontEndSkills[i][0];
	var Value = FrontEndSkills[i][1];
	var Percentage = (30 * Value) / 10.0;
	var ProgressBar = document.getElementById(ID);
	var SkillID = ID+"P";
	var SkillP = document.getElementById(SkillID);
	SkillP.innerHTML = Value + " / 10";
	ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
	FrontEndOverall += Value;
}

// Update my Overall Front End Proficiency
var SkillID = "OverallProgressFrontEndP";
var SkillP = document.getElementById(SkillID);
var ProgressBar = document.getElementById("OverallProgressFrontEnd");
var Percentage = (40 * FrontEndOverall) / (10 * FrontEndLength);
ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
SkillP.innerHTML = FrontEndOverall + " / " + (10 * FrontEndLength);

// Loop Through Back End Skills
for(i=0; i<BackEndLength;++i){
	var ID = BackEndSkills[i][0];
	var Value = BackEndSkills[i][1];
	var Percentage = (30 * Value) / 10.0;
	var ProgressBar = document.getElementById(ID);
	var SkillID = ID+"P";
	var SkillP = document.getElementById(SkillID);
	SkillP.innerHTML = Value + " / 10";
	ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
	BackEndOverall += Value;
}

// Update my Overall Back End Proficiency
var SkillID = "OverallProgressBackEndP";
var SkillP = document.getElementById(SkillID);
var ProgressBar = document.getElementById("OverallProgressBackEnd");
var Percentage = (40 * BackEndOverall) / (10 * BackEndLength);
ProgressBar.setAttribute("style", "width:" + Percentage + "vw;");
SkillP.innerHTML = BackEndOverall+ " / " + (10 * BackEndLength);