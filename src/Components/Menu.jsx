import React from "react";
import { NavLink } from "react-router-dom";

// header component for display routing
const Menu = (props) => {
    const { color } = props;
    return (
        <header className={color}>
            <nav className="nav crt" id="nav">
                <NavLink exact to="/" className="home" activeClassName="active">
                    <b>
                        <span>
                            <i className="ra ra-sword ra-2x"></i>
                        </span>
                    </b>
                    <span className="label">Home</span>
                </NavLink>
                <NavLink exact to="/miu" className="projects" activeClassName="active">
                    <b>
                        <span>
                            <i className="ra ra-sword ra-2x"></i>
                        </span>
                    </b>
                    <span className="label">Miu</span>
                </NavLink>
                <NavLink exact to="/paplovag" className="projects" activeClassName="active">
                    <b>
                        <span>
                            <i className="ra ra-kaleidoscope ra-2x"></i>
                        </span>
                    </b>
                    <span className="label">Papok</span>
                </NavLink>
            </nav>
        </header>
    );
};

export default Menu;
