const num = 30;

function calculateLetterGrade(n) {

    if (n < 100 && n > 89) {
        return 'A';
    } else if (n < 89 && n > 80) {
        return 'B'

    } else if (n < 79 && n > 70) {
        return 'C'
    }
    else if (n < 69 && n > 60) {
        return 'D'
    } else {
        return 'F'
    }

}
console.log(calculateLetterGrade(num));
