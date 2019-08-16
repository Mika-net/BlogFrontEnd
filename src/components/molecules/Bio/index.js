import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

import {
  Image, Link, Paragraph, Heading, Badge, PreformattedText,
} from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${ifProp('soon', 0.4, 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const StyledImage = styled(Image)`
  flex: none;
  @media screen and (max-width: 640px) {
  }
`

const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  @media screen and (max-width: 640px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`

const Bio = ({
  image, title, link, code, children, ...props
}) => {
  const { soon } = props
  return (
    <Wrapper {...props}>
      {image && <StyledImage image={image} />}
      <Text>
        <Heading level={2}>
          {link ? <Link href={link}>{title}</Link> : title}
        </Heading>
        <Paragraph>{children}</Paragraph>
        {code && <PreformattedText block>{code}</PreformattedText>}
      </Text>
      {soon && <StyledBadge palette="grayscale">soon</StyledBadge>}
    </Wrapper>
  )
}

Bio.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any,
  code: PropTypes.node,
}

export default Bio
