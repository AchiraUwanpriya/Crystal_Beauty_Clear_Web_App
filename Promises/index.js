// setTimeout(() => {
//   console.log("The winner is Kamal Hassan");
// }, 5000);

let winner = "Kamal Hassan";
let isJudgeBoardOkay = true;

const myPromise = new Promise((resolve, reject) => {
  if (isJudgeBoardOkay) {
    //announce the winner
    setTimeout(() => {
      console.log("The winner is " + winner);
      resolve(
        {
            name: winner,
            gift: "A brand new car",
            marks: 96

        }
      );
    }, 5000);
  } else {
    reject({
        reason: "judge board is fighting over something",
        level: "high",
        wounded:4
    });
  }
});

myPromise
  .then((abc) => {
    console.log(abc)
    console.log("Congratulations for the winner. Let's end the show.");
  })
  .catch((error) => {
    console.log(error);
    console.log(
      "Sorry, the judge board is not okay. We cannot announce the winner."
    );
  });
