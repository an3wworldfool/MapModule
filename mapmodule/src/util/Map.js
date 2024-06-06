import React from 'react';
import MapScript from './MapScript';

window.drawingManager = new window.google.maps.drawing.DrawingManager({
    drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
    drawingControl: true,
    drawingControlOptions: {
        position: window.google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
    },
    polygonOptions: {
        draggable: true,
        editable: true,
        fillColor: 'rgb(0, 105, 217)',
        fillOpacity: 0.5,
        strokeColor: 'rgb(0, 105, 217)',
        strokeOpacity: 1,
        strokeWeight: 5,
    }
});

class Map extends React.Component{
    constructor(props){
        super(props);
    }

    static createPolygon(path, color) {
        var polygon = new window.google.maps.Polygon({
            fillColor: color,
            fillOpacity: 0.3,
            strokeWeight: 5,
            strokeColor: color,
            editable: false,
            draggable: false,
            path: path,
        });
        polygon.setMap(window.MyMap);
        return polygon;
    }

    static createLabel(path, name){
        var lowX;
        var highX;
        var centerX;
        var lowY;
        var highY;
        var centerY;
        var latitudes = [];
        var longitudes = [];
        var coordinates;
        for(var i = 0; i < path.length; i++){
            latitudes.push(path[i].lat);
            longitudes.push(path[i].lng);
        }
        latitudes.sort();
        longitudes.sort();
        lowX = latitudes[0];
        highX = latitudes[path.length - 1];
        lowY = longitudes[0];
        highY = longitudes[path.length - 1];
        centerX = lowX + ((highX - lowX) / 2);
        centerY = lowY + ((highY - lowY) / 2);
        coordinates = new window.google.maps.LatLng(centerX, centerY);
        
        var marker = new window.google.maps.Marker({
            position: coordinates,
            map: window.MyMap,
            label: {
                text: name,
                color: 'white'
            }
        });
        return marker;
    }

    static createBackUpPolygon(path, color){
        let points = path.getArray().map((coordinates => {
            return{
                lat:coordinates.lat(),
                lng:coordinates.lng()
            }
        }));
        var backUpPolygon = new window.google.maps.Polygon({
            fillColor: color,
            fillOpacity: 0.3,
            strokeWeight: 5,
            strokeColor: color,
            editable: false,
            draggable: false,
            path: points,
        });
        return backUpPolygon;
    }

    static activateDrawingMode(){
        window.drawingManager.setMap(window.MyMap);
        window.drawingManager.setDrawingMode('polygon');
    }

    static activateEditMode(polygon){
        window.drawingManager.setMap(window.MyMap);
        window.drawingManager.setDrawingMode(null);
    }

    static deactivateDrawingMode(){
        window.drawingManager.setMap(null);
    }

    static moveTo(lat, lng){
        var latLng = new window.google.maps.LatLng(lat, lng)
        window.MyMap.panTo(latLng);
        window.MyMap.setZoom(100);
    }

    static calculateArea(path){
        var area = window.google.maps.geometry.spherical.computeArea(path);
        area = area * 10.76391;
        return area;
    }

    static stringifyPoints(path){
        let points = path.getArray().map((coordinates => {
            return{
                lat:coordinates.lat(),
                lng:coordinates.lng()
            }
        }));
        let pointsToString = JSON.stringify(points);
        return pointsToString;
    }

    static drawNewArea(){
        window.google.maps.event.addListener(window.drawingManager, 'polygoncomplete', function(polygon){
            window.poly = polygon;
            let path = polygon.getPath();
            let points = path.getArray().map((coordinates => {
                return{
                    lat: coordinates.lat(),
                    lng: coordinates.lng()
                }
            }));
            window.pointsToString = JSON.stringify(points);
            window.polygonArea = window.google.maps.geometry.spherical.computeArea(path);
            console.log(window.pointsToString);
            console.log(window.polygonArea);
            window.drawingManager.setMap(null);
        });
    }



    render(){
        return(
            <MapScript
                id="myMap"
                options={{
                    center: { lat: 34.154631, lng: -118.451229, },
                    zoom: 40,
                    tilt: 0,
                    mapTypeId: 'hybrid',
                    mapTypeControlOptions:{
                        mapTypeIds: ['hybrid']
                    },
                    streetViewControl: false,
                    rotateControl: false
                }}
                onMapLoad={map => {

                }}
            />
        );
    }
}

export default Map ;