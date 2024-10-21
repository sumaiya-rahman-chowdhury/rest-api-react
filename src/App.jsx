import React from 'react'

import useFetch from './hooks/useFetch'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  
  const {post} = useFetch(url)
  console.log(post)

  return (
    <div>App</div>
  )
}

export default App