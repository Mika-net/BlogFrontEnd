import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  BlogPage, HomePage, NotFoundPage, ProjectsPage,
} from 'components'

import theme from './themes/default'
import BlogPostPage from './pages/BlogPostPage'

const App = () => {
  return (
    <ThemeProvider theme={theme} margin={0}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/blog" component={BlogPage} exact />
        <Route path="/blog/:id" exact>
          <BlogPostPage />
        </Route>
        <Route path="/projects" component={ProjectsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
