import React from 'react'

import {
  PageTemplate, Header, BioShort, Footer, ProjectsList,
} from 'components'

const ProjectsPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      children={<ProjectsList />}
      footer={<Footer />}
    >
    </PageTemplate>
  )
}

export default ProjectsPage
