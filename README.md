# San Francisco Hiking Helper App

An API based hiking desktop web app that helps users to find San Francisco hiking locations 

[View it live](https://hills.ccsf.edu/~igolovko/hiking_tips/)

#Technologies Used
* HTML
* CSS
* Javascript
* Jquery
* Google Maps API
* Weather API

## Features
On the top of the main page and user can see banner and navigation bar with buttons 'Weather', 'Comments', 
'Photo', 'Hiking_tips'. On the left side user can see another navigation bar with 20 most popular
San Francisco hikes. On the right side user can see the map by default with the location
of 'Moraga Steps' hike.

* Displaying the most famous hikes on a map along with the pins, descriptions and images. 
(Clicking on the name of hike in the navigation bar will be automatically redirected to the map with pin.
Clicking on pin will show user description of hike with images and links to the external web pages.).

* Displaying weather forecast. 
(Clicking on button 'Weather' will be scrolled down from main page to the forecast page, where
user can put valid zip code or city name with state (San Francisco, CA) and find forecast for 5 days.
If user put wrong zip-code or city-name or state it display error message).

* Displaying users comments and images.
(Clicking on button 'Comments' will be redirected to the Comments page, where user can add comments 
or upload images. Added Comments automatically will be uploaded to the page. Added Images can be 
uploaded on the page only after Admin of App will approve it. Only Admin can delete comments 
and images. User can upload images with next format: png, jpg, gif, jpeg. 
In the right top corner user can click button "Go back" to return to main page).

* Displaying Photo Gallery
(Clicking on button "Photo" will be redirected to the Photo Gallery page, where user can see photo from
different hiking routes. If user click on photo it will be displayed bigger photo.  In the right lower 
corner of Photo Gallery page user can find button "Go back" to return to main page.)

* Displaying Hiking Tips
(Clicking on button 'Hiking tips' will be scrolled down from main page to the Hiking Tips page, where user
can found a lot of useful information about: hiking tips, different types of hiking, benefits of hiking,
how user can protect yourself from dangerous local plants, animals, insects. Also this page contains 
a lot of useful links, which will redirect user to other web pages and let user to find more useful information).

## Resources
The following libraries, APIs and datasets  were used to make this application:</p>

* This application uses the
* https://cloud.google.com/maps-platform for getting mapapis.
* http://www.htmlcommentbox.com/ for getting comment box and possibility for uploading images
* https://www.wunderground.com/ for getting weather API.

