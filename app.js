import { fileService } from "./services/fileService.js";
import { imgService } from "./services/imgService.js";
// const CSVpath = "./data/rare-animals.csv";

// fileService.loadCSV(CSVpath);
fileService
  .loadCSV("./data/rare-animals.csv")
  .then((animals) => {
    console.log(animals);
    animals.forEach((animal) => {
      imgService.suggestImgs(animal.name).then((res) => console.log(res));
    });
    // TODO: for every animal you shoud call the imgService.suggestImgs,
    // when you get back a url in the response, store it in the animal object
    // then return a promise that resolved when ALL img urls are set.
  })
  .then((animalsWithImgUrls) => {
    // TODO: For each animal, for each of his imgUrl, download the file
    // then return a promise that resolved when ALL imgs were downloaded.
  })
  .then((animalsWithImgs) => {
    // TODO: Use the pdfService to build the animals PDF
  });
