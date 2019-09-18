const fs = require("fs");

function getFileNames() {
    fs.readdir("./images", (error, files) => {
        if (error) {
            console.log(error);
            return
        }
        files.forEach((file) => {
            const stat = fs.statSync(`./images/${file}`);
            if (stat.isDirectory()) {
                console.log(`${file} is a directory`);
            }
        })
    })
}

function renameFile(filePath) {
    // extract file name (everything after the last slash)
    const indexOfFileName = filePath.lastIndexOf("/") + 1;
    const fileName = filePath.slice(indexOfFileName);
    console.log(fileName);
    // replace name with any spaces and create new file path
    
    // fs.rename(oldpath, newpath)
}

renameFile("images/KSU/bobbleheadcomp v2.jpg");

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }