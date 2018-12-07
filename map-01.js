function myMap() {

    const myLocation = new google.maps.LatLng(39.74892, -8.80673)

    const mapProp = {
        center: myLocation,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp)

        var marker = new google.maps.Marker({
            position:myLocation,
            animation:google.maps.Animation.DROP
            });

            marker.setMap(map);

  }
