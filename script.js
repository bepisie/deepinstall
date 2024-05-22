// script.js
const installButton = document.querySelector('.install-button');

installButton.addEventListener('click', () => {
  // Get the file path and name
  const filePath = 'path/to/your/file.txt';
  const fileName = 'your-file.txt';

  // Create a new anchor tag to download the file
  const anchor = document.createElement('a');
  anchor.href = filePath;
  anchor.download = fileName;
  anchor.click();

  // Remove the anchor tag after download
  anchor.parentNode.removeChild(anchor);
});
