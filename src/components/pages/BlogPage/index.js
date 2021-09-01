import React from 'react'

import {
  Footer, Header, PageTemplate, BlogList,
} from 'components'

const BlogPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <BlogList />
    </PageTemplate>
  )
}

export default BlogPage
