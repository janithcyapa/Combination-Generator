const { clear } = require("console");
const fs = require("fs");
const moment = require("moment");
const start_time = moment();
const max_elements = 4;
let ones = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let result = [...ones];

const func = (data = []) => {
  data.map((l1) => {
    ones.map((l2) => {
      result.push(l1 + l2);
      return null;
    });
    return null;
  });
};

for (let i = 1; i < max_elements; i++) {
  func(result);
}

let resultString = "";
result.forEach((data) => {
  resultString = resultString + data + ", ";
});
console.log(resultString);
console.log(result.length + " Results Found");
fs.writeFile("./result_" + max_elements + ".txt", resultString, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

const end_time = moment();

const duration = moment(moment(end_time).diff(moment(start_time), "milliseconds"));

console.log("Completed in " + duration / 1000 + " seconds");
