function calculate() {
    const drill = document.getElementById("drill").value;
    const tutorial = document.getElementById("tutorial").value;
    let psList = [];
    document.querySelectorAll(".p").forEach((p) => {
        psList.push(p.value);
    });
    const topSeven = psList.sort().slice(2, 9);
    let total = 0;
    topSeven.forEach((p) => {
        total += parseInt(p);
    });
    const averagePS = total / 7;
    const test = document.getElementById("test").value;
    const bonus = parseFloat(document.getElementById("bonus").value);
    const totalScore = (drill * 0.1) + (tutorial * 0.1) + (averagePS * 0.49) + (test * 0.2);
    let goalScore = document.getElementById("final").value;
    if (goalScore % 5 == 0) {
        goalScore -= 0.5;
    }
    goalScore -= bonus;
    const requiredScore = 100 * (goalScore - totalScore) / 11;
    document.getElementById("resultLabel").innerHTML = "You need to score " + Math.round(requiredScore * 100) / 100 + "% in the final exam to get " + goalScore + "% in the course. After your bonus and rounding, you'll have " + Math.round(goalScore + bonus) + "%.";
}