import React from 'react'
import { storiesOf } from '@storybook/react'
import { grayscaleNavigation } from 'components'

storiesOf('grayscaleNavigation', module)
  .add('default', () => (
    <grayscaleNavigation />
  ))
  .add('reverse', () => (
    <grayscaleNavigation reverse />
  ))
