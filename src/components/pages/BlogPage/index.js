import React from 'react'

import {
  Footer, Header, Heading, PageTemplate,
} from 'components'

const BlogPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>This feature is under development</Heading>
    </PageTemplate>
  )
}

export default BlogPage
