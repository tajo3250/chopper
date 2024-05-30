const dropZone = document.getElementById('drop-zone');
const imageInput = document.getElementById('image-input');
const outputCanvas = document.getElementById('output-canvas');

outputCanvas.width = 1024;
outputCanvas.height = 1024;

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.style.backgroundColor = '#eee';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.backgroundColor = null;
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      if (img.width !== 1024 || img.height !== 2048) {
        alert('Image must be 1024x2048!');
        return;
      }

      const ctx = outputCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 1024, 1024); // Top half
      ctx.drawImage(img, 0, 1024, 1024, 1024); // Bottom half
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
  dropZone.style.backgroundColor = null;
});

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      if (img.width !== 1024 || img.height !== 2048) {
        alert('Image must be 1024x2048!');
        return;
      }

      const ctx = outputCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 1024, 1024); // Top half
      ctx.drawImage(img, 0, 1024, 1024, 1024); // Bottom half
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});
