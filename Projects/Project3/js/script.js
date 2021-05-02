$(document).ready(function(){
    $('.slider').bxSlider({
      captions: true
    });
  });

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.236210751446855, lng: 121.50935901943585 },
    zoom: 15,
    });
  
    const image = {
        url: "images/Tower.jpg",
        scaledSize : new google.maps.Size(20,20)
    };
      
    const beachMarker = new google.maps.Marker({
      position: { lat: 31.233615556740542, lng: 121.50518352919603 },
      map,
      icon: image,
      title: "Shanghai Tower",
    });
  
    const content = '<div><h1>Shanghai Tower</h1><p>Shanghai Tower is a 128-story, 632-meter (2,073 ft)-tall megatall skyscraper in Lujiazui, Pudong, Shanghai.</p><footer>More information can be found at <a href="https://en.wikipedia.org/wiki/Shanghai_Tower">https://en.wikipedia.org/wiki/Shanghai_Tower</a></footer></div>';
    const contentWindow = new google.maps.InfoWindow({
        content: content,
    })
  
    beachMarker.addListener("click", () => {
        contentWindow.open(map, beachMarker);
        beachMarker.setAnimation(google.maps.Animation.BOUNCE);
    })
  }