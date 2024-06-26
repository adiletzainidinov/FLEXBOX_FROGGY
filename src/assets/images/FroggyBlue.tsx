import React from 'react';

const FroggyBlue: React.FC = () => {
  return (
    <div>
      <svg
        width="160px"
        height="160px"
        viewBox="0 0 160 160"
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
        <title>lilypad-green</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <path
            d="M68.1410843,159.12709 C72.0105928,159.702089 75.9705059,126.101562 80,126.101562 C85.4632556,126.101562 90.798605,159.452368 95.9541484,158.409004 C132.492835,151.014406 160,118.719524 160,80 C160,35.81722 124.18278,0 80,0 C35.81722,0 0,35.81722 0,80 C0,120.153286 29.5820305,153.397318 68.1410843,159.12709 Z"
            id="path-1"
          ></path>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="lilypad-green">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use id="Mask" fill="#3FA142" xlinkHref="#path-1"></use>
            <path
              d="M68.1410843,174.12709 C72.0105928,174.702089 75.9705059,141.101562 80,141.101562 C85.4632556,141.101562 90.798605,174.452368 95.9541484,173.409004 C132.492835,166.014406 160,133.719524 160,95 C160,50.81722 124.18278,15 80,15 C35.81722,15 0,50.81722 0,95 C0,135.153286 29.5820305,168.397318 68.1410843,174.12709 Z"
              fill="#288A2B"
              mask="url(#mask-2)"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default FroggyBlue;
