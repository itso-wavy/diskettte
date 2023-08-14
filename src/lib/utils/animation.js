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

export { entrance, shake, slideIn, floating, swing }
