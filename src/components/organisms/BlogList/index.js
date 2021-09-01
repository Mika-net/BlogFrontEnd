import React from 'react'
import { BlogPostPreview } from 'components'
import styled from 'styled-components'

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  > * {
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const BlogList = () => {
  return (
    <div>
      <Grid>
        <BlogPostPreview
          title="Blog post 1"
          link="blog/1"
          image="https://images.unsplash.com/photo-1528158222524-d4d912d2e208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=80"
        >
          A collection of all the python projects I've worked on and been a part of!
        </BlogPostPreview>
        <BlogPostPreview
          title="Blog post 2"
          link="blog/2"
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=80"
        >
          React, Anglur and static designs, I've done a few different projects using each!
        </BlogPostPreview>
        <BlogPostPreview
          title="blog 3"
          link="blog/3"
          image="https://images.unsplash.com/photo-1416424312427-baefa7707d85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=60"
        />
        <BlogPostPreview
          title="C# Projects"
          link="blog/4"
          image="https://images.unsplash.com/photo-1505683040473-85e66a1ca54d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&h=600&q=80"
        />
      </Grid>
    </div>
  )
}

export default BlogList
