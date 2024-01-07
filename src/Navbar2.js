import React from "react";
import stats from "./Images/stats.png"
export default function Navbar2() {
    return (
        <div className="engagement-container">
            <div className="engage-stats">
                <div>
                    <h4 className="h1">Impressions</h4>
                    <h3>834</h3>

                </div>
                <img src={stats} className="stat-icon"/>
            </div>
            <div className="engage-stats">
                <div>
                    <h4 className="h1">Total audience</h4>
                    <h3>834</h3>

                </div>
                <img src={stats} className="stat-icon"/>
            </div>
            <div className="engage-stats">
                <div>
                    <h4 className="h1">Engagements</h4>
                    <h3>834</h3>

                </div>
                <img src={stats} className="stat-icon"/>
            </div>
            <div className="engage-stats">
                <div>
                    <h4 className="h1">Engaged audience</h4>
                    <h3>834</h3>

                </div>
                <img src={stats} className="stat-icon"/>
            </div>
        </div>
    )
}