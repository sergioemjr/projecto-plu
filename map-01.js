function myMap() {
    //definir uma localização
    const myLocation = new google.maps.LatLng(39.74892, -8.80673)
    const mapProp = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROAD
    }
    const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp)
//definir janela de informação
        const contentString = '<div id="content"><div id="siteNotice"></div>'+
        '<h3 id="firstHeading" class="firstHeading">STEREOGUN</h1>'+
        '<div class="row">'+
        '<div class="col-md-12">Rua Capitão Mouzinho de Albuquerque, 42 2415-442 Leiria <br> T: 253 609 340 <br> E: geral@apcb.pt</div>'+
        '</div>'+
        '</div></div>';

    const infowindow = new google.maps.InfoWindow({ content: contentString, maxWidth: 450 });

        const marker = new google.maps.Marker({
            position:myLocation,
            map:map,
            animation:google.maps.Animation.DROP
            })

            marker.addListener('click', function(){
                infowindow.open(map, marker)
            })
          marker.setMap(map);
        }
