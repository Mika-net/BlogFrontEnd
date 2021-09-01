import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

import { Heading, Link, Paragraph } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${ifProp('soon', 0.4, 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }

  $card-border-radius: 8px;

  * {
    transition: all 0.5s;
  }

  body {
    background: #0cc;
  }

  .container {
    width: 120%;
    margin: auto;
    text-align: center;
    color: white;
    margin-top: 30px;

    a {
      text-decoration: none;
      font-style: oblique;
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .fm-card {
    position: relative;
    width: 1000px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 4px 8px 0px rgba(23, 23, 23, 0.2);
    border-radius: $card-border-radius;

    &:hover {
      text-decoration: underline;
      transform: scale(1.05);
      opacity: 0.8;
    }


  }

  .fm-card-header {
    height: 5px;
    border-top-left-radius: $card-border-radius;
    border-top-right-radius: $card-border-radius;
    overflow: hidden;
    background: linear-gradient(270deg, #138862, #06110f, #54803d, #171d14, #204c68, #020b11);
    background-size: 1200% 1200%;

    -webkit-animation: blockAnimation 26s ease infinite;
    -moz-animation: blockAnimation 26s ease infinite;
    animation: blockAnimation 26s ease infinite;

    @-webkit-keyframes blockAnimation {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
    @-moz-keyframes blockAnimation {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
    @keyframes blockAnimation {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }

    img {
    }

    &:hover img {
      transform: scale(1.2);
      opacity: 0.8;
      cursor: pointer;
    }
  }

  .fm-card-content {
    position: relative;
    max-width: 100%;
    padding: 20px;
    background-color: #0d0d0d;

  }


  .continue a {
    text-decoration: none;
    color: dodgerblue;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
}

.fm-card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #f9f9f9;
  border-bottom-left-radius: $card-border-radius;
  border-bottom-right-radius: $card-border-radius;

  .by {
    padding-left: 20px;

    a {
      text-decoration: none;
      color: #777;
      font-size: 14px;

      &:hover {
        color: dodgerblue;
      }
    }
  }
}
`
const BlogPostPreview = ({
  image, title, link, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      <div className="fm-card">
        <div className="fm-card-header" />
        <div className="fm-card-content">
          <Heading level={4}>
            {link ? <Link to={link}>{title}</Link> : title}
          </Heading>
          <Paragraph>
            <p>{children}</p>
          </Paragraph>
        </div>
      </div>
    </Wrapper>
  )
}


BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any,
  code: PropTypes.node,
}

export default BlogPostPreview
