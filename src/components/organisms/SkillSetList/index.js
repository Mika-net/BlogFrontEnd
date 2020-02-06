import React from 'react'
import styled from 'styled-components'

import { Feature, Heading, Paragraph } from 'components'


const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`


const SkillSetList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading><strong>Languages and Frameworks</strong></StyledHeading>
    <Description>
      Includes the Major technologies I've used in my work.
    </Description>
    <Grid>

      <StyledFeature
        icon="csharp"
        link="https://docs.microsoft.com/en-us/dotnet/csharp/index"
        title="C#"
        code="git clone https://github.com/Mika-net/ApiCall MikasApiCall"
      >
        The current most popular .Net Language, I've had experience with over the last few years. Bellow is an example
        API call I've made with an hour time constraint.
      </StyledFeature>
      <StyledFeature
        icon="react"
        link="https://reactjs.org/"
        title="React"
        code="git clone https://github.com/Mika-net/BlogFrontEnd MikasBlogFrontEnd"
      >
        One of several front end JavaScript frameworks that I've worked with and one of my favorites. Bellow is an
        example of a React app I've made part portfolio, part blog, this one.
        {' '}
      </StyledFeature>
      <StyledFeature
        icon="python"
        link="https://www.python.org/"
        title="Python"
        code="git clone https://github.com/Mika-net/WhitePagesLookup WhitePagesLookup"
      >
        Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
      </StyledFeature>
      <StyledFeature
        icon="ferris"
        link="https://www.rust-lang.org/"
        title="Rust"
        code="git clone https://github.com/Mika-net/RustBook RustBook-by-mika"
      >
        Rust is a general-purpose, multi-paradigm, compiled programming language developed by Mozilla.
      </StyledFeature>
    </Grid>
  </div>
)

export default SkillSetList
