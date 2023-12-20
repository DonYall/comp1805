function calculate() {
    const drill = document.getElementById("drill").value;
    const tutorial = document.getElementById("tutorial").value;
    const ps = document.getElementById("ps").value;
    const test = document.getElementById("test").value;
    const bonus = parseFloat(document.getElementById("bonus").value);
    const totalScore = (drill * 0.1) + (tutorial * 0.1) + (ps * 0.49) + (test * 0.2);
    let goalScore = document.getElementById("final").value;
    if (goalScore % 5 == 0) {
        goalScore -= 0.5;
    }
    goalScore -= bonus;
    const requiredScore = 100 * (goalScore - totalScore) / 11;
    document.getElementById("resultLabel").innerHTML = "You need to score " + Math.round(requiredScore * 100) / 100 + "% in the final exam to get " + goalScore + "% in the course. After your bonus and rounding, you'll have " + Math.round(goalScore + bonus) + "%.";
}