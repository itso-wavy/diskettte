import { keyframes } from 'styled-components'

const entrance = keyframes`
  0% {
    scale: 1.2;
  }
  85% {
    scale: 1;
  }
`

const shake = keyframes`
  0% {
    transform: rotate(-1.5deg);
    animation-timing-function: ease-in;
  }
  50% {
    transform: rotate(2deg);
    animation-timing-function: ease-out;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0);
  }
`

const floating = keyframes`
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(10%);
  }
  50% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(-10%);
  }
`

const swing = keyframes`
  30% {
    transform: rotate(30deg) translate(-10em, -3em);
  }
  50% {
    transform: rotate(0deg) translate(-3em, 2em);
  }
  70% {
    transform: scale(0.8) rotate(-15deg) translate(15em, 5em);
  }
  85% {
    transform: scale(0.6) rotate(-15deg) translate(30em, -10em);
  }
`

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const rolling = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%) rotate(0deg);
    border-radius: 0;
  }
  100% {
    left: 100%;
    transform: translateX(0%) rotate(360deg);
    border-radius: 50%;
  }
`

const neon = keyframes`
  from {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
      0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(242, 72, 30, 0.52),
      0 0 21px rgba(242, 72, 30, 0.92), 0 0 34px rgba(242, 30, 30, 0.78),
      0 0 54px rgba(242, 30, 30, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
      0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(242, 30, 30, 0.58),
      0 0 22px rgba(242, 72, 30, 0.84), 0 0 36px rgba(242, 30, 30, 0.88),
      0 0 60px rgba(242, 30, 30, 1);
    filter: saturate(60%), brightness(0.1%);
  }
`

const neon2 = keyframes`
  from {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
      0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
      0 0 11px rgba(30, 132, 242, 0.92), 0 0 18px rgba(30, 132, 242, 0.78),
      0 0 30px rgba(30, 132, 242, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
      0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.52),
      0 0 12px rgba(30, 132, 242, 0.92), 0 0 20px rgba(30, 132, 242, 0.78),
      0 0 32px rgba(30, 132, 242, 0.92);
    filter: saturate(60%), brightness(0.1%);
  }
  `

export {
	entrance,
	shake,
	slideIn,
	floating,
	swing,
	rotate,
	rolling,
	neon,
	neon2,
}
