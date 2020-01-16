import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
//Functional Component
const MainPage = () => {
    return (
        <div>
            <Header />
            <h3>Welcome to the React Router Tutorial</h3>
            <small>Main Page</small>
        </div>
    );
};

export default MainPage;
