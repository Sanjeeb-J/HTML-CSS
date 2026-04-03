let textScore = 80;
let letterGrade;

switch (true) {
  case textScore >= 90:
    letterGrade = "A";
    break;
  case textScore >= 80:
    letterGrade = "B";
    break;
  case textScore >= 70:
    letterGrade = "C";
    break;
  case textScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(letterGrade);
