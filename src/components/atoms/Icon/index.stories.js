// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="close"/>
  ))
  .add('palette', () => (
    <Icon icon="close" palette="grayscale"/>
  ))
  .add('palette reverse', () => (
    <Icon icon="close" palette="grayscale" reverse/>
  ))
  .add('height', () => (
    <Icon icon="close" height={100}/>
  ))
