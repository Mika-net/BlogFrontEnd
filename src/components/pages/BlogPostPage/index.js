import React from 'react'
import {
  useParams,
} from 'react-router'

import {
  Footer, Header, PageTemplate, ProjectsList,
} from 'components'
import Heading from '../../atoms/Heading'

const BlogPostPage = () => {
  const { id } = useParams()
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>{id}</Heading>
      <ProjectsList />
    </PageTemplate>
  )
}

export default BlogPostPage
