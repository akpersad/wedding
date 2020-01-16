import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../header/header";

//Functional Component

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header pathName={this.props.location} />
                <h3 id='test'>Welcome to the React Router Tutorial</h3>
                <small>Main Page</small>
            </div>
        );
    }
}

export default MainPage;
