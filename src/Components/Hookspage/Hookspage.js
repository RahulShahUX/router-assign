import { NavLink, Outlet } from "react-router-dom";

export default function Hookspage() {
    return (
        <>
            <div className="navbar navbar-expand">
                <div className="navbar-nav">
                    <NavLink
                        className="nav-link"
                        to="usestate"
                    >
                        UseState
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="useeffect"
                    >
                        UseEffect
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}