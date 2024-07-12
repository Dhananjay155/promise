function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const averageScore = (averageCodingScore + averageHukumuScore) / 2;
            if (averageScore >= cutoff) {
                resolve(averageScore);
            } else {
                reject("Sorry you haven’t cleared the final cutoff.");
            }
        }, 2000);
    });
}

unitMovementCheck(85, 90, 87)
    .then(score => console.log(`Average score: ${score}`))
    .catch(error => console.log(error));
