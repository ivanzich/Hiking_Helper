var map = undefined;

var markers = [];    // array of markers

// sets all, but current marker to null so that only 1 marker is shown
// center of map is shown at marker's position
function switchToMarker(markerIndex) {
    for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
     }
     markers[markerIndex].setMap(map);

     map.setCenter(markers[markerIndex].position);
}

function makeMarker(map, trailData) {
   var infowindow = new google.maps.InfoWindow({
     content: trailData.contentString
   });

   var marker = new google.maps.Marker({
     position: trailData.coordinate,
     title: trailData.title
   });
   marker.addListener('click', function() {
     infowindow.open(map, marker);
   });

   return marker;
}

function initMap() {
    console.log("Initializing map...");

    console.log(document.ALL_TRAILS);

      // instantiate Google Map widget.
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14
    });

  // create all the markers; placed in separate file (trailsData)
  for (var i = 0; i < document.ALL_TRAILS.length; i++) {
      markers.push(
          makeMarker(
              map,
              document.ALL_TRAILS[i]
          )
      );
  }

  // generate links to hikes dynamically.
  var trailLinksHtml = '<li class="n">Top Hikes</li>';
  var trailLinksDomElement = document.getElementById('trailLinks');

  for (var i = 0; i < document.ALL_TRAILS.length; i++) {
      var trailData = document.ALL_TRAILS[i];
      // create html for single link.  We pass it call back with the right marker index because we are in inner loop and we know the right index.
      var linkHtml = '<li class="r"><a onClick="switchToMarker(' + i + ');">' + (i+1) + '. ' + trailData.title + '</a></li>';

      trailLinksHtml += linkHtml;
  }

  trailLinksDomElement.innerHTML = trailLinksHtml;

     switchToMarker(9);
}