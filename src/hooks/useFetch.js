import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPost(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    return { post }
}
