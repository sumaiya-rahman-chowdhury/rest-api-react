import React from 'react'

import useFetch from './hooks/useFetch'
import ShowPost from './component/ShowPost'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  
  const {post} = useFetch(url)
  console.log(JSON.stringify(post, null, 2))
  return (
    <div>
      <ShowPost post={post}/>
    </div>
  )
}

export default App