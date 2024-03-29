// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ width, height }) => {
  const size = width || height
  return size ? `${size / 16}rem` : '1.25em'
}

const Wrapper = styled.img`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  width: 4em;
  height: 4em;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const BigIcon = ({ icon, ...props }) => {
  const svg = require(`!svg-url-loader!./icons/${icon}.svg`)
  console.log(svg)
  return <Wrapper src={svg} />
}

BigIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default BigIcon
