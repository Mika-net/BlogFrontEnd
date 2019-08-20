// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import {
  PageTemplate, Header, BioShort, Footer, SkillSetList,
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
