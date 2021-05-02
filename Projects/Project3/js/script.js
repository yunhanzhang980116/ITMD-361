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
      
    const beachMarker = new google.maps.Marker({
      position: { lat: 31.233615556740542, lng: 121.50518352919603 },
      map,
      title: "Shanghai Tower",
    });

    const beachMarker2 = new google.maps.Marker({
      position: { lat: 31.240272102137343, lng: 121.50087938662085 },
      map,
      title: "Oriental Pearl TV Tower",
    });

    const beachMarker3 = new google.maps.Marker({
      position: { lat: 31.237087246352342, lng: 121.50209392762672 },
      map,
      title: "Shanghai Guojin Center",
    });
  
    const content = '<div><h1>Shanghai Tower</h1><p>Shanghai Tower is a 128-story, 632-meter (2,073 ft)-tall megatall skyscraper in Lujiazui, Pudong, Shanghai.</p><footer>More information can be found at <a href="https://en.wikipedia.org/wiki/Shanghai_Tower">https://en.wikipedia.org/wiki/Shanghai_Tower</a></footer></div>';
    const contentWindow = new google.maps.InfoWindow({
        content: content,
    })
  
    beachMarker.addListener("click", () => {
        contentWindow.open(map, beachMarker);
    })
  }