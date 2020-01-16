import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <p>GLOBAL HEADER</p>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/users'>Show List of Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
