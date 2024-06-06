import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:'',
        };
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleAddressChange(event){
        this.setState({
            address: event.target.value
        });
    }


    handleSearch(event){
        this.props.searchLocation(this.state.address);
        event.preventDefault();
    }

    render(){
        return(
            <form>
                <div className="container-fluid navbar-dark bg-dark search-sec">
                    <div className="row">
                        <div className="col-2 ">
                            <a className="companyName" href="#">Map Module</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                            <input type="search" className="form-control search-slt" placeholder="Enter Address" onChange={this.handleAddressChange}/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 p-0">
                            <button type="" className="btn btn-success wrn-btn" onClick={this.handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;