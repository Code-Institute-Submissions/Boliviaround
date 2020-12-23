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


        
  const locations = [
    ["Salar d'Uyuni", -20.012628599701625, -67.81195422417898],
    ["Yungaz Road", -16.264692546146286, -67.78893702608976],
    ["Eduardo Avaroa", -18.890052731395137, -66.75225678903733],
    ["Gustu", -16.5445410118336, -68.08655004495911],
    ["Choriceria", -19.045374104018236, -65.25827944562785],
    ["El Huerto", -19.037201903024396, -65.2622114744638],
    ["Kultur", -19.049729028381368, -65.25705575912029],
    ["Bymz Bar", -17.785521446880388, -63.180204218666496],
    ["Diesel Nacional", -16.508669717197826, -68.12765094495937],
  ];