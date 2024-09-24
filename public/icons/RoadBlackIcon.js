import React from "react";

const RoadBlackIcon = ({ color = "#606062" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="50px"
            height="42px"
            version="1.0"
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
            viewBox="0 0 0.156 0.13"
        >
            <g id="Capa_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                    fill={color}
                    fillOpacity="0.5"
                    d="M0 0.13l0.01 0 0.068 -0.13 -0.078 0.13zm0.156 0l-0.01 0 -0.068 -0.13 0.078 0.13zm-0.135 0l0.053 0 0.001 -0.027 0.006 0 0.001 0.027 0.053 0 -0.057 -0.13 -0.057 0.13zm0.059 -0.044l0 -0.022 -0.004 0 -0.001 0.022 0.005 0zm-0.001 -0.035l0 -0.014 -0.002 0 -0.001 0.014 0.003 0zm0 -0.024l-0.001 -0.01 -0.001 0 0 0.01 0.002 0zm-0.001 -0.017l0 -0.005 0 0 0 0.005 0 0z"
                />
            </g>
        </svg>
    );
};

export default RoadBlackIcon;
