import React from 'react'

import { Footer, Header, Heading, PageTemplate } from 'components'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header/>} footer={<Footer/>}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage
