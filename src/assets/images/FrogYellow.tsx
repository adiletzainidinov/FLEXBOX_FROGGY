import React from 'react';

const FrogYellow: React.FC = () => (
  <svg
    display="none"
    className="FroggyYellow"
    width="90px"
    height="90px"
    viewBox="0 0 210 210"
    preserveAspectRatio="none"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      animation: 'slidein 0.5s ease-in-out infinite alternate',
    }}
  >
          <style>
        {`
      @keyframes slidein {
        from {
          transform: scale(1.0);
        }
        to {
          transform: scale(0.9);
        }
      }
    `}
      </style>
    <title>frog-yellow</title>
    <desc>Created with Sketch.</desc>
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform="translate(0, 26)"
    >
      <g id="frog-yellow" transform="translate(-13.000000, -21.000000)">
        <rect
          id="Rectangle-51"
          fillOpacity="0"
          fill="#D8D8D8"
          x="13"
          y="0"
          width="210"
          height="210"
        ></rect>
        <circle id="Oval-29" fill="#FAFA41" cx="73" cy="45" r="24"></circle>
        <circle id="Oval-29" fill="#FAFA41" cx="163" cy="45" r="24"></circle>
        <g
          id="frog-green-+-Rectangle-30"
          transform="translate(0.000000, 75.000000)"
          fill="#ECEC00"
        >
          <ellipse
            id="frog-green"
            transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578)"
            cx="46.5381931"
            cy="57.0265777"
            rx="26.5"
            ry="50.5"
          ></ellipse>
          <rect
            id="Rectangle-30"
            x="13"
            y="89"
            width="56"
            height="15"
            rx="9"
          ></rect>
        </g>
        <g
          id="frog-green-+-Rectangle-30"
          transform="translate(189.000000, 132.500000) scale(-1, 1) translate(-189.000000, -132.500000) translate(142.000000, 75.000000)"
          fill="#ECEC00"
        >
          <ellipse
            id="frog-green"
            transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578)"
            cx="46.5381931"
            cy="57.0265777"
            rx="26.5"
            ry="50.5"
          ></ellipse>
          <rect
            id="Rectangle-30"
            x="13"
            y="89"
            width="56"
            height="15"
            rx="9"
          ></rect>
        </g>
        <rect
          id="Rectangle-30"
          fill="#FAFA41"
          x="49"
          y="41"
          width="138"
          height="138"
          rx="9"
        ></rect>
        <circle
          id="Oval-37"
          stroke="#FFFFFF"
          strokeWidth="5"
          fill="#000000"
          cx="73"
          cy="45"
          r="12"
        ></circle>
        <circle
          id="Oval-37"
          stroke="#FFFFFF"
          strokeWidth="5"
          fill="#000000"
          cx="163"
          cy="45"
          r="12"
        ></circle>
        <rect
          id="Rectangle-33"
          fill="#FFFF95"
          x="62"
          y="93"
          width="110"
          height="70"
          rx="9"
        ></rect>
      </g>
    </g>
  </svg>
);

export default FrogYellow;
