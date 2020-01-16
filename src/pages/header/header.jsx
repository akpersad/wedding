import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    setCurrentLink(linkLists) {
        const htmlArray = [];
        for (let i = 0; i < Object.keys(linkLists).length; i++) {
            const currentLinkClass =
                this.props.pathName.pathname === Object.keys(linkLists)[i]
                    ? "current"
                    : "not-current";
            htmlArray.push(
                <li>
                    <Link
                        className={currentLinkClass}
                        to={Object.keys(linkLists)[i]}
                    >
                        {linkLists[Object.keys(linkLists)[i]]}
                    </Link>
                </li>
            );
        }
        return htmlArray;
    }

    render() {
        const linkLists = { "/": "Home", "/users": "Users" };
        return (
            <div>
                <p>GLOBAL HEADER</p>
                <ul>{this.setCurrentLink(linkLists)}</ul>
            </div>
        );
    }
}

export default Header;
