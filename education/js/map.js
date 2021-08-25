"use strict";  
	//Google Map
        
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(-33.880169, 151.207351); //your latitude and longitude here
        var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        center: myLatlng,
        // How you would like to style the map. 
        styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -100
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -100
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -10
            }, {
                "lightness": 30
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }, {
                "lightness": 10
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": -100
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": -100
            }, {
                "lightness": 60
            }]
        }]
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: myLatlng,
        icon: 'img/mapmarker.png',
        map: map,
        title: ''
    });
      