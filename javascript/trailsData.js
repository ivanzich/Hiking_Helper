// Helper function to create trail record.
function makeTrail(title, contentString, coordinate) {
    return {
        title: title,
        contentString: contentString,
        coordinate: coordinate
    };
}

document.ALL_TRAILS = [];

document.ALL_TRAILS.push(makeTrail(
        "Lands End Trail",
        '<img style="float: left; width="180px" height="180;" src="images/infoImg/LandsEnd.jpg" alt="LandsEnd"> \
        <h1>Lands End Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>3.4 miles</strong></li> \
            <li>Elevation: <strong>534 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Moderate</strong></li> \
            <li>Traffic: <strong>Heavy</strong></li> \
        </ul> \
        <a href="https://www.inside-guide-to-san-francisco-tourism.com/lands-end-san-francisco.html" target="_blank" style="font-size:100%; float: right;">Learn more about Lands End Trail</a>',
        {lat:37.781069, lng: -122.511652}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Mount Sutro Loop",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/MountSutro.jpg" alt="MountSutro"> \
        <h1>Mount Sutro Loop</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>1.7 miles</strong></li> \
            <li>Elevation: <strong>501 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Light</strong></li> \
        </ul> \
        <a href="https://mntsutro.com/hiking/" target="_blank" style="font-size:100%; float: right;">Learn more about Mount Sutro Loop</a>',
        {lat: 37.761820, lng: -122.451990}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Batteries To Bluffs Trail",
        '<img style="float: left; width="200px" height="190px;" src="images/infoImg/BatteriesBluffs.jpg" alt="BatteriesBluffs"> \
        <h1>Batteries To Bluffs Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>2.2 miles</strong></li> \
            <li>Elevation: <strong>449 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
            <li>Dogs allowed: <strong>No</strong></li> \
        </ul> \
        <a href="https://www.presidio.gov/trails/batteries-to-bluffs-trail/" target="_blank" style="font-size:100%; float: right;">Learn more about Batteries To Bluffs Trail</a>',
        {lat: 37.805171, lng: -122.476790}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Fort Funston Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/FortFunston.jpg" alt="FortFunston"> \
        <h1>Fort Funston Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>1.9 miles</strong></li> \
            <li>Elevation: <strong>213 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="http://www.parksconservancy.org/visit/park-sites/fort-funston.html" target="_blank" style="font-size:100%; float: right;">Learn more about Fort Funston Trail</a>',
        {lat: 37.718825, lng: -122.500632}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Bridge From Baker Beach Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/GoldenGateBridge.jpg" alt="GoldenGateBridge"> \
        <h1>Golden Gate Bridge Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>6.3 miles</strong></li> \
            <li>Elevation: <strong>718 feet</strong></li> \
            <li>Type: <strong>Out-&-back</strong></li> \
            <li>Difficulty: <strong>Moderate</strong></li> \
            <li>Traffic: <strong>Heavy</strong></li> \
        </ul> \
        <a href="https://www.alltrails.com/trail/us/california/golden-gate-bridge-from-baker-beach-trail" target="_blank" style="font-size:100%; float: right;">Learn more about Golden Gate Bridge Trail</a>',
        {lat: 37.793165, lng: -122.482961}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Fort Point Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/FortPoint.jpg" alt="FortPoint"> \
        <h1>Fort Point Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>3.9 miles</strong></li> \
            <li>Elevation: <strong>793 feet</strong></li> \
            <li>Type: <strong>Out-&-back</strong></li> \
            <li>Difficulty: <strong>Moderate</strong></li> \
            <li>Traffic: <strong>Heavy</strong></li> \
        </ul> \
        <a href="http://www.parksconservancy.org/visit/park-sites/fort-point.html" target="_blank" style="font-size:100%; float: right;">Learn more about Fort Point Trail</a>',
        {lat: 37.808658, lng: -122.471722}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Presidio Promenade Trail",
        '<img style="float: left; width="100px" height="150px;" src="images/infoImg/PresidioPromenade.jpg" alt="PresidioPromenade"> \
        <h1>Presidio Promenade Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>4.5 miles</strong></li> \
            <li>Elevation: <strong>423 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Moderate</strong></li> \
        </ul> \
        <a href="https://www.presidio.gov/trails/presidio-promenade-trail" target="_blank" style="font-size:100%; float: right;">Learn more about Presidio Promenade Trail</a>',
        {lat: 37.797027, lng: -122.447847}
    ));

