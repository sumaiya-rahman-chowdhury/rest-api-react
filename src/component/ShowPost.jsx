import React from 'react'
import deletePost from '../hooks/useDelete'
import useDelete from '../hooks/useDelete'
import useFetch from '../hooks/useFetch'

export default function ShowPost({ post,setPost }) {
    // const {setPost} = useFetch()
    console.log(post)
    const {deletePost} = useDelete()

    return (
        <div>
            <div>
                <h2>Posts</h2>
                <div className="post-box">
                    {post && post.length > 0 ? (
                        post.map((item) => (
                            <div key={item.id} className='post'>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                <div className="button">
                                    <div className="delete-btn"                                    
                                    onClick={() => deletePost(item.id,post,setPost)}>Delete</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading .........</p>
                    )}
                </div>
            </div>
        </div>
    )
}
