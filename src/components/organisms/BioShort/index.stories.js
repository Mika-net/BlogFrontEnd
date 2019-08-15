import React from 'react'
import { storiesOf } from '@storybook/react'
import { BioShort } from 'components'

storiesOf('BioShort', module)
  .add('default', () => (
    <BioShort />
  ))
