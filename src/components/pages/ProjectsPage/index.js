import React from 'react'

import {
  Footer, Header, PageTemplate, ProjectsList,
} from 'components'

const ProjectsPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <ProjectsList />
    </PageTemplate>
  )
}

export default ProjectsPage
