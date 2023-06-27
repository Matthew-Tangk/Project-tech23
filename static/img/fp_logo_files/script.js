console.log("I farted");

var button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("I pooped");
});

function previewImage(event) {
  const input = event.target;
  const preview = document.getElementById("imagePreview");
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "#";
  }
}