document.ALL_TRAILS.push(makeTrail(
        "California Coastal Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/CaliforniaCoastal.jpg" alt="CaliforniaCoastal"> \
        <h1>California Coastal Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>8.8 miles</strong></li> \
            <li>Elevation: <strong>1318 feet</strong></li> \
            <li>Type: <strong>Out-&-back</strong></li> \
            <li>Difficulty: <strong>Strenuous</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="https://www.alltrails.com/trail/us/california/california-coastal-trail-lands-end-to-golden-gate-bridge" target="_blank" style="font-size:100%; float: right;">Learn more about California Coastal Trail</a>',
        {lat: 37.780487, lng: -122.511746}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Park Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/GoldenGatePark.jpg" alt="GoldenGatePark"> \
        <h1>Golden Gate Park Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>6.1 miles</strong></li> \
            <li>Elevation: <strong>351 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Moderate</strong></li> \
            <li>Traffic: <strong>Heavy</strong></li> \
        </ul> \
        <a href="https://goldengatepark.com/" target="_blank" style="font-size:100%; float: right;">Learn more about Golden Gate Park Trail</a>',
        {lat: 37.766480, lng: -122.465971}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Moraga Steps",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/MoragaSteps.jpg" alt="MoragaSteps"> \
        <h1>Moraga Steps</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>0.1 miles</strong></li> \
            <li>Elevation: <strong>36 feet</strong></li> \
            <li>Type: <strong>Out-&-back</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Light</strong></li> \
        </ul> \
        <a href="http://www.hiddensf.com/moraga-st-tiled-steps.html" target="_blank" style="font-size:100%; float: right;">Learn more about Moraga Steps</a>',
        {lat: 37.756347, lng: -122.473661}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Mount Davidson Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/MountDavidson.jpg" alt="MountDavidson"> \
        <h1>Mount Davidson Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>1.5 miles</strong></li> \
            <li>Elevation: <strong>433 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="http://mountdavidsoncross.org/visit/" target="_blank" style="font-size:100%; float: right;">Learn more about Mount Davidson Trail</a>',
        {lat: 37.736804, lng: -122.453934}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Bernal Heights Park Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/BernalHeightsPark.jpg" alt="BernalHeightsPark"> \
        <h1>Bernal Heights Park Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>1.0 miles</strong></li> \
            <li>Elevation: <strong>104 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
        </ul> \
        <a href="http://sfrecpark.org/destination/bernal-heights-park/" target="_blank" style="font-size:100%; float: right;">Learn more about Bernal Heights Park Trail</a>',
        {lat: 37.742088, lng: -122.415529}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Crissy Fields/Palace Of Fine Arts",
        '<img style="float: left; width="20px" height="200px;" src="images/infoImg/CrissyFieldsPalaceFineArts.jpg" alt="CrissyFieldsPalaceFineArts"> \
        <h1>Crissy Fields/Palace Of Fine Arts</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>3.3 miles</strong></li> \
            <li>Elevation: <strong>16 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="https://www.alltrails.com/trail/us/california/crissy-field-and-the-palace-of-fine-arts" target="_blank" style="font-size:100%; float: right;">Learn more about Crissy Fields/Palace Of Fine Artsl</a>',
        {lat: 37.805308, lng: -122.447355}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Glen Canyon Park Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/GlenCanyonPark.jpg" alt="GlenCanyonPark"> \
        <h1>Glen Canyon Park Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>1.9 miles</strong></li> \
            <li>Elevation: <strong>305 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="http://sfrecpark.org/destination/glen-park/" target="_blank" style="font-size:100%; float: right;">Learn more about Glen Canyon Park Trail</a>',
        {lat: 37.744287, lng: -122.439896}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Bridge",
        '<img style="float: left; width="200px" height="190px;" src="images/infoImg/GoldenGate.jpg" alt="GoldenGate"> \
        <h1>Golden Gate Bridge</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>3.7 miles</strong></li> \
            <li>Elevation: <strong>193 feet</strong></li> \
            <li>Type: <strong>Out-&-back</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
            <li>Dogs allowed: <strong>No</strong></li> \
        </ul> \
        <a href="http://goldengatebridge.org/visitors/" target="_blank" style="font-size:100%; float: right;">Learn more about Golden Gate Bridge</a>',
        {lat: 37.807517, lng: -122.474595}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Presidio Loop Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/PresidioLoop.jpg" alt="PresidioLoop"> \
        <h1>Presidio Loop Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>3.6 miles</strong></li> \
            <li>Elevation: <strong>295 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
        </ul> \
        <a href="https://www.alltrails.com/trail/us/california/presidio-loop-trail" target="_blank" style="font-size:100%; float: right;">Learn more about Presidio Loop Trail</a>',
         {lat: 37.790976, lng:-122.459488}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Philosopher's Way",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/PhilosophersWay.jpg" alt="PhilosophersWay"> \
        <h1>Philosopher\'s Way</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>2.3 miles</strong></li> \
            <li>Elevation: <strong>360 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="https://www.sfchronicle.com/outdoors/urbanoutings/article/Philosopher-s-Way-in-McLaren-Park-4580798.php" target="_blank" style="font-size:100%; float: right;">Learn more about Philosopher\'s Way</a>',
        {lat: 37.718020, lng: -122.421341}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Filbert Steps To Telegraph Hill",
        '<img style="float: left; width="200px" height="190px;" src="images/infoImg/FilbertStepsTelegraphHill.jpg" alt="FilbertStepsTelegraphHill"> \
        <h1>Filbert Steps To Telegraph Hill</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>0.5 miles</strong></li> \
            <li>Elevation: <strong>262 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
            <li>Dogs allowed: <strong>No</strong></li> \
        </ul> \
        <a href="https://www.sfchronicle.com/outdoors/urbanoutings/article/Philosopher-s-Way-in-McLaren-Park-4580798.php" target="_blank" style="font-size:100%; float: right;">Learn more about Filbert Steps To Telegraph Hill</a>',
        {lat: 37.802138, lng: -122.403434}
    ));


