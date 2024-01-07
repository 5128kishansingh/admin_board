import React from "react";
import revenue from "./Images/revenue-graph.png"

export default function Graph() {
    return (
        <div className="graph">
            <div className="graph-title">
                <h4 className="h1">Revenue</h4>
                <p className="p1">+0.3%</p>
            </div>

            <img src={revenue} className="reven-img" />
        </div>
    )
}