import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import {
 BlogPage, HomePage, NotFoundPage, ProjectsPage
} from 'components'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/blog" component={BlogPage} />
        <Route path="/projects" component={ProjectsPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
