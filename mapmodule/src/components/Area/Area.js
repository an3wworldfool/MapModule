import React from 'react';
import './Area.css';

class Area extends React.Component{
    constructor(props){
        super(props);
        this.handleEditSurfaceAreaClick = this.handleEditSurfaceAreaClick.bind(this);
        this.handleDeleteSurfaceAreaClick = this.handleDeleteSurfaceAreaClick.bind(this);
    }

    handleEditSurfaceAreaClick(event){
        this.props.selectEditSurfaceArea(this.props.area);
        console.log(this.props.area.idArea);
    }

    handleDeleteSurfaceAreaClick(event){
        event.preventDefault();
        console.log(this.props.area.idArea);
        this.props.deleteArea(this.props.area.idArea);
    }

    render(){
        return(
            <div className="AreaContent">
                <div className="text-left bg-light form-inline">
                    <div className="AreaLabel">
                        <div>
                            <h5>{this.props.area.name}</h5>  
                        </div>
                    </div>
                    <div className="AreaButtons">
                        <button className="btn btn-warning edit" onClick={this.handleEditSurfaceAreaClick}><i className="material-icons"  title="Edit">&#xE254;</i></button>
                        <button  className="btn btn-danger" data-toggle="modal" data-target={`#Modal${this.props.area.idArea}`}><i className="material-icons"  title="Delete">&#xE872;</i></button>   
                    </div>
                </div>
                <div className="text-left">
                    <p id="area" className="card-text">Area: {this.props.area.surfaceArea} sq ft</p>
                </div>
                <div id={`Modal${this.props.area.idArea}`} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content text-left">
                            <form>
                                <div className="modal-header">						
                                    <h4 className="modal-title">Delete {this.props.area.name}</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">					
                                    <p>Are you sure you want to delete this Record?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default btnCancelModal" data-dismiss="modal" value="Cancel"/>
                                    <input type="submit" className="btn btn-danger" onClick={this.handleDeleteSurfaceAreaClick} data-dismiss="modal" value="Delete"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Area;