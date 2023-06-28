console.log("Hello from script.js!");

const previewImages = (event) => {
  const previewContainer = document.getElementById("imagePreviews");
  previewContainer.innerHTML = ""; // Clear the container before adding new images

  const files = event.target.files;

  // Check the number of selected files
  if (files.length > 3) {
    // Display an error message or take appropriate action
    alert("Please select a maximum of three files.");
    return;
  }

  for (const file of files) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = document.createElement("img");
      image.src = event.target.result;

      // Apply styles to the previewed image
      image.style.maxWidth = "100%";
      image.style.maxHeight = "100%";
      image.style.objectFit = "contain";

      previewContainer.appendChild(image);
    };

    reader.readAsDataURL(file);
  }
};

const validateForm = (event) => {
  const fileInput = document.getElementById("imageInput");
  if (!fileInput.files || fileInput.files.length === 0) {
    event.preventDefault(); // Prevent form submission
    alert("Please upload at least one file."); // Show an error message
  }
};

document.getElementById("uploadReq").addEventListener("submit", validateForm);

const noscriptElement = document.querySelector("noscript");
noscriptElement.style.display = "none";
