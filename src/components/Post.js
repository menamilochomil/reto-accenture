import { useState, useEffect } from "react"


const Post = (show) => {
    if (!show) {
        return null
    } else {
        return (
            <>
                <div background="black"> holi </div>
            </>
        )
        // const [data, setData] = useState(null)
        //   //Changing the page to see each post

        //   const send = (id) => {
        //     fetch(url+'posts/'+id)
        //     .then((response) => response.json())
        //     .then((json) => setData(json));

        //   }

        //   useEffect( () => {
        //     send()
        // }, []
        // )
    }


}
export default Post