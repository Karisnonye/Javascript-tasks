function divisible(num) {
    let aa = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        aa.push("yu-gi-oh");
      } else if (i % 2 === 0 && i % 3 === 0) {
        aa.push("yu-gi");
      } else if (i % 2 === 0 && i % 5 === 0) {
        aa.push("yu-oh");
      } else if (i % 3 === 0 && i % 5 === 0) {
        aa.push("gi-oh");
      } else if (i % 2 === 0) {
        aa.push("yu");
      } else if (i % 3 === 0) {
        aa.push("gi");
      } else if (i % 5 === 0) {
        aa.push("oh");
      } else {
        aa.push(i);
      }
    }
    return aa;
}
  console.log("Passing 100 as Argument>>", divisible(100));
  console.log("Passing a Random number as Argument>>", divisible(30));
