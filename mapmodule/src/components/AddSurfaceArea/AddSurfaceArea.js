import React from 'react';
import './AddSurfaceArea.css';

class AddSurfaceArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            label: this.props.newAreaLabel,
            color: 'rgb(0, 105, 217)'
        }
        this.handleCancelAddSurfaceAreaClick = this.handleCancelAddSurfaceAreaClick.bind(this);
        this.handleSaveSurfaceAreaClick = this.handleSaveSurfaceAreaClick.bind(this);
        this.handleLabelChange = this.handleLabelChange.bind(this);
        this.handleColorBlueClick = this.handleColorBlueClick.bind(this);
        this.handleColorGreenClick = this.handleColorGreenClick.bind(this);
        this.handleColorRedClick = this.handleColorRedClick.bind(this);
        this.handleColorYellowClick = this.handleColorYellowClick.bind(this);
        this.handleColorBlueGreenClick = this.handleColorBlueGreenClick.bind(this);
        this.handleColorGrayClick = this.handleColorGrayClick.bind(this);
        this.handleColorBlackClick = this.handleColorBlackClick.bind(this);
    }

    componentDidMount(){
        this.props.drawNewArea();
    }

    handleSaveSurfaceAreaClick(event){
        try {
            let area = {
                address: this.props.location.address,
                name: this.state.label,
                surface_area: window.polygonArea,
                points: window.pointsToString,
                color: this.state.color,
                type: this.props.newAreaType
            }
            window.poly.setMap(null);
            this.props.saveNewArea(area);
            this.props.cancelAddSurfaceArea();
        } catch (error) {
            window.alert("Draw Area before Saving");
        }
    }

    handleCancelAddSurfaceAreaClick(event){
        this.props.cancelAddSurfaceArea();
        if(window.poly!==undefined){
            window.poly.setMap(null);
        }
        window.poly = undefined;
    }

    handleLabelChange(event){
        this.setState({
            label: event.target.value
        });
    }

    handleColorBlueClick(event){
        this.setState({
            color: 'rgb(0, 105, 217)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(0, 105, 217)',
                strokeColor: 'rgb(0, 105, 217)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){

        }
        window.poly.setOptions({
                fillColor: 'rgb(0, 105, 217)',
                strokeColor: 'rgb(0, 105, 217)',
                strokeWeight: 5,
        });
    }

    handleColorGreenClick(event){
        this.setState({
            color: 'rgb(33, 136, 56)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(33, 136, 56)',
                strokeColor: 'rgb(33, 136, 56)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){
            window.poly.setOptions({
                fillColor: 'rgb(33, 136, 56)',
                strokeColor: 'rgb(33, 136, 56)',
                strokeWeight: 5,
            });
        }
    }

    handleColorRedClick(event){
        this.setState({
            color: 'rgb(220, 53, 69)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(220, 53, 69)',
                strokeColor: 'rgb(220, 53, 69)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){
            window.poly.setOptions({
                fillColor: 'rgb(220, 53, 69)',
                strokeColor: 'rgb(220, 53, 69)',
                strokeWeight: 5,
            });
        }
    }

    handleColorYellowClick(event){
        this.setState({
            color: 'rgb(224, 168, 0)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(224, 168, 0)',
                strokeColor: 'rgb(224, 168, 0)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){
            window.poly.setOptions({
                fillColor: 'rgb(224, 168, 0)',
                strokeColor: 'rgb(224, 168, 0)',
                strokeWeight: 5,
            });
        }
    }

    handleColorBlueGreenClick(event){
        this.setState({
            color: 'rgb(19, 132, 150)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(19, 132, 150)',
                strokeColor: 'rgb(19, 132, 150)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){
            window.poly.setOptions({
                fillColor: 'rgb(19, 132, 150)',
                strokeColor: 'rgb(19, 132, 150)',
                strokeWeight: 5,
            });
        }
    }

    handleColorGrayClick(event){
        this.setState({
            color: 'rgb(108, 117, 125)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(108, 117, 125)',
                strokeColor: 'rgb(108, 117, 125)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){
            window.poly.setOptions({
                fillColor: 'rgb(108, 117, 125)',
                strokeColor: 'rgb(108, 117, 125)',
                strokeWeight: 5,
            });
        }
    }

    handleColorBlackClick(event){
        this.setState({
            color: 'rgb(35, 39, 43)'
        });
        window.drawingManager.setOptions({
            polygonOptions: {
                fillColor: 'rgb(35, 39, 43)',
                strokeColor: 'rgb(35, 39, 43)',
                strokeWeight: 5,
            }
        });
        if(window.poly!==undefined){
            window.poly.setOptions({
                fillColor: 'rgb(35, 39, 43)',
                strokeColor: 'rgb(35, 39, 43)',
                strokeWeight: 5,
            });
        }
    }

    render(){
        return(
            <div className="mainContainer">
                <div className="headerDiv text-left">
                    <h5>Add {`${this.props.newAreaType}`}</h5>
                </div>
                <div className="colorDiv text-left">
                    <label>Color</label>
                    <br></br>
                    <button className="btn btn-primary btnColor" onClick={this.handleColorBlueClick} autoFocus></button>
                    <button className="btn btn-success btnColor" onClick={this.handleColorGreenClick}></button>
                    <button className="btn btn-danger btnColor" onClick={this.handleColorRedClick}></button>
                    <button className="btn btn-warning btnColor" onClick={this.handleColorYellowClick}></button>
                    <button className="btn btn-info btnColor" onClick={this.handleColorBlueGreenClick}></button>
                    <button className="btn btn-secondary btnColor" onClick={this.handleColorGrayClick}></button>
                    <button className="btn btn-dark btnColor" onClick={this.handleColorBlackClick}></button>
                </div>
                <div className="text-left">
                    <form>
                        <label>Label</label>
                        <input type="text" className="form-control" onChange={this.handleLabelChange} defaultValue={this.props.newAreaLabel} required/>
                    </form> 
                </div>
                <div className="bottomDiv text-left">
                    <div className="">
                        <input type="button" className="btn btn-default btnCancel" onClick={this.handleCancelAddSurfaceAreaClick} data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-success btnAdd" onClick={this.handleSaveSurfaceAreaClick} value="Add"/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default AddSurfaceArea;