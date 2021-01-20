import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const YaziDetayi=(props)=>{
    const {id}=props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
   

    useEffect(()=>{
        axios
            .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then((response) => setYaziDetayi(response.data))
            .catch((error) => console.log(error))
            console.log("aaa");
    },[])
  
    return (
        <React.Fragment>
            <h2>{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <p>{yaziDetayi.content}</p>
        </React.Fragment>
    )
}

export default YaziDetayi;