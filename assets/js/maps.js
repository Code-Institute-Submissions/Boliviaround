function initMap() {
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 7,
                    center: {
                        lat: -20.072305495345528,
                        lng: -67.7087008695497
                    }
                });
            
            var labels = "123456789";
            var locations = [
                { 
                    lat: -20.072305495345528,
                    lng: -67.7087008695497}
            ];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                })
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }