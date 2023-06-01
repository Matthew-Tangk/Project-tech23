const handleUpload = () => {
  const fileInput = document.getElementById("fileInput");
  const files = fileInput.files;
  const fileContentContainer = document.getElementById("fileContentContainer");
  const notification = document.getElementById("notification");

  // Iterate over the selected files
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    // Set up an event handler for when the file is loaded
    reader.onload = (e) => {
      const fileContent = e.target.result;

      // Create a new <p> element to display the file content
      const fileContentElement = document.createElement("p");
      fileContentElement.textContent = fileContent;

      // Append the file content element to the container
      fileContentContainer.appendChild(fileContentElement);
    };

    // Read the file as text or any other desired format
    reader.readAsText(file);
  }

  notification.textContent = "You have successfully uploaded your files.";
};

// Add event listener to the file input element
document.getElementById("fileInput").addEventListener("change", handleUpload);

document.getElementById("uploadButton").addEventListener("click", handleUpload);

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("uploadButton")
    .addEventListener("click", function () {
      document.getElementById("fileInput").click();
    });
});
