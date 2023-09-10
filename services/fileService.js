import csv from "csv-parser";
import fs from "fs";
export const fileService = {
  loadCSV,
};

function loadCSV(filePath) {
  const results = [];
  return new Promise((res, rej) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        res(results);
        //   console.log(results);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
      });
  });
}
