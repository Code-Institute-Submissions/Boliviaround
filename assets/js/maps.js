
/** Credit from Code Institution Lesson
 & Stack Overflow : https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button/28500306 */

function initialize () {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: -20.012628599701625, 
                    lng: -67.81195422417898
                }
            });

            var labels = "";

            var locations = [
                {lat: -21.533319122582853, lng: -64.73381610468566},
                {lat: -18.890052731395137, lng: -66.75225678903733},
                {lat: -17.785521446880388, lng: -63.180204218666496},
                {lat: -20.012628599701625, lng: -67.81195422417898},
                {lat: -16.264692546146286, lng: -67.78893702608976},
                {lat: -16.5445410118336, lng: -68.08655004495911},
                {lat: -19.045374104018236, lng: -65.25827944562785},
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
	  newLocation(-20.012628599701625, -67.81195422417898);
	});
  
    $("#btn-party").on('click', function ()
    {
	  newLocation(-16.508669717197826, -68.12765094495937);
    });

    /**Adventures */
    $(".btn-salar").on('click', function ()
    {
	  newLocation(-20.012628599701625, -67.81195422417898);
    });

    $(".btn-eduardo").on('click', function ()
    {
	  newLocation(-18.890052731395137, -66.75225678903733);
    });

    $(".btn-yungaz").on('click', function ()
    {
	  newLocation(-16.264692546146286, -67.78893702608976);
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
	  newLocation(-21.533319122582853, -64.73381610468566);
    });

    /**Party */

    $(".btn-kultur").on('click', function ()
    {
	  newLocation(-19.049729028381368, -65.25705575912029);
    });

    $(".btn-bymz").on('click', function ()
    {
	  newLocation(-17.785521446880388, -63.180204218666496);
    });

    $(".btn-diesel").on('click', function ()
    {
	  newLocation(-16.508669717197826, -68.12765094495937);
    });

    });

}

/**End of credit **/