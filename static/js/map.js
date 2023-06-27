const scriptElement = document.createElement("script");
scriptElement.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqwdYml-2i0y-MuvE-vcQzCUBdYi9OOjU&callback=initMap";
scriptElement.async = true;
scriptElement.defer = true;

document.body.appendChild(scriptElement);

function initMap() {
  let ziggo = { lat: 52.313, lng: 4.937 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: ziggo,
  });
  let marker = new google.maps.Marker({ position: ziggo, map: map });
}
