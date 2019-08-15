import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from '.'

storiesOf('Block', module)
  .add('default', () => (
    <Block>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('reverse', () => (
    <Block reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('palette', () => (
    <Block palette="grayscale">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('palette reverse', () => (
    <Block palette="grayscale" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('palette opaque', () => (
    <Block palette="grayscale" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('palette opaque reverse', () => (
    <Block palette="grayscale" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
