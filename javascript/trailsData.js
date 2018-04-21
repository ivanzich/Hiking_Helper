// Helper function to create trail record.
function makeTrail(title, imageUrl, distance, elevation, type, difficulty, traffic, url, coordinate, dogs) {
    return {
        title: title,
        imageUrl: imageUrl,
        distance: distance,
        elevation: elevation,
        type: type,
        difficulty: difficulty,
        traffic: traffic,
        dogs: dogs,
        url: url,
        coordinate: coordinate
    };
}

document.ALL_TRAILS = [];

document.ALL_TRAILS.push(makeTrail(
        "Lands End Trail",
        "images/infoImg/LandsEnd.jpg",
        "3.4 miles",
        "534 feet",
        "Loop",
        "Moderate",
        "Heavy",
        "https://www.inside-guide-to-san-francisco-tourism.com/lands-end-san-francisco.html",
        {lat:37.781069, lng: -122.511652}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Mount Sutro Loop",
        "images/infoImg/MountSutro.jpg",
        "1.7 miles",
        "501 feet",
        "Loop",
        "Easy",
        "Light",
        "https://mntsutro.com/hiking/",
        {lat: 37.761820, lng: -122.451990}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Batteries To Bluffs Trail",
        "images/infoImg/BatteriesBluffs.jpg",
        "2.2 miles",
        "449 feet",
        "Loop",
        "Easy",
        "Moderate",
        "https://www.presidio.gov/trails/batteries-to-bluffs-trail/",
        {lat: 37.805171, lng: -122.476790},
        "No"
    ));

document.ALL_TRAILS.push(makeTrail(
        "Fort Funston Trail",
        "images/infoImg/FortFunston.jpg",
        "1.9 miles",
        "213 feet",
        "Loop",
        "Easy",
        "Moderate",
        "http://www.parksconservancy.org/visit/park-sites/fort-funston.html",
        {lat: 37.718825, lng: -122.500632}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Bridge From Baker Beach Trail",
        "images/infoImg/GoldenGateBridge.jpg",
        "6.3",
        "718",
        "Out-&-back",
        "Moderate",
        "Heavy",
        "https://www.alltrails.com/trail/us/california/golden-gate-bridge-from-baker-beach-trail",
        {lat: 37.793165, lng: -122.482961}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Fort Point Trail",
        "images/infoImg/FortPoint.jpg",
        "3.9 miles",
        "793 feet",
        "Out-&-back",
        "Moderate",
        "Heavy",
        "http://www.parksconservancy.org/visit/park-sites/fort-point.html",
        {lat: 37.808658, lng: -122.471722}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Presidio Promenade Trail",
        "images/infoImg/PresidioPromenade.jpg",
        "4.5 miles",
        "423 feet",
        "Loop",
        "Moderate",
        "         ",
        "https://www.presidio.gov/trails/presidio-promenade-trail",
        {lat: 37.797027, lng: -122.447847}
    ));

document.ALL_TRAILS.push(makeTrail(
        "California Coastal Trail",
        "images/infoImg/CaliforniaCoastal.jpg",
        "8.8 miles",
        "1318 feet",
        "Out-&-back",
        "Strenuous",
        "Moderate",
        "https://www.alltrails.com/trail/us/california/california-coastal-trail-lands-end-to-golden-gate-bridge",
        {lat: 37.780487, lng: -122.511746}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Park Trail",
        "images/infoImg/GoldenGatePark.jpg",
        "6.1 miles",
        "351 feet",
        "Loop",
        "Moderate",
        "Heavy",
        "https://goldengatepark.com/",
        {lat: 37.766480, lng: -122.465971}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Moraga Steps",
        "images/infoImg/MoragaSteps.jpg",
        "0.1 miles",
        "36 feet",
        "Out-&-back",
        "Easy",
        "Light",
        "http://www.hiddensf.com/moraga-st-tiled-steps.html",
        {lat: 37.756347, lng: -122.473661}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Mount Davidson Trail",
        "images/infoImg/MountDavidson.jpg",
        "1.5 miles",
        "433",
        "Loop",
        "Easy",
        "Moderate",
        "http://mountdavidsoncross.org/visit/",
        {lat: 37.736804, lng: -122.453934}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Bernal Heights Park Trail",
        "images/infoImg/BernalHeightsPark.jpg",
        "1.0 miles",
        "104 feet",
        "Loop",
        "Easy",
        "     ",
        "http://sfrecpark.org/destination/bernal-heights-park/",
        {lat: 37.742088, lng: -122.415529}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Crissy Fields/Palace Of Fine Arts",
        "images/infoImg/CrissyFieldsPalaceFineArts.jpg",
        "3.3 miles",
        "16 feet",
        "Loop",
        "Easy",
        "Moderate",
        "https://www.alltrails.com/trail/us/california/crissy-field-and-the-palace-of-fine-arts",
        {lat: 37.805308, lng: -122.447355}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Glen Canyon Park Trail",
        "images/infoImg/GlenCanyonPark.jpg",
        "1.9 miles",
        "305 feet",
        "Loop",
        "Easy",
        "Moderate",
        "http://sfrecpark.org/destination/glen-park/",
        {lat: 37.744287, lng: -122.439896}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Bridge",
        "images/infoImg/GoldenGate.jpg",
        "3.7 miles",
        "193 feet",
        "Out-&-back",
        "Easy",
        "Moderate",
        "http://goldengatebridge.org/visitors/",
        {lat: 37.807517, lng: -122.474595},
        "No"
    ));

document.ALL_TRAILS.push(makeTrail(
        "Presidio Loop Trail",
        "images/infoImg/PresidioLoop.jpg",
        "3.6 miles",
        "295 feet",
        "Loop",
        "Easy",
        "     ",
        "https://www.alltrails.com/trail/us/california/presidio-loop-trail",
         {lat: 37.790976, lng: -122.459488}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Philosopher's Way",
        "images/infoImg/PhilosophersWay.jpg",
        "2.3 miles",
        "360 feet",
        "Loop",
        "Easy",
        "Moderate",
        "https://www.sfchronicle.com/outdoors/urbanoutings/article/Philosopher-s-Way-in-McLaren-Park-4580798.php",
        {lat: 37.718049, lng: -122.421338}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Filbert Steps To Telegraph Hill",
        "images/infoImg/FilbertStepsTelegraphHill.jpg",
        "0.5 miles",
        "262 feet",
        "Loop",
        "Easy",
        "Moderate",
        "https://www.sfchronicle.com/outdoors/urbanoutings/article/Philosopher-s-Way-in-McLaren-Park-4580798.php",
        {lat: 37.802138, lng: -122.403434},
        "No"
    ));


document.ALL_TRAILS.push(makeTrail(
        "Stow Lake Trail",
        "images/infoImg/StowLake.jpg",
        "1.1 miles",
        "137 feet",
        "Loop",
        "Easy",
        "Heavy",
        "https://goldengatepark.com/stow-lake.html",
        {lat: 37.770537, lng: -122.477325}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Lake Merced Trail",
        "images/infoImg/LakeMerced.jpg",
        "4.5 miles",
        "127 feet",
        "Loop",
        "Easy",
        "Moderate",
        "http://sfrecpark.org/destination/lake-merced-park/",
        {lat: 37.713034, lng: -122.485970}
    ));
