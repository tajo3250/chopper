// Not Tested Throughly, Based was made by Gemini. Should work.

const dropZone = document.getElementById('drop-zone');
const imageInput = document.getElementById('image-input');
const outputTopCanvas = document.getElementById('output-top');
const outputBottomCanvas = document.getElementById('output-bottom');

outputTopCanvas.width = 1024;
outputTopCanvas.height = 1024;

outputBottomCanvas.width = 1024;
outputBottomCanvas.height = 1024;

window.addEventListener('dragover', (event) => {
  event.preventDefault();
});

window.addEventListener('drop', (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const ctxTop = outputTopCanvas.getContext('2d');
      const ctxBottom = outputBottomCanvas.getContext('2d');
      ctxTop.drawImage(img, 0, 0, img.width, img.height/2, 0, 0, img.height/2, img.width);
      ctxBottom.drawImage(img, 0, img.height/2, img.width, img.height/2, 0, 0, img.width, img.height/2);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

dropZone.addEventListener('click', () => {
  imageInput.click();
});

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const ctxTop = outputTopCanvas.getContext('2d');
      const ctxBottom = outputBottomCanvas.getContext('2d');
      ctxTop.drawImage(img, 0, 0, img.width, img.height/2, 0, 0, img.height/2, img.width);
      ctxBottom.drawImage(img, 0, img.height/2, img.width, img.height/2, 0, 0, img.width, img.height/2);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});
