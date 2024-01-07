import React from "react";
import threedot from './Images/threedot.png';
import circular from './Images/circular-graph.png'

export default function Card() {
    return (
        <div className="dot-container">
            <div>
                <div className="dot0">
                    <h4 className=" dot-title">Sale</h4>
                    <img src={threedot} className="dot1" />
                </div>

                <div class="line"></div>

                <img src={circular} className="dot2" />

                <div className="dot3">
                    <p className="p-4">Current Week</p>
                    <p className="p-4">2000</p>
                    <p className="p-2">+0.3%</p>
                </div>
                <div className="dot3">
                    <p className="p-4">Last Week</p>
                    <p className="p-4">1500</p>
                    <p className="p-3">-0.3%</p>
                </div>

            </div>

            <div>
                <div className="dot0">
                    <h4 className=" dot-title">Sale</h4>
                    <img src={threedot} className="dot1" />
                </div>
                <div class="line"></div>

                <img src={circular} className="dot2" />

                <div className="dot3">
                    <p className="p-4">Current Week</p>
                    <p className="p-4">2000</p>
                    <p className="p-2">+0.3%</p>
                </div>
                <div className="dot3">
                    <p className="p-4">Last Week</p>
                    <p className="p-4">1500</p>
                    <p className="p-3">-0.3%</p>
                </div>

            </div>

            <div>
                <div className="dot0">
                    <h4 className=" dot-title">Sale</h4>
                    <img src={threedot} className="dot1" />
                </div>

                <div class="line"></div>

                <img src={circular} className="dot2" />

                <div className="dot3">
                    <p className="p-4">Current Week</p>
                    <p className="p-4">2000</p>
                    <p className="p-2">+0.3%</p>
                </div>
                <div className="dot3">
                    <p className="p-4">Last Week</p>
                    <p className="p-4">1500</p>
                    <p className="p-3">-0.3%</p>
                </div>

            </div>

        </div>
    )
}