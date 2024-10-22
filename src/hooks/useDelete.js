import useFetch from "./useFetch"

export default function useDelete (){
    // const {post,setPost} = useFetch()
    const deletePost = async (id,post,setPost)=>{
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        })
        .then(response=>{
            if(response.status === 200){
                setPost(
                    post.filter((item)=>item.id !== id )
                )
                alert('Deleted')
            }
            else {
                return
            }
        })
    }

    return {deletePost}
}

