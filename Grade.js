function studentGradeGenerator(marks) {
    if (marks>=0 && marks<=100) {
        if (marks>79) {
            return 'A';
        }
        else if (marks>=60 && marks<=79) {
            return 'B';
        }
        else if (marks>=50 && marks<=59 ) {
            return 'C';
        }
        else if (marks>=40 && marks<=49) {
            return 'D';
        }
        else {
            return 'E';
        }
    }
}
console.log(studentGradeGenerator(20)) //returns E