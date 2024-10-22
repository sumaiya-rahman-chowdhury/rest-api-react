import React from 'react'

export default function ShowPost({ post }) {
    console.log(post)

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
                                <div className="delete-btn">Delete</div>
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
