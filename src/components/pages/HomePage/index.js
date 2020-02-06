import React from 'react'

import {
  BioShort, Footer, Header, PageTemplate, SkillSetList,
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      bioShort={<BioShort />}
      footer={<Footer />}
    >
      <SkillSetList />
    </PageTemplate>
  )
}

export default HomePage
