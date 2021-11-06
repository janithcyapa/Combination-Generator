const fs = require("fs");
const moment = require("moment");
const start_time = moment();
const max_elements = 4;
let ones = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let result = [...ones];
let resultString = "";

// LOOP FUNCTION TO GENERATE COMBINATIONS
const func = (data) => {
  data.forEach((l1) => {
    ones.forEach((l2) => {
      result.push(l1 + l2);
    });
  });
};

// COMBINATION GENERATOR
for (let i = 1; i < max_elements; i++) {
  func(result);
}

// RESULT FORMATTER
result.forEach((data) => {
  resultString = resultString + data + ", ";
});

// FILE SAVE
fs.writeFile("./result_" + max_elements + ".txt", resultString, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

// DURATION CALC
const end_time = moment();
const duration = moment(moment(end_time).diff(moment(start_time), "milliseconds"));

// RESULT
console.log(resultString);
console.log(result.length + " Results Found");
console.log("Completed in " + duration / 1000 + " seconds");
