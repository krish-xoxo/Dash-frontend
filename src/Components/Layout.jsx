import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Plans from './Plans';
import Userprofile from './userprofile';
import Settings from './Settings';
import EarningApproval from './EarningApproval';
import Reports from './Reports';
import Log from './Log';
import Group from './Group';
import Metric from './Metric';
import Help from './Help';
import Inbox from './Inbox';
import Analytics from './Analytics';

const Layout = ({ children }) => {
    const mainContent = getMainContent();

    function getMainContent() {

        switch (window.location.pathname) {
            case "Dash":
                mainContent = <Dash />
                break;
            case "Plans":
                mainContent = <Plans />
                break;
            case "Users":
                mainContent = <Users />
                break;
            case "userprofile":
                mainContent = <Userprofile />
                break;
            case "Settings":
                mainContent = <Settings />
                break;
            case "EarningApproval":
                mainContent = <EarningApproval />
                break;
            case "Reports":
                mainContent = <Reports />
                break;
            case "Log":
                mainContent = <Log />
                break;
            case "Group":
                mainContent = <Group />
                break;
            case "Data":
                mainContent = <Data />
                break;
            case "Metric":
                mainContent = <Metric />
                break;
            case "Help":
                mainContent = <Help />
                break;
            case "Inbox":
                mainContent = <Inbox />
                break;
            case "Analytics":
                mainContent = <Analytics />
                break;
            case "*":
                mainContent = <Error />
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Header />
            <Sidebar />
            <main>
                {mainContent}
                {children}
            </main>
        </div>
    )
}

export default Layout