import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import LeftPanel from '../LeftPanel/LeftPanel.js';
import Map from '../../util/Map';
import AddressList from '../../util/AddressListAPI';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }   
    this.searchLocation = this.searchLocation.bind(this);
    this.saveNewArea = this.saveNewArea.bind(this);
    this.editArea = this.editArea.bind(this);
    this.deleteArea = this.deleteArea.bind(this);
  }

  searchLocation(address){
    if(this.state.location!==undefined){
      this.state.location.areas.forEach(area => {
        area.polygon.setMap(null);
        area.label.setMap(null);
      });
    }
    AddressList.searchLocation(address).then(loc => {
      this.setState({location: loc}, function(){
        console.log(this.state.location);
        if(this.state.location===undefined){
          window.alert("Search for a valid address");
        }else{
          Map.moveTo(this.state.location.coordinates.lat, this.state.location.coordinates.lng);
          this.state.location.areas.forEach(area => {
            area.polygon = Map.createPolygon(area.points, area.color);
            area.label = Map.createLabel(area.points, area.name);
          });
        }
      });
    });
  }

  saveNewArea(area){
    AddressList.saveArea(area).then(response => {
      this.state.location.areas.forEach(area => {
        area.polygon.setMap(null);
        area.label.setMap(null);
      });
      AddressList.searchLocation(this.state.location.address).then(loc => {
        this.setState({location: loc}, function(){
          this.state.location.areas.forEach(area => {
            area.polygon = Map.createPolygon(area.points, area.color);
            area.label = Map.createLabel(area.points, area.name);
          });
        });
      });
    });
  }

  editArea(area){
    AddressList.editArea(area).then(response => {
      this.state.location.areas.forEach(area => {
        area.polygon.setMap(null);
        area.label.setMap(null);
      });
      AddressList.searchLocation(this.state.location.address).then(loc => {
        this.setState({location: loc}, function(){
          this.state.location.areas.forEach(area => {
            area.polygon = Map.createPolygon(area.points, area.color);
            area.label = Map.createLabel(area.points, area.name);
          });
        });
      });
    });
  }

  deleteArea(idArea){
    AddressList.deleteArea(idArea).then(response => {
      this.state.location.areas.forEach(area => {
        area.polygon.setMap(null);
        area.label.setMap(null);
      });
      AddressList.searchLocation(this.state.location.address).then(loc => {
        this.setState({location: loc}, function(){
          this.state.location.areas.forEach(area => {
            area.polygon = Map.createPolygon(area.points, area.color);
            area.label = Map.createLabel(area.points, area.name);
          });
        });
      });
    });;
  }

  createBackUpPolygon(points, color){
    return Map.createBackUpPolygon(points, color);
  }

  drawNewArea(){
    Map.drawNewArea();
  }

  activateDrawingMode(){
    Map.activateDrawingMode();
  }

  activateEditMode(){
    Map.activateEditMode();
  }

  deactivateDrawingMode(){
    Map.deactivateDrawingMode();
  }

  calculateArea(path){
    return Map.calculateArea(path);
  }

  stringifyPoints(path){
    return Map.stringifyPoints(path);
  }

  render(){
    return (
      <div className="App">
        <SearchBar searchLocation={this.searchLocation}/>
        <div className="wrapper">
          <LeftPanel 
            location={this.state.location}
            calculateArea={this.calculateArea}
            stringifyPoints={this.stringifyPoints}
            createBackUpPolygon={this.createBackUpPolygon} 
            activateDrawingMode={this.activateDrawingMode}
            activateEditMode={this.activateEditMode}
            deactivateDrawingMode={this.deactivateDrawingMode}
            drawNewArea={this.drawNewArea}
            saveNewArea={this.saveNewArea}
            editArea={this.editArea}
            deleteArea={this.deleteArea}
          />
          <Map location={this.state.location}/>
        </div>
      </div>
    );
  }

}

export default App;
