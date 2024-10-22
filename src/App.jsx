import React, { useState } from 'react'
import useFetch from './hooks/useFetch'
import ShowPost from './component/ShowPost'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  const { post, setPost } = useFetch(url)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addPosts = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then((data) => {
        setPost((post) => [data, ...post])
        setTitle('')
        setBody('')
        alert('done')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   addPosts(title,body)

  }
  // console.log(JSON.stringify(post, null, 2))
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea name="" className="form-control" id="" cols="10" rows="8"
          value={body} onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
      <ShowPost post={post} />
    </div>
  )
}

export default App