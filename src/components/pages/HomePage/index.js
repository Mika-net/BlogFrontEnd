// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import {
  PageTemplate, Header, BioShort, Footer, FeatureList,
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      bioShort={<BioShort />}
      footer={<Footer />}
    >
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
