import { useState, useEffect } from "react"
import Ima from "./Ima"

// import { fetchGet } from "../services/api"

const Content = () =>{

    const [data, setData] = useState([])
    const [image, setImage] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/'

    //Getting data from api
    const showData = () => {
        fetch(url+'posts')
        .then((response) => response.json())
        .then((json) => setData(json));
      }  

    //   const showImages = () => {
    //     fetch("https://source.unsplash.com/random")
    //     .then((response) => response.json())
    //     .then((json) => setImage(json.message));
    //   }

    //   showImages()

    useEffect( () => {
        showData()
    }, []
    )

    return (
        <>
        <Ima/>
           {data.map( (result) => 
                <div  key= {result.id}>
                <h3>Title: {result.title}</h3>
                <p>Body: {result.body}</p>
            </div>
 
           )} 
        </>
    )

}

export default Content