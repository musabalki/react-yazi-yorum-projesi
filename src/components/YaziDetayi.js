import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import YaziYorumlari from "./YaziYorumlari";
//import YorumFormu from "./YorumFormu";


const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    //const [display_name,setDisplay_name]=useState('');
    //const [body,setBody]=useState('');
    

    const handleCommentSubmit=(event,yorum)=>{
        event.preventDefault();
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,yorum)
            .then((response)=>{
                setYorumlar([...yorumlar,response.data])
                //setYorum(YORUM_BASLANGIC)
            })
            .catch((error)=>console.log(error))
    }

    

    useEffect(() => {
        axios.all([axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)])
            .then(responses=>{
                setYaziDetayi(responses[0].data)
                setYorumlar(responses[1].data)
            })
            .catch(error=>console.log(error))
        /*axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then((response) => setYaziDetayi(response.data))
            .catch((error) => console.log(error))

        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
            .then((response) => setYorumlar(response.data))
            .catch((error) => console.log(error));*/
    }, [])

    return (
        <React.Fragment>
            <h2>{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <p>{yaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />
            
        </React.Fragment>
    )
}

export default YaziDetayi;