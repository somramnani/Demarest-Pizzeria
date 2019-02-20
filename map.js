    function myMap() {
  
       
        var myCenter = new google.maps.LatLng(40.9573168, -73.9638119);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 19};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: "Demarest Pizzeria"
        });
        infowindow.open(map,marker);
    }