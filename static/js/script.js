console.log("I farted");

function previewImages(event) {
  var previewContainer = document.getElementById("imagePreviews");
  previewContainer.innerHTML = ""; // Clear the container before adding new images

  var files = event.target.files;

  // Check the number of selected files
  if (files.length > 3) {
    // Display an error message or take appropriate action
    alert("Please select a maximum of three files.");
    return;
  }

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var reader = new FileReader();

    reader.onload = function (event) {
      var image = document.createElement("img");
      image.src = event.target.result;

      // Apply styles to the previewed image
      image.style.maxWidth = "100%";
      image.style.maxHeight = "100%";
      image.style.objectFit = "contain";

      previewContainer.appendChild(image);
    };

    reader.readAsDataURL(file);
  }
}

function validateForm(event) {
  const fileInput = document.getElementById("imageInput");
  if (!fileInput.files || fileInput.files.length === 0) {
    event.preventDefault(); // Prevent form submission
    alert("Please upload at least one file."); // Show an error message
  }
}

document.getElementById("uploadReq").addEventListener("submit", validateForm);

var noscriptElement = document.querySelector("noscript");
noscriptElement.style.display = "none";
