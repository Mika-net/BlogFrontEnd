import React from 'react'

import { Footer, Header, PageTemplate, ProjectsList } from 'components'

const ProjectsPage = () => {
  return (
    <PageTemplate
      header={<Header/>}
      children={<ProjectsList/>}
      footer={<Footer/>}
    >
    </PageTemplate>
  )
}

export default ProjectsPage
