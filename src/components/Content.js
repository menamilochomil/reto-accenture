import { useState, useEffect } from "react"
// import { fetchGet } from "../services/api"

const Content = () =>{

    const [data, setData] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/'

    //Getting data from api
    const showData = () => {
        fetch(url+'posts')
        .then((response) => response.json())
        .then((json) => setData(json));
      }  

    //   const showImages = () => {
    //      fetch("https://source.unsplash.com/random").then((res) => console.log(res.json()));
    //   }

    //   showImages()

    useEffect( () => {
        showData()
    }, []
    )

    return (
        <>
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