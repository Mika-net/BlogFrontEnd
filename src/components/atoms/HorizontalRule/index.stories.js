import React from 'react'
import { storiesOf } from '@storybook/react'
import HorizontalRule from '.'

storiesOf('HorizontalRule', module)
  .add('default', () => (
    <HorizontalRule />
  ))
  .add('palette', () => (
    <HorizontalRule palette="grayscale" />
  ))
  .add('palette reverse', () => (
    <HorizontalRule palette="grayscale" reverse />
  ))