document.ALL_TRAILS.push(makeTrail(
        "Stow Lake Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/StowLake.jpg" alt="StowLake"> \
        <h1>Stow Lake Trail</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>1.1 miles</strong></li> \
            <li>Elevation: <strong>137 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Heavy</strong></li> \
        </ul> \
        <a href="https://goldengatepark.com/stow-lake.html" target="_blank" style="font-size:100%; float: right;">Learn more about Stow Lake Trail</a>',
        {lat: 37.770537, lng: -122.477325}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Lake Merced Trail",
        '<img style="float: left; width="180px" height="180px;" src="images/infoImg/LakeMerced.jpg" alt="LakeMerced"> \
        <h1>Lake Merced Traill</h1> \
        <ul style="float: top left; min-width: 450px; font-size:15px; list-style-type:none"> \
            <li>Distance: <strong>4.5 miles</strong></li> \
            <li>Elevation: <strong>127 feet</strong></li> \
            <li>Type: <strong>Loop</strong></li> \
            <li>Difficulty: <strong>Easy</strong></li> \
            <li>Traffic: <strong>Moderate</strong></li> \
        </ul> \
        <a href="http://sfrecpark.org/destination/lake-merced-park/" target="_blank" style="font-size:100%; float: right;">Learn more about Lake Merced Traill</a>',
        {lat: 37.713034, lng: -122.485970}
    ));
