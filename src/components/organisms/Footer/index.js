import React from 'react'
import styled from 'styled-components'

import { Block, Icon, Link, Paragraph } from 'components'


const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <Credits>
        Made with
        {' '}
        <Icon icon="heart"/>
        {' '}
        by
        {' '}
        <Link href="https://github.com/mika-net">Mika</Link>
      </Credits>
    </Wrapper>
  )
}

export default Footer
