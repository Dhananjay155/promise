function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = marks.reduce((a, b) => a + b, 0) / marks.length;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the HUKUMU round.");
            }
        }, 2000);
    });
}

HUKUMUScoreCheck([88, 76, 92], 85)
    .then(score => console.log(`Average score: ${score}`))
    .catch(error => console.log(error));
