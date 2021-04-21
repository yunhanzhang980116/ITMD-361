$(document).ready(function(){
    $('.slider').bxSlider({
      captions: true
    });
  });

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.143802947049814, lng: 121.65778601702799 },
    zoom: 20,
    });
  
    const image = {
        url: "images/disney.jpg",
        scaledSize : new google.maps.Size(50,50)
    };
      
    const beachMarker = new google.maps.Marker({
      position: { lat: 31.143802947049814, lng: 121.65778601702799 },
      map,
      icon: image,
      title: "Shanghai Disney Land",
    });
  
    const content = '<div><h1>Shanghai Disney Land</h1><p>Shanghai Disneyland Park is a theme park located in Chuansha New Town, Pudong, Shanghai, China, that is part of the Shanghai Disney Resort. The park is operated by Disney Parks, Experiences and Products and Shanghai Shendi Group, through a joint venture between The Walt Disney Company and Shendi.</p><footer>More information can be found at <a href="https://en.wikipedia.org/wiki/Shanghai_Disneyland_Park">https://en.wikipedia.org/wiki/Shanghai_Disneyland_Park</a></footer></div>';
    const contentWindow = new google.maps.InfoWindow({
        content: content,
    })
  
    beachMarker.addListener("click", () => {
        contentWindow.open(map, beachMarker);
        beachMarker.setAnimation(google.maps.Animation.BOUNCE);
    })
  }