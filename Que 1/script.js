function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = marks.reduce((a, b) => a + b, 0) / marks.length;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the coding round.");
            }
        }, 2000);
    });
}

codingScoreCheck([85, 90, 78], 80)
    .then(score => console.log(`Average score: ${score}`))
    .catch(error => console.log(error));
