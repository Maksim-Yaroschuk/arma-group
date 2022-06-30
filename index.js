    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });

let inputFiles    
const myFile = document.querySelector("#myFile")
    
myFile.addEventListener('change', () => {
  inputFiles = myFile.files
  console.log(inputFiles)
  for (const inputFile of inputFiles) {
    console.dir(inputFile.name)
    console.dir(inputFile.size)
  }
})
