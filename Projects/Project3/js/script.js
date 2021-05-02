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
      
    const beachMarker1 = new google.maps.Marker({
      position: { lat: 31.233615556740542, lng: 121.50518352919603 },
      map,
      title: "Shanghai Tower",
    });

    const beachMarker2 = new google.maps.Marker({
      position: { lat: 31.239935179469608, lng: 121.49967069096613 },
      map,
      title: "Oriental Pearl TV Tower",
    });

    const beachMarker3 = new google.maps.Marker({
      position: { lat: 31.238137264632446, lng: 121.50606529235237 },
      map,
      title: "Lujiazui Central Green Space",
    });
  
    const content = '<div><h1>Shanghai Tower</h1><p>Shanghai Tower is a 128-story, 632-meter (2,073 ft)-tall megatall skyscraper in Lujiazui, Pudong, Shanghai.</p><footer>More information can be found at <a href="https://en.wikipedia.org/wiki/Shanghai_Tower">Info';
    const contentWindow = new google.maps.InfoWindow({
        content: content,
    })

    const content = '<div><h1>Oriental Pearl TV Tower</h1><p>Shanghai Oriental Pearl Tower is located in Pudong Park in Lujiazui, Pudong New Area, Shanghai. Surrounded by the Yangpu Bridge in the northeast and the Nanpu Bridge in the southwest. The entire scene is a photographic jewel that excites the imagination and attracts thousands of visitors year-round.</p><footer>More information can be found at <a href="https://www.travelchinaguide.com/attraction/shanghai/oriental_pearl.htm">Info';
    const contentWindow = new google.maps.InfoWindow({
        content: content,
    })

    const content = '<div><h1>Lujiazui Central Green Space</h1><p>A canvas of idyll, it also affords great views of the Jinmao Tower and the World Financial Center, two of Shanghai’s tallest skyscrapers, which impressively dominate its scintillating skyline.</p><footer>More information can be found at <a href="https://cityseeker.com/shanghai/713788-lujiazui-central-green-space">Info</a></footer></div>';
    const contentWindow = new google.maps.InfoWindow({
        content: content,
    })
  
    beachMarker1.addListener("click", () => {
        contentWindow.open(map, beachMarker1);
    })

    beachMarker2.addListener("click", () => {
      contentWindow.open(map, beachMarker2);
    })
  beachMarker3.addListener("click", () => {
    contentWindow.open(map, beachMarker3);
    })
}