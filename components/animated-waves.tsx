'use client'

export function AnimatedWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(99, 102, 241, 0.15)"
            className="wave wave1"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(99, 102, 241, 0.1)"
            className="wave wave2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(99, 102, 241, 0.05)"
            className="wave wave3"
          />
        </g>
      </svg>
      <style jsx>{`
        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }

        .wave {
          animation: wave 25s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
          transform: translate3d(0, 0, 0);
        }

        .wave1 {
          animation-duration: 20s;
        }

        .wave2 {
          animation-duration: 15s;
          animation-delay: -5s;
        }

        .wave3 {
          animation-duration: 25s;
          animation-delay: -2s;
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
