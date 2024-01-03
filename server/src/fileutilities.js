import path from "path";
import fs from "fs";

function filepath(folderPath, fileName) {
  const filePath = path.join(folderPath, fileName);
  return filePath;
}

function filewrite(filePath, code) {
  fs.writeFile(filePath, code, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file created successfully at", filePath);
  });
}

export { filepath, filewrite };
