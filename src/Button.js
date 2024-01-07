import React from "react";


export default function Button(prop) {
    console.log(prop)
    return (
        <button className="butt" >
            <div className="button-container">

                <div className="how">
                    <div className="hi">
                        <img src={prop.image} className="icon-img" />

                    </div>
                    <div className="propname">
                        {prop.name}
                    </div>
                </div>
                <div className="extra-icon">{">"}</div>

               

            </div>
        </button>
    )
}