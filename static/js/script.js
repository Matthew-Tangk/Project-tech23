const handleUpload = () => {
  const fileInput = document.getElementById("fileInput");
  const files = fileInput.files;
  const fileContentContainer = document.getElementById("fileContentContainer");
  const notification = document.getElementById("notification");

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;

      const fileContentElement = document.createElement("p");
      fileContentElement.textContent = fileContent;

      fileContentContainer.appendChild(fileContentElement);
    };

    reader.readAsText(file);
  }

  notification.textContent = "You have successfully uploaded your files.";
};

document.getElementById("fileInput").addEventListener("change", handleUpload);

document.getElementById("uploadButton").addEventListener("click", handleUpload);

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("uploadButton")
    .addEventListener("click", function () {
      document.getElementById("fileInput").click();
    });
});
