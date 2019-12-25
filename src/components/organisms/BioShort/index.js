import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import { Block, IconLink, Link, Paragraph } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 1, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Instructions = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`

const BioShort = (props) => {
  return (

    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
          {/*}  <Bio
          image="sleeping.png"
          link="https://github.com/diegohaz/arc/tree/redux"
        >

        </Bio>*/}
        </Section>
        <Section>
          <Text>
            This is my website, written in {' '}
            <IconLink reverse icon="react" href="https://facebook.github.io/react/">React</IconLink>
            {' '}
            , following based on the
            {' '}
            <IconLink reverse icon="atomic-design" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic
              Design</IconLink>
            {' '}
            methodology. The goal is to have a fully functional blog engine created in{' '}
            <Link reverse href="http://bradfrost.com/blog/post/atomic-web-design/">NodeJS</Link> complete with an Oauth2
            login system, in which I plan to go over the projects I am Involved in, and what I learn from them each
            week.

          </Text>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default BioShort
