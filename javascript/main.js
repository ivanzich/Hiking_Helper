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

function makeContentStringFromTrailData(trail) {

    var htmlString =  '<table><tr><td><img style="float: left; width="180px" height="180px;" src="'
    + trail.imageUrl + '" alt="'+ trail.title + '"></td><td align="center">';
    htmlString += '<h1>' + trail.title + '</h1>';
    htmlString +=     '<ul style="font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>' + trail.distance + '</strong></li> \
            <li>Elevation: <strong>' + trail.elevation + '</strong></li> \
            <li>Type: <strong>' + trail.type + '</strong></li> \
            <li>Difficulty: <strong>' + trail.difficulty + '</strong></li> \
            <li>Traffic: <strong>' + trail.traffic + '</strong></li>';
    if (trail.dogs !== undefined) {
        htmlString += '<li>Dogs allowed: <strong>' + trail.dogs + '</strong></li>';
    }
    htmlString += "</ul>";
    htmlString += '<a href="' + trail.url + '" target="_blank" style="font-size:100%;">Learn more about ' + trail.title + '</a>';

    htmlString += "</td></tr></table>";
    return htmlString;
}


function makeMarker(map, trailData) {
   var infowindow = new google.maps.InfoWindow({
     content: makeContentStringFromTrailData(trailData)
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
