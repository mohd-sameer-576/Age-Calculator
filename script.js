var date = document.getElementById('date').value;
var month = document.getElementById('month').value;
var year = document.getElementById('year').value;
function calcAge() {
    var date = parseInt(document.getElementById('date').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);

    var today = new Date();
    var d1 = today.getDate();
    var m1 = today.getMonth() + 1;
    var y1 = today.getFullYear();

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap year
    if ((y1 % 4 === 0 && y1 % 100 !== 0) || (y1 % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    if (date > d1) {
        d1 += daysInMonth[(m1 - 2 + 12) % 12]; // Previous month
        m1 -= 1;
    }

    if (month > m1) {
        m1 += 12;
        y1 -= 1;
    }

    var d = d1 - date;
    var m = m1 - month;
    var y = y1 - year;

    document.getElementById('age').innerHTML = `Your age is: ${y} years, ${m} months, and ${d} days.`;
}
