import React, { useEffect } from "react";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsGrid3X3GapFill, Bs0SquareFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsArrowBarLeft } from "react-icons/bs";

function Sidebar() {

    useEffect((req, res) => {
        // console.log("Hie!")
    }, [])

    return (
        <aside id="sidebar">
            <div className="menu">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item sidebar-list-item active">
                        <a  href="/Dash">
                            <BsCart3 className="icon" /> Dashboard
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a className="s-nav" href="/Plans">
                            <BsFillArchiveFill className="icon" /> Plans
                        </a>    
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/EarningApproval">
                            <BsGrid3X3GapFill className="icon" /> Earning Approvals
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Reports">
                            <BsMenuButtonWideFill className="icon" /> Reports
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Log">
                            <BsListCheck className="icon" /> Logs
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Group">
                            <BsGrid1X2Fill className="icon" /> Groups
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Users">
                            <BsPeopleFill className="icon" /> Users
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Data">
                            <Bs0SquareFill className="icon" /> Data Integration
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Metric">
                            <BsArrowBarLeft className="icon" /> Metric
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/Settings">
                            <BsFillGearFill className="icon" /> Settings
                        </a>
                    </li>

                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;