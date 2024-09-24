import React from "react";

const TotalUsersIncon = ({
    color = "#606062",
    width = "50px",
    height = "30px",
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={width}
        height={height}
        version="1.0"
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
        }}
        viewBox="0 0 0.156 0.087"
    >
        <g id="Capa_x0020_1">
            <path
                fill={color}
                fillOpacity="0.5"
                d="M0.126 0.051l-0.005 0.013 -0.006 -0.013c-0.005,0 -0.011,0.003 -0.015,0.007 0.007,0.005 0.014,0.012 0.019,0.02l0.037 0c-0.004,-0.012 -0.018,-0.026 -0.03,-0.027zm-0.006 -0.047c0.013,0 0.023,0.011 0.023,0.023 0,0.012 -0.01,0.022 -0.023,0.022 -0.006,0 -0.012,-0.003 -0.016,-0.007 0.002,-0.005 0.004,-0.01 0.004,-0.015 0,-0.006 -0.002,-0.011 -0.004,-0.015 0.004,-0.005 0.01,-0.008 0.016,-0.008zm-0.081 0.047l-0.005 0.013 -0.006 -0.013c-0.01,0.001 -0.021,0.01 -0.026,0.02 -0.001,0.002 -0.001,0.004 -0.002,0.007l0.036 0c0.003,-0.008 0.01,-0.016 0.018,-0.02 -0.005,-0.004 -0.01,-0.007 -0.015,-0.007zm-0.006 -0.047c0.007,0 0.013,0.003 0.017,0.008 -0.003,0.004 -0.004,0.009 -0.004,0.015 0,0.005 0.001,0.011 0.004,0.015 -0.004,0.005 -0.01,0.007 -0.017,0.007 -0.012,0 -0.022,-0.01 -0.022,-0.022 0,-0.012 0.01,-0.023 0.022,-0.023zm0.05 0.051l-0.006 0.016 -0.006 -0.016c-0.013,0.002 -0.026,0.012 -0.031,0.024 -0.002,0.003 -0.002,0.006 -0.003,0.008l0.082 0c-0.004,-0.013 -0.022,-0.03 -0.036,-0.032zm-0.006 -0.055c0.015,0 0.027,0.012 0.027,0.027 0,0.015 -0.012,0.027 -0.027,0.027 -0.015,0 -0.027,-0.012 -0.027,-0.027 0,-0.015 0.012,-0.027 0.027,-0.027z"
            />
        </g>
    </svg>
);

export default TotalUsersIncon;