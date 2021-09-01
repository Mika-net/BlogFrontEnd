import React from 'react'
import {
  useParams,
} from 'react-router'

import {
  Footer, Header, PageTemplate, ProjectsList,
} from 'components'

const BlogPostPage = () => {
  const { id } = useParams()
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <h1>{id}</h1>
      <ProjectsList />
    </PageTemplate>
  )
}

export default BlogPostPage
