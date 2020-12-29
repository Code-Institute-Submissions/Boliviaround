
/** Credit : Code Institution Lesson
 & Stack Overflow : https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button/28500306 */

function initialize () {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: -19.049646998534516, 
                    lng: -65.25710060607993
                }
            });

            var labels = "";

            var locations = [
                {lat: -19.049709522350465, lng: -65.25707751901497},
                {lat: -16.508815298728535, lng: -68.12766819648881},
                {lat: -17.785663602468507, lng: -63.18015974355208},
                {lat: -20.46549357660066, lng: -66.82550718586637},
                {lat: -18.931503681448095, lng: -66.80861746097331},
                {lat:-16.203946136300626, lng: -67.74479098872325},
                {lat: -16.54446657581687, lng: -68.08657109325372},
                {lat: -21.533566428947406, lng: -64.73380287177643},
                {lat: -19.045382803078933, lng: -65.25829835276119},
                ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        

  google.maps.event.addDomListener(document.getElementById('map'), 'click', function () {
  
});


function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function ()
{
    $("#btn-food").on('click', function ()
    {
	  newLocation(-16.5445410118336, -68.08655004495911);
	});
  
	$("#btn-adventure").on('click', function ()
    {
	  newLocation(-20.46549357660066, -66.82550718586637);
	});
  
    $("#btn-party").on('click', function ()
    {
	  newLocation(-19.049709522350465, -65.25707751901497);
    });

    /**Adventures */
    
    $(".btn-salar").on('click', function ()
    {
	  newLocation(-20.46549357660066, -66.82550718586637);
    });

    $(".btn-eduardo").on('click', function ()
    {
	  newLocation(-18.931503681448095, -66.80861746097331);
    });

    $(".btn-yungaz").on('click', function ()
    {
	  newLocation(-16.203946136300626, -67.74479098872325);
    });
    
    /**Food */

    $(".btn-choriceria").on('click', function ()
    {
	  newLocation(-19.045374104018236, -65.25827944562785);
    });

    $(".btn-gustu").on('click', function ()
    {
	  newLocation(-16.5445410118336, -68.08655004495911);
    });

    $(".btn-gattopardo").on('click', function ()
    {
	  newLocation(-21.533566428947406, -64.73380287177643);
    });

    /**Party */

    $(".btn-kultur").on('click', function ()
    {
	  newLocation(-19.049709522350465, -65.25707751901497);
    });

    $(".btn-bymz").on('click', function ()
    {
	  newLocation(-17.785663602468507, -63.18015974355208);
    });

    $(".btn-diesel").on('click', function ()
    {
	  newLocation(-16.508815298728535, -68.12766819648881);
    });

    });

}

/**End of credit **/