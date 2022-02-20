import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card } from 'components'

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`
const ProjectsList = (props) => {
  return (
    <div {...props}>
      <Grid>
        <Card
          title="Python Projects"
          link="https://github.com/Mika-net?tab=repositories&q=&type=&language=python&sort="
          image="https://images.unsplash.com/photo-1528158222524-d4d912d2e208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=80"
        >
          A collection of all the python projects I've worked on and been a part of!
        </Card>
        <Card
          title="Front End Projects"
          link="https://github.com/Mika-net?tab=repositories&q=&type=&language=javascript&sort="
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=80"
        >
          React, Anglur and static designs, I've done a few different projects using each!
        </Card>
        <Card
          title="Rust Projects"
          link="https://github.com/Mika-net?tab=repositories&q=&type=&language=rust&sort="
          image="https://images.unsplash.com/photo-1416424312427-baefa7707d85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=60"
        />
        <Card
          title="C# Projects"
          link="https://github.com/Mika-net?tab=repositories&q=&type=&language=c%23&sort="
          image="https://images.unsplash.com/photo-1505683040473-85e66a1ca54d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=80"
        />
      </Grid>
    </div>
  )
}

ProjectsList.propTypes = {
  reverse: PropTypes.bool,
}

export default ProjectsList
