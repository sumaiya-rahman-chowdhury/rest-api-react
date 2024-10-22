import  { useEffect, useState } from 'react'

export default function useFetch() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPost(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return { post, setPost }
}
