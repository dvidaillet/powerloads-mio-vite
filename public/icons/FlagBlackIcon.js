import React from "react";

const FlagBlackIcon = ({ color = "#606062" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="34px"
        height="45px"
        version="1.0"
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
        }}
        viewBox="0 0 0.059 0.079"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsxodm="http://www.corel.com/coreldraw/odm/2003"
    >
        <g id="Capa_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <path
                fill={color}
                fillOpacity="0.5"
                d="M0.014 0.076c0.006,0 0.011,0.001 0.011,0.001 0,0.001 -0.005,0.002 -0.012,0.002 -0.007,0 -0.013,-0.001 -0.013,-0.002 0,0 0.005,-0.001 0.011,-0.001l0 -0.069c-0.001,-0.001 -0.002,-0.002 -0.002,-0.003 0,-0.002 0.002,-0.004 0.004,-0.004 0.002,0 0.003,0.002 0.003,0.004 0,0.001 -0.001,0.002 -0.002,0.003l0 0.069zm0.003 -0.066l0.042 0.013 -0.042 0.013 0 -0.026z"
            />
        </g>
    </svg>
);

export default FlagBlackIcon;
