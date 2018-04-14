// Helper function to create trail record.
function makeTrail(title, contentString, coordinate) {
    return {
        title: title,
        contentString: contentString,
        coordinate: coordinate
    };
}

document.ALL_TRAILS = [];

document.ALL_TRAILS.push(makeTrail("Lands End Trail",
'<img style="float: left; margin-right: 10px;" src="images/infoImg/LandsEnd.jpg" width="180" height="200" alt="LandsEnd">'+'<h1>Lands End Trail</h1>'+
'<p>Lands End Trail is a 3.4 mile heavily trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash. <br><br> <a href="https://www.alltrails.com/trail/us/california/walk-across-the-golden-gate-bridge">'+
'https://www.alltrails.com/trail/us/california/walk-across-the-golden-gate-bridge</a></p>',
{lat:37.781069, lng: -122.511652}));

document.ALL_TRAILS.push(makeTrail(
        "Mount Sutro Loop",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/MountSutro.jpg" width="180" height="200" alt="MountSutro">'+'<h1>Mount Sutro Loop</h1>'+
          '<p>Mount Sutro Loop is a 1.7 mile lightly trafficked loop trail located near San Francisco, California that features a great forest setting and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.<br><br> <a href="https://www.alltrails.com/trail/us/california/mount-sutro-loop">'+
          'https://www.alltrails.com/trail/us/california/mount-sutro-loop</a></p>',
          {lat: 37.761820, lng: -122.451990}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Batteries To Bluffs Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/BatteriesBluffs.jpg" width="180" height="200" alt="BatteriesBluffs">'+'<h1>Batteries To Bluffs Trail</h1>'+
          '<p>Batteries to Bluffs Trail is a 2.3 mile moderately trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round.<br><br> <a href="https://www.alltrails.com/trail/us/california/batteries-to-bluffs-trail?ref=result-card">'+
          'https://www.alltrails.com/trail/us/california/batteries-to-bluffs-trail?ref=result-card</a></p>',
          {lat: 37.805171, lng: -122.476790}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Fort Funston Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/FortFunston.jpg" width="180" height="200" alt="FortFunston">'+'<h1>Fort Funston Trail</h1>'+
          '<p>Fort Funston Trail is a 1.9 mile moderately trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and birding and is accessible year-round. Dogs are also able to use this trail.<br><br> <a href="https://www.alltrails.com/trail/us/california/fort-funston-trail">'+
          'https://www.alltrails.com/trail/us/california/fort-funston-trail</a></p>',
          {lat: 37.718825, lng: -122.500632}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Bridge Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/GoldenGateBridge.jpg" width="180" height="200" alt="GoldenGateBridge">'+'<h1>Golden Gate Bridge</h1>'+
           '<p>The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the American city of San Francisco, California – the northern tip of the San Francisco Peninsula – to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. <br><br> <a href="https://www.alltrails.com/trail/us/california/walk-across-the-golden-gate-bridge">'+
           'https://www.alltrails.com/trail/us/california/walk-across-the-golden-gate-bridge</a></p>',
          {lat: 37.793165, lng: -122.482961}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Fort Point Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/FortPoint.jpg" width="180" height="200" alt="FortPoint">'+'<h1>Fort Point Trail</h1>'+
          '<p>Fort Point - Baker Beach Coast Trail is a 3.9 mile heavily trafficked out and back trail located near San Francisco, California and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.<br><br> <a href="https://www.alltrails.com/trail/us/california/fort-point-baker-beach-coast-trail">'+
          'https://www.alltrails.com/trail/us/california/fort-point-baker-beach-coast-trail</a></p>',
          {lat: 37.808658, lng: -122.471722}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Presidio Promenade Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/PresidioPromenade.jpg" width="180" height="200" alt="PresidioPromenade">'+'<h1>Presidio Promenade Trail</h1>'+
          '<p>Presidio Promenade Trail is a 4.5 mile loop trail located near San Francisco, California that offers scenic views. The trail is rated as moderate  offers a number of activity options. Dogs are also able to use this trail but must be kept on leash.<br><br> <a href="https://www.alltrails.com/trail/us/california/presidio-promenade-trail">'+
          'https://www.alltrails.com/trail/us/california/presidio-promenade-trail</a></p>',
          {lat: 37.797027, lng: -122.447847}
    ));

document.ALL_TRAILS.push(makeTrail(
        "California Coastal Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/CaliforniaCoastal.jpg" width="180" height="200" alt="CaliforniaCoastal">'+'<h1>California Coastal Trail</h1>'+
          '<p>California Coastal Trail: Lands End to Golden Gate Bridge is a 9.1 mile moderately trafficked out and back trail located near San Francisco, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.<br><br> <a href="https://www.alltrails.com/trail/us/california/california-coastal-trail-lands-end-to-golden-gate-bridge">'+
          'https://www.alltrails.com/trail/us/california/california-coastal-trail-lands-end-to-golden-gate-bridge</a></p>',
          {lat: 37.780487, lng: -122.511746}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Moraga Steps",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/MoragaSteps.jpg" width="180" height="200" alt="MoragaSteps">'+'<h1>Moraga Steps</h1>'+
          '<p>Moraga Steps is a 0.1 mile lightly trafficked out and back trail located near San Francisco, California that offers scenic views and is good for all skill levels. The trail is primarily used for hiking and walking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.<br><br> <a href="https://www.alltrails.com/trail/us/california/moraga-steps">'+
          'https://www.alltrails.com/trail/us/california/moraga-steps</a></p>',
          {lat: 37.756347, lng: -122.473661}
    ));

document.ALL_TRAILS.push(makeTrail(
        "Golden Gate Park Trail",
        '<img style="float: left; margin-right: 10px;" src="images/infoImg/GoldenGatePark.jpg" width="180" height="200" alt="GoldenGatePark">'+'<h1>Golden Gate Park</h1>'+
          '<p>Golden Gate Park, located in San Francisco, California, United States, is a large urban park consisting of 1,017 acres (412 ha) of public grounds. It is administered by the San Francisco Recreation & Parks Department, which began in 1871 to oversee the development of Golden Gate Park. Configured as a rectangle, it is similar in shape but 20 percent larger than Central Park in New York, to which it is often compared. It is over three miles (4.8 km) long east to west, and about half a mile (0.8 km) north to south.<br><br> <a href="https://www.alltrails.com/parks/us/california/golden-gate-park">'+
          'https://www.alltrails.com/parks/us/california/golden-gate-park</a></p>',
          {lat: 37.766480, lng: -122.465971}
    ));