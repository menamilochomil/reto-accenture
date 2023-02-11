import { useState, useEffect } from "react"
import '../style/Content.css';
// import Post from "./Post";
// import Ima from "./Ima"

// import { fetchGet } from "../services/api"

const Content = () => {

    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)
    // const [image, setImage] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/'

    //Getting data from api
    const showData = () => {
        fetch(url + 'posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }
    /*
    I pretended to connect with a click on the div image the images with the Post component
        const handleClick =() =>{
            setShow(true)
        }
        onClick={()=>handleClick()}
    

    In this part I got the random images but I couldn't connect with the main data json
         const showImages = () => {
            fetch("https://api.unsplash.com/photos/?client_id=kyUcvjOklQmr7ybRsFAZ1wWsrGNpWyLRbTMhpPhRMF8")
           .then((resp) => resp.json())
           .then((images) => {
            setImage(images);
          })
        }
        */

    useEffect(() => {
        showData()
        // showImages()
    }, []
    )

    if (data === null) {
        return []
    } else {
        return (
            <section className='container-content'>
                {/* <Ima/> */}
                {data.map((result) =>
                    <div className='content  content-div' key={result.id}>
                        {/* <img  className='content  content-img' width={700}  height={700} src="https://source.unsplash.com/random"/> */}
                        {/* <>{image.map((x) => {
                        <img width={500} src={x.links.download} />
                    })}</> */}
                        <h3 className='content  content-title' >{result.title}</h3>
                        <p className='content  content-body' >{result.body}</p>
                        {/* <Post show={show}
                            // send={sendOrder}
                        /> */}
                    </div>

                )}
            </section>
        )
    }
}

export default Content